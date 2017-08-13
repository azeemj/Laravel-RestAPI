<?php

use Illuminate\Database\Seeder;
use App\Article;
class ArticlesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Let's truncate our existing records to start from scratch.
        Article::truncate();
        Article::create([
                'author_id' => 1,
                'title' => "Anewarticle",
                 'url' =>"/article/1",
                 'content' => "Test one content"
                  
            ]
                
                );
        
    Article::create(
                [
                'author_id' => 2,
                'title' => "Anewarticle",
                 'url' =>"/article/2",
                 'content' => "Test two content"
                  
            ]);
    }
}
