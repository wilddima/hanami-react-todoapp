module ApiV1::Controllers::Todos
  class Index
    include ApiV1::Action

    def call(params)
      self.status = 200
      self.body = data
    end

    private

    def data
      repo = TodoRepository.new
      todos = repo.all
      JSON.generate(
        todos: todos.map(&:to_h)
      )
    end
  end
end
