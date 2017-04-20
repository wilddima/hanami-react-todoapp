require_relative '../../../../apps/api_v1/controllers/todos/index'

RSpec.describe ApiV1::Controllers::Todos::Index do
  let(:action) { described_class.new }
  let(:params) { Hash[] }
  let(:todo_params) { { title: 'test' } }

  before do
    5.times do
      TodoRepository.new.create(todo_params)
    end
  end

  after do
    TodoRepository.new.clear
  end

  it 'is successful' do
    response = action.call(params)
    json_response = JSON.parse(response[2].first)

    expect(response[0]).to eq 200
    expect(response[1]['Content-type']).to eq('application/json; charset=utf-8')
    expect(
      json_response['todos']
      .first['title']
    ).to eq(todo_params[:title])
  end
end
