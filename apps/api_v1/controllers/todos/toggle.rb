module ApiV1::Controllers::Todos
  class Toggle
    include ApiV1::Action

    params do
      required(:id).filled
    end

    def call(params)
      if todo
        new_todo = repo.update(todo.id, finished: !todo.finished)
        self.status = 200
        self.body = JSON.generate(new_todo.to_h)
      else
        self.status = 404
        self.body = errors
      end

    end

    private

    def repo
      @repo ||= TodoRepository.new
    end

    def todo
      @todo ||= repo.find(params[:id])
    end

    def errors
      JSON.generate(
        errors: params
                  .error_messages
                  .map { |err| { status: 400, title: err, detail: err } }
      )
    end
  end
end
