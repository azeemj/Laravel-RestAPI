<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    //
     protected $table = 'articles';
     protected $fillable = ['title', 'content'];
     
     
     public function Authorinfo() {
        return $this->belongsTo('App\Author','author_id','id');
        
    }
}
