<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Research;
use App\Models\Category;
use App\Models\User;

class ResearchController extends Controller
{
    //
    public function show(Research $research, Category $category, User $user){
        if(session('check'.$research->study_id)==true){
            return Inertia::render('Research',[
            'researches' => $research,
            'category' => $category ->where('id', $research->category_id) ->get(),
            'categories' => $category ->get(),
            'user' => $user ->where('id', $research->user_id) ->get(),
            ]);
        }else{
            return redirect('/beforecheck/' . $study->id);
        }
    }
    
    public function update(Request $request, Research $research){
        
        $input_post['title'] = $request['title'];
        $input_post['body'] = $request['body'];
        $input_post['link'] = $request['link'];
        $input_post['category_id'] = $request['category_id'];
  
        $research->fill($input_post)->save();
        
        return redirect('/research/' . $research->id);
    }
    
    public function delete(Research $research){
        $research->delete();
        return redirect('/open/' .  $research->study_id);
    }
}
