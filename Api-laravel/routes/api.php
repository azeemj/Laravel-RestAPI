<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//get single article

Route::get('/v1/single-article','APIController@getOneArticle');

//get all articles 

Route::get('/v1/all-articles','APIController@getAllArticles');


//create author


//create article
Route::post('/v1/create-article', 'APIController@store');


//update article

//delete article


