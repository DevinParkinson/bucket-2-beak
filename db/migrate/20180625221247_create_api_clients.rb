class CreateApiClients < ActiveRecord::Migration[5.1]
  def change
    create_table :api_clients do |t|
      t.string :name
      t.string :email
      t.string :login

      t.timestamps
    end
  end
end
