class CreateMarker < ActiveRecord::Migration
  def change
    create_table :markers do |t|
      t.string :list_uuid, null:false
      t.string :description
      t.datetime :event_start
      t.datetime :event_end
      t.datetime :event_timestamp
      t.timestamps null:false
    end
    add_index :markers, :list_uuid
  end
end
