<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/



Route::get('/', function () {
      return response()->json(['error' => 'Not found.'], 404);
});


Route::get('/{vue?}', function () { return view('welcome'); })->where('vue', '[\/\w\.-]*');

Route::get('/rooms', function () { return view('welcome'); })->where('vue', '[\/\w\.-]*');

