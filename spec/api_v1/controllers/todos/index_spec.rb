require_relative '../../../../apps/api_v1/controllers/todos/index'

RSpec.describe ApiV1::Controllers::Todos::Index do
  let(:action) { described_class.new }
  let(:params) { Hash[] }

  it 'is successful' do
    response = action.call(params)
    expect(response[0]).to eq 200
    expect(response[1]['Content-type']).to eq('application/json; charset=utf-8')
  end
end
