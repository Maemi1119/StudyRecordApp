<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Study;
use App\Models\User;
use App\Models\Category;

class StudyController extends Controller
{
    public function study(Study $study, User $user){
        $user = Auth::id();
        return Inertia::render('Study',[
            'studies' => $study->get(),
            'study' => $study ->where('user_id', $user) ->get(),
            ]);
    }
    
    public function beforecheck(Study $study){
        return Inertia::render('CheckPass',[
                'study' => $study ->where('id', $study->id) ->first()
            ]);
    }
    
    public function check(Request $request, Study $study){
        if( $study->pass == $request['pass'] ){
            session(['check'.$study->id => true]);
            return redirect('/open/' .  $study->id);
        }
        return redirect()->back()->withErrors(['missing' => 'Incorrect password']);
    }
    
    public function create(Request $request, Study $study){
        $user = Auth::id();
        $userId = [];
        if ( !empty($user) ){
            $userId = $user;
        }else{
            $userId = 1;
        }
        $create = Study::create([
            'title'=>$request['title'],
            'overview'=>$request['overview'],
            'pass'=>$request['pass'],
            'user_id'=>$userId
        ]);
        return redirect('/');
    }
    
    public function delete(Study $study){
        $study->delete();
        return redirect('/');
    }
}
