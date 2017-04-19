require_relative '../../../../apps/api_v1/controllers/todos/create'

RSpec.describe ApiV1::Controllers::Todos::Create do
  let(:action) { described_class.new }
  let(:title) { 'TEST_TITLE' }
  let(:params) { Hash[todo: { title: title }] }
  let(:wrong_params) { Hash[todo: {}] }
  let(:repository) { TodoRepository.new }

  after do
    TodoRepository.new.clear
  end

  it 'is successful' do
    response = action.call(params)
    expect(response[0]).to eq 201
    expect { action.call(params) }.to change { repository.all.count }.by(1)
  end


  it 'should return array of errors' do
    response = action.call(wrong_params)
    json_response = JSON.parse(response[2].first)
    errors = json_response['errors']

    expect { action.call({}) }.not_to change(repository.all, :count)
    expect(response[0]).to eq 400
    expect(errors).to be_a(Array)
    expect(errors.first['title']).to be_a(String)
    expect(errors.first['detail']).to be_a(String)
    expect(errors.first['status']).to eq 400
  end
end
