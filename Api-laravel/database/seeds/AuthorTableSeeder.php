<?php

use Illuminate\Database\Seeder;

class AuthorTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        
        App\Author::create([
                'id' => 1,
                'name' => "JohnSmith",
                  
            ]
                
                );
        
        App\Author::create(
                [
                'id' => 2,
                'name' => "JaneSmith"
                  
            ]);
    }
}
