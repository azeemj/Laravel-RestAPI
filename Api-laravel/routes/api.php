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
Route::post('/v1/create-author', 'APIController@storeAuthor');

//create article
Route::post('/v1/create-article', 'APIController@storeArticle');


//update article
Route::put('/v1/update-article/{article}', 'APIController@updateArticle');




//delete article

Route::delete('/v1/delete-article/{article}', 'APIController@deleteArticle');
