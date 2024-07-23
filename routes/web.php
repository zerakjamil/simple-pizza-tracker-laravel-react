<?php

use App\Http\Controllers\PizzaController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PublicPizzaController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/order/{pizza}',[PublicPizzaController::class, 'show'])->name(('public.pizzas.show'));

Route::middleware('auth')->group(function () {
    Route::group(['prefix' => 'pizzas'], function () {
        Route::get('/', [PizzaController::class, 'index'])->name('pizzas.index');
        Route::get('/{pizza}/edit', [PizzaController::class, 'edit'])->name('pizzas.edit');
        Route::patch('/{pizza}/update', [PizzaController::class, 'update'])->name('pizzas.update');
        Route::delete('/{pizza}/destroy', [PizzaController::class, 'destroy'])->name('pizzas.destroy');
    });

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
