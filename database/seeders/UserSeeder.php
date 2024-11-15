<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(Faker $faker): void
    {
        DB::statement( 'SET FOREIGN_KEY_CHECKS=0;' );
		DB::table('users')->truncate();

        for ($i=0; $i < 100; $i++) { 
        	
	        $users[] = [
                'name'  => $faker->userName(),
                'email'  => $faker->safeEmail(),
                'password'  => Hash::make('1234'),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ];
        }
        
        DB::table('users')->insert($users);
		DB::statement( 'SET FOREIGN_KEY_CHECKS=1;' );
    }
}
