<?php

namespace App\lib;

use App\Article;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Articles
 *
 * @author azeem
 */
class Articles {

    //put your code here



    static function getArticles($limit) {
        $output = '';
        if ($limit == false) {
            $output = Article::all();
        } else {

            $output = Article::take($limit)->get();
            /* if(count($output)>0){
              // echo  $output[0]->Authorinfo->name;
              $output[0]->author=$output[0]->Authorinfo->name;;
              //array_push($output->author,  "test")   ;
              } */
        }

        return $output;
    }

    static function create($request) {

        try {


            $article = new Article();
            if (isset($request['title'])) {
                $article->title = $request['title'];
            }

            $article->author_id = $request['author_id'];


            if (isset($request['url'])) {
                $article->url = $request['url']; // return 1;
            }
            if (isset($request['content'])) {
                $article->content = $request['content'];
            }

            $article->save();
            return $article->id;
        } catch (\Illuminate\Database\QueryException $e) {

            return $e;
        }
    }

    public static function getArticleId($id) {

        $article = Article::where('id', '=', $id)->first();
        if ($article === null) {
            // user doesn't exist
            return -1;
        } else {
            return $article;
        }
    }

    public static function updateArticle($request, $id) {

        $article = \App\Article::find($id);

        if (count($article) > 0) {


            try {

                if (isset($request['title'])) {
                    $article->title = $request['title'];
                }
                if (isset($request['author_id'])) {
                    $article->author_id = $request['author_id'];
                }

                if (isset($request['url'])) {
                    $article->url = $request['url']; // return 1;
                }
                if (isset($request['content'])) {
                    $article->content = $request['content'];
                }

                $article->save();
                return $id;
            } catch (\Illuminate\Database\QueryException $e) {

                return $e;
            }
        } else {
            return -1;
        }
    }

}
