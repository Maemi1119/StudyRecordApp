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
        return Inertia::render('Research',[
            'researches' => $research,
            'category' => $category ->where('id', $research->category_id) ->get(),
            'categories' => $category ->get(),
            'user' => $user ->where('id', $research->user_id) ->get(),
            ]);
    }
    
    public function update(Request $request, Research $post){
        $user = Auth::id();
        $userId = [];
        if ( !empty($user) ){
            $userId = $user;
        }else{
            $userId = 1;
        }
        
        $data = array(
                'title'=>$request['title'],
                'body'=>$request['body'],
                'link'=>$request['link'],
                'user_id'=>$userId,
                'study_id'=>$request['study_id'],
                'category_id'=>$request['category_id']);
                
        $input_post = $data;
        $post->fill($input_post)->save();
        
        return redirect('/research/' . $post->id);
    }
    
    public function delete(Research $research){
        $research->delete();
        return redirect('/open/' .  $research->study_id);
    }
}
