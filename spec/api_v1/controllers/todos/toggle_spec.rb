require_relative '../../../../apps/api_v1/controllers/todos/toggle'

RSpec.describe ApiV1::Controllers::Todos::Toggle do
  let(:action) { described_class.new }
  let(:repository) { TodoRepository.new  }
  let(:todo) { repository.last }
  let(:params) { Hash[id:  todo.id] }

  before do
    repository.create(title: 'test')
  end

  after do
    repository.clear
  end

  it 'is successful' do
    response = action.call(params)
    expect(response[0]).to eq 200
  end

  it 'should toggle finished state of present todo' do
    expect { action.call(params) }.to change { repository.find(todo.id).finished }
  end

  it 'should return error if todo is not present' do
    response = action.call(id: 0)
    expect(response[0]).to eq 404
  end
end
