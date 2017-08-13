<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    //
     protected $table = 'authors';
     
     public function articlesinfo() 
   {
      return $this->hasMany('Article');
   }

}
