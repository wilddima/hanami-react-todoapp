require 'features_helper'

describe 'Visit home' do
  it 'should return status 200' do
    visit '/'

    expect(page.status_code).to eq(200)
  end
end