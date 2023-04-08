<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Admin::create([
            'id'  => 1,
            'name'  => 'Administrator',
            'email' => 'admin@gmail.com',
            'mobile' => '123456',
            'password' => bcrypt('123456'),
        ]);
    }
}
