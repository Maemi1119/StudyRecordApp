<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Research;
use App\Models\Category;
use App\Models\User;

class ResearchController extends Controller
{
    //
    public function show(Research $research, Category $category, User $user){
        return Inertia::render('Research',[
            'researches' => $research,
            'category' => $category ->where('id', $research->category_id) ->get(),
            'user' => $user ->where('id', $research->user_id) ->get(),
            ]);
    }
    
    public function delete(Research $research){
        $research->delete();
        return redirect('/open/' .  $research->study_id);
    }
}
