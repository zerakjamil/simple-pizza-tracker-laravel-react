<?php

namespace App\Http\Controllers;

use App\Models\Pizza;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PizzaController extends Controller
{
    public function index()
    {
        $pizzas = Pizza::all();
        return inertia::render('Pizzas/Index', [
            'pizzas' => $pizzas
        ]);
    }

    public function show(Pizza $pizza)
    {
        return inertia::render('Pizzas/Show', [
            'pizza' => $pizza
        ]);
    }

    public function edit(Pizza $pizza):Response
    {
        return inertia::render('Pizzas/Edit', [
            'pizza' => $pizza
        ]);
    }

    public function update(Request $request, Pizza $pizza)
    {
        $pizza->update([
            'status' => $request->status
        ]);
    }

    public function destroy(Pizza $pizza)
    {
        Pizza::destroy($pizza->id);
    }
}
