<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiUseController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ApiRatingController;
use App\Http\Controllers\ApiCommandController;
use App\Http\Controllers\ApiCommentController;
use App\Http\Controllers\ApiCoursesController;
use App\Http\Controllers\ApiFavoritController;
use App\Http\Controllers\ApiCategoryController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// -------------------------------------------------------------------------
// login befor :
    
Route::group([ 'middleware'=>['auth:sanctum']  ],function(){
    Route::get('logout',[ApiUseController::class,'logout']);
    Route::get('Profile',[ApiUseController::class,'Profile']);
});
Route::apiResource('users',ApiUseController::class);
Route::post('Login',[ApiUseController::class,'Login']);



Route::apiResource('course',ApiCoursesController::class);
Route::apiResource('category',ApiCategoryController::class);
Route::apiResource('favorite',ApiFavoritController::class);
Route::apiResource('comment',ApiCommentController::class);
Route::apiResource('ratings',ApiRatingController::class);
Route::apiResource('Command',ApiCommandController::class);


Route::post('forget',[ApiUseController::class,'forget']);
Route::post('reset',[ApiUseController::class,'reset']);


Route::post('search',[ApiCoursesController::class,'search']);
Route::put('update_Solde/{id}',[ApiUseController::class,'update_Solde']);
Route::put('Etat/{id}',[ApiCoursesController::class,'Etat_Course']);