<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Category;
use App\Models\Study;

class CategoryController extends Controller
{
    public function category(Study $study, Category $category){
        return Inertia::render('Category',[
            'study'=> $study,
            'categories' => $category ->where('study_id', $study->id) ->get(),
            ]);
    }
    
    public function createcategory(Request $request, Study $study){
        $create = Category::create([
            'study_id'=> $study->id,
            'category'=>$request['category'],
            'comment'=>$request['comment'],
        ]);
        
        return redirect('/category/' .  $study->id);
        //return redirect('/category/' .  $study->id);
    }
    
    public function delete(Category $category){
        $category->delete();
        return redirect('/category/' .  $category->study_id);
    }
}
