module ApiV1::Controllers::Todos
  class Index
    include ApiV1::Action

    def call(params)

      self.body = data.to_json
    end

    private

    def data
      { data: 
        { 
          todos: {}
        } 
      }
    end
  end
end
