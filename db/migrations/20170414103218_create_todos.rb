Hanami::Model.migration do
  change do
    create_table :todos do
      primary_key :id


      column :describe, String
      column :title, String, null: false
      column :finished, FalseClass, null: false, default: false 
      column :created_at, DateTime, null: false
      column :updated_at, DateTime, null: false
    end
  end
end
