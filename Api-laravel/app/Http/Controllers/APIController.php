<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Lib\ApiProducer;
use Illuminate\Support\Facades\Input as Input;

class APIController extends Controller {

    /**
     *
     * Get all articles
     *
     * @Get("/single-article/id")
     * @Versions({"v1"})
     * @Request(none)
     * @Response JSON array
     */
    public function getAllArticles() {

        $info = ApiProducer::getArticles(0, false);
        return response()->json($info['data'], $info['status']);
    }

    /**
     *
     * Get all articles
     *
     * @Get("/all-articles")
     * @Versions({"v1"})
     * @Request($request,$offset)
     * @Response JSON array
     */
    public function getOneArticle(Request $request, $offset) {
        $info = ApiProducer::getArticles($offset, 1);
        // return response()->json($info);   
        return response()->json($info['data'], $info['status']);
    }

    /**
     *
     * creating articles
     *
     * @Post("/create-article")
     * @Versions({"v1"})
     * @Request($request)
     * @Response JSON array
     */
    public function storeArticle(Request $request) {


        $info = ApiProducer::createArticle($request->all());

        return response()->json(['data' => $info['data']], $info['status']);
    }

    /**
     *
     * creating author
     *
     * @Post("/create-author")
     * @Versions({"v1"})
     * @Request($request)
     * @Response JSON array
     */
    public function storeAuthor(Request $request) {


        $info = ApiProducer::createAuthor($request->all());

        return response()->json($info['data'], $info['status']);
    }

    /**
     *
     * delete article
     *
     * @Delete("/delete-article/{ID}")
     * @Versions({"v1"})
     * @Request($request)
     * @Response JSON array
     */
    public function deleteArticle(Request $request, $id) {//return response()->json("test");  
        $info = ApiProducer::deleteArticle($request->all(), $id);

        return response()->json(['data' => $info['data']], $info['status']);
    }

    /**
     *
     * update article
     *
     * @Put("/delete-article/{ID}")
     * @Versions({"v1"})
     * @Request($request)
     * @Response JSON array
     */
    public function updateArticle(Request $request, $id) {


        $info = ApiProducer::updateArticle($request->all(), $id);

        return response()->json(['data' => $info['data']], $info['status']);
    }

}
