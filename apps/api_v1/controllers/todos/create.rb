module ApiV1::Controllers::Todos
  class Create
    include ApiV1::Action

    params do
      required(:todo).schema do
        required(:title).filled
        required(:describe)
      end
    end

    def call(params)
      repo = TodoRepository.new
      if params.valid?
        todo = repo.create(params[:todo])
        self.status = 201
        self.body = JSON.generate(todo.to_h)
      else
        self.status = 400
        self.body = errors
      end
    end

    private

    def errors
      JSON.generate(
        errors: params.error_messages.map do |err|
          {
            status: 400,
            title: err,
            detail: err
          }
        end
      )
    end
  end
end
