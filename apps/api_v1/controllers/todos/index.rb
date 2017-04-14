module ApiV1::Controllers::Todos
  class Index
    include ApiV1::Action
    include JSONAPI::Hanami::Action

    def call(params)
      self.data = data
    end

    private

    def data
      @repo = TodoRepository.new
      @todos = @repo.all
    end
  end
end
