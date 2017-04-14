class SerializableTodo < JSONAPI::Serializable::Resource
  type 'todos'

  attributes :describe, :title, :finished, :created_at, :updated_at
end