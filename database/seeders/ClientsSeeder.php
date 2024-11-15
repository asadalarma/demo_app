<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Generator as Faker;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;


class ClientsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        DB::statement( 'SET FOREIGN_KEY_CHECKS=0;' );
		DB::table('clients')->truncate();

        for ($i=0; $i < 10; $i++) { 
        	
	        $clients[] = [
                'name'  => $faker->name(),
                'email'  => $faker->safeEmail(),
                'address' => $faker->address,
                'website' => $faker->url,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ];
        }
        
        DB::table('clients')->insert($clients);
		DB::statement( 'SET FOREIGN_KEY_CHECKS=1;' );
    }
}
