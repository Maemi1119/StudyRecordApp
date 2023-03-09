<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Study;
use App\Models\User;

class StudyController extends Controller
{
    public function study(Study $study, User $user){
        //$user = Auth::id();
        return Inertia::render('Study',[
            'studies' => $study->get(),
            ]);
    }
    
    public function create(Request $request, Study $study){
        //$user = Auth::id();
        $create = Study::create([
            'title'=>$request['title'],
            'overview'=>$request['overview'],
            'pass'=>$request['pass'],
        ]);
        
        return redirect('/');
        //return redirect('/open/' . $study->id);
    }
    
    public function delete(Study $study){
        $study->delete();
        return redirect('/');
    }
}
