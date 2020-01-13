<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|unique:products|max:255',
            'description' => 'required',
            'img' => 'required'
        ]);
        $product = new Product($validatedData);
        $product->save();
        return response()->json(['created' => true], 201);
    }
}
