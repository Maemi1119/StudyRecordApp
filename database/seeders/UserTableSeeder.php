<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use DateTime;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Guest',
            'email' => 'guest@guest.com',
            'password' => Hash::make('guest'),
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        
        DB::table('users')->insert([
            'name' => 'Test',
            'email' => 'test@test.com',
            'password' => Hash::make('test'),
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
    }
}
