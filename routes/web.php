<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    toast('Your Post as been submited!','success');

    return view('welcome');
});

Auth::routes();
//Auth::routes(['register' => false]);

Route::get('/home', 'HomeController@index')->name('home');

//route user
Route::get('/user', 'UserController@index')->name('user.index');
Route::get('/user/create', 'UserController@create')->name('user.create');
Route::get('/user/{id}/edit', 'UserController@edit')->name('user.edit');
Route::put('/user/{id}', 'UserController@update')->name('user.update');
Route::delete('/user/delete/{id}', 'UserController@destroy')->name('user.delete');

//route role 
Route::get('/role','RoleController@index')->name('role.index');
Route::get('/role/create','RoleController@create')->name('role.create');
Route::get('/role/{id}/edit','RoleController@edit')->name('role.edit');
//permission
Route::get('/permission','PermissionController@index')->name('permission.index');
Route::get('/permission/create','PermissionController@create')->name('permission.create');
Route::get('/permission/{id}/edit','PermissionController@edit')->name('permission.edit');
