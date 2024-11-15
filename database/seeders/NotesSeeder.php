<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Generator as Faker;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class NotesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        DB::statement( 'SET FOREIGN_KEY_CHECKS=0;' );
		DB::table('notes')->truncate();

        for ($i=0; $i < 10; $i++) { 
        	
	        $notes[] = [
                'title'  => $faker->sentence(2),
                'content'  => $faker->paragraph(5),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ];
        }
        
        DB::table('notes')->insert($notes);
		DB::statement( 'SET FOREIGN_KEY_CHECKS=1;' );
    }
}
