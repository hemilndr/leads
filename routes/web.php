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

/* Routes for Admin */
Route::get('/manage', ['uses' => 'Admin\AdminController@login'])->name('admin.login.form');
Route::post('login', ['uses' => 'Admin\AdminController@adminLogin'])->name('admin.login');

Route::group(['prefix' => 'admin-manage', 'namespace' => 'Admin','as'=>'admin.', 'middleware' => 'isAdmin'], function () {

    Route::post('logout', ['uses' => 'AdminController@logout'])->name('logout');
    Route::get('dashboard', ['uses' => 'AdminController@dashboard'])->name('dashboard');
    Route::get('users', ['uses' => 'LeadController@index'])->name('users.list');



});
/* frontend Routes */
Route::get('/', ['uses' => 'Frontend\HomeController@index']);
Route::post('register', ['uses' => 'Frontend\HomeController@register'])->name('user.register');
Route::get('success', ['uses' => 'Frontend\HomeController@registrationSuccess'])->name('registration.success');
Route::middleware(['auth'])->group(function () {
    Route::get('/referral/code', [HomeController::class, 'generateReferralCode']);
    Route::get('/referral/link', [HomeController::class, 'generateReferralLink']);
});

