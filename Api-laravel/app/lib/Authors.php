<?php namespace App\lib;
       use App\Author;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Authors
 *
 * @author azeem
 */
class Authors {
    //put your code here
    
    public static function getAuthorId($id) {

        $author = Author::where('id', '=', $id)->first();
        if ($author === null) {
            // user doesn't exist
            return -1;
        }else{
           return $author; 
        }
    }
    
    /**
     * 
     * @param type $request
     * @return array|| INT
     */
     static function create($request) {
        
        try{
            
        
        $author = new Author();
        
        if (isset($request['name'])) {
        $author->name = $request['name'];
        }
       
        
        $author->save(); //return 1;
        return $author->id;
        } catch ( \Illuminate\Database\QueryException $e) {
    
            return $e;
        }
    }
    
}
