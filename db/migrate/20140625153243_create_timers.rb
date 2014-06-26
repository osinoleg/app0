class CreateTimers < ActiveRecord::Migration
	def up
		create_table :timers do |t|
			t.timestamp :start_time
			t.timestamp :end_time
			t.timestamps
		end
		
    	Timer.create(start_time: 33333, end_time: 3333)
	end

	def down
		drop_table :timers
	end

end