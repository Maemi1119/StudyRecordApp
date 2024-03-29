<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\StudyController;
use App\Http\Controllers\DataController;
use App\Http\Controllers\ResearchController;
use App\Http\Controllers\CategoryController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', [StudyController::class,"study"])->name('study');
Route::post('/create', [StudyController::class,'create']);
Route::post('/none/{study}', [CategoryController::class,'none']);

Route::get('/beforecheck/{study}', [StudyController::class,"beforecheck"]);
Route::post('/check/{study}', [StudyController::class,"check"]);

Route::get('/open/{study}', [DataController::class,"openrecord"]);
Route::post('/record/{study}', [DataController::class,'record']);

Route::get('/research/{research}', [ResearchController::class,"show"]);
Route::get('/data/{data}', [DataController::class,"show"]);

Route::put('/updateresearch/{research}', [ResearchController::class,"update"]);
Route::put('/updatedata/{data}', [DataController::class,"update"]);

Route::get('/category/{study}', [CategoryController::class,"category"]);
Route::post('/createcategory/{study}', [CategoryController::class,'createcategory']);

Route::delete('/deletestudy/{study}', [StudyController::class,"delete"])->name('delete.study');
Route::delete('/deleteresearch/{research}', [ResearchController::class,"delete"])->name('delete.research');
Route::delete('/deletedata/{data}', [DataController::class,"delete"])->name('delete.data');
Route::delete('/deletecategory/{category}', [CategoryController::class,"delete"])->name('delete.category');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';