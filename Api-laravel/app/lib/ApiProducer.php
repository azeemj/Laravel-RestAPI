<?php

namespace App\Lib;

/*
 * This is used to produce the needed data 
 */

use App\Lib\Articles;
use App\Lib\Authors;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;

class ApiProducer {

    public function __construct() {
        
    }

    static function getArticles($limit) {
        $output = array();
        $article = Articles::getArticles($limit);
        // print_r($article);  
        if ($limit == false) {
            $summary = "summary";
        } else {
            $summary = "content";
        }
        if (count($article) > 0) {
            $i = 0;
            foreach ($article as $article_val) {
                $output[$i]['id'] = $article_val['id'];
                $output[$i]["title"] = $article_val['title'];
                $output[$i]["author"] = $article_val->Authorinfo->name;
                ;
                $output[$i][$summary] = $article_val['content'];
                $output[$i]["url"] = $article_val['url'];
                $output[$i]["createdAt"] = $article_val['created_at']->toDateString();
                $i++;
            }


            if ($limit == false) {
                return array("data" => $output, "status" => Config::get('constants.Success'));
            } else {
                return array("data" => $output[0], "status" => Config::get('constants.Success'));
            }
        } else {
            return array("data" => $output, "status" => Config::get('constants.Success'));
        }



        //return  $article;   
    }

    static function createArticle($request) {
        $output = array();
        try {

            if (isset($request['url']) && $request['url'] == "") {
                return array("data" => "URL cannot be empty", "status" => Config::get('constants.Badrequest'));
            }
            if (isset($request['author_id']) && $request['author_id'] != "") {
                $author = Authors::getAuthorId($request['author_id']);
                //return array("data"=>$authour,"status"=> Config::get('constants.Success')); 
                if ($author == "-1") {
                    return array("data" => "No valid author id ", "status" => Config::get('constants.Badrequest'));
                } else {
                    $article = Articles::create($request);

                    if (is_array($article)) {
                        return array("data" => $article, "status" => Config::get('constants.Badrequest'));
                    } else {

                        return array("data" => $article, "status" => Config::get('constants.Success'));
                    }
                }
            } else {
                return array("data" => "No author id is given", "status" => Config::get('constants.Badrequest'));
            }
        } catch (Exception $ex) {

            return array("data" => $ex, "status" => Config::get('constants.Badrequest'));
        }
    }

    static function createAuthor($request) {
        $output = array();
        try {

            if (isset($request['name']) && $request['name'] == "") {
                return array("data" => "Name cannot be empty", "status" => Config::get('constants.Badrequest'));
            } else {

                $author = Authors::create($request);
                if (is_array($author)) {
                    return array("data" => $author, "status" => Config::get('constants.Badrequest'));
                } else {

                    return array("data" => $author, "status" => Config::get('constants.Success'));
                }
            }
        } catch (Exception $ex) {

            return array("data" => $ex, "status" => Config::get('constants.Badrequest'));
        }
    }

    static function updateArticle($request, $id) {

        try {

            if ($id > 0 && $id != "") {
                
                $article=\App\lib\Articles::updateArticle($request, $id);  
                if($article==-1){
                   return array("data" => "No records found", "status" => Config::get('constants.Badrequest'));   
                }
                
                 return array("data" => $article, "status" => Config::get('constants.Success'));
            } else {


                return array("data" => "Name cannot be empty", "status" => Config::get('constants.Badrequest'));
            }
        } catch (Exception $ex) {

            return array("data" => $ex, "status" => Config::get('constants.Badrequest'));
        }
    }
    
    static function deleteArticle($request, $id) {

        try {

            if ($id > 0 && $id != "") {
                
                $article=\App\lib\Articles::deleteArticle($request, $id);  
                if($article==-1){
                   return array("data" => "No records found", "status" => Config::get('constants.Badrequest'));   
                }
                
                 return array("data" => $article, "status" => Config::get('constants.Success'));
            } else {


                return array("data" => "Name cannot be empty", "status" => Config::get('constants.Badrequest'));
            }
        } catch (Exception $ex) {

            return array("data" => $ex, "status" => Config::get('constants.Badrequest'));
        }
    }


}
