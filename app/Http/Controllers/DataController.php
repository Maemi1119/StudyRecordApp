<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Study;
use App\Models\Data;
use App\Models\Research;
use App\Models\Category;
use App\Models\User;

class DataController extends Controller
{
    //
    
    public function openrecord(Data $data, Research $research, Study $study, Category $category){
        return Inertia::render('Record',[
            'study'=> $study,
            'datas' => $data ->with('category') ->where('study_id', $study->id) ->get(),
            'researches' => $research ->with('category') ->where('study_id', $study->id) ->get(),
            ]);
    }
    
    public function record(Request $request, Study $study){
        $user = Auth::id();
        $userId = [];
        if ( !empty($user) ){
            $userId = $user;
        }else{
            $userId = 1;
        }
        
        //Save of experimental and resarch records
        if( !empty($request['aim']) & !empty($request['method']) & !empty($request['result'])){
            $record = Data::create([
                'aim'=>$request['aim'],
                'method'=>$request['method'],
                'tool'=>$request['tool'],
                'result'=>$request['result'],
                'memo'=>$request['memo'],
                'user_id'=>$userId,
                'study_id'=>$study->id,
                'category_id'=>1,
            ]);
        //Save of research records
        }elseif( !empty($request['title'] ) ){
            $memory = Research::create([
                'title'=>$request['title'],
                'body'=>$request['body'],
                'link'=>$request['link'],
                'user_id'=>$userId,
                'study_id'=>$study->id,
                'category_id'=>1,
            ]);
        }
        return redirect('/open/' .  $study->id);
    }
    
    public function show(Data $data, Category $category, User $user){
        return Inertia::render('Experiment',[
            'datas' => $data,
            'category' => $category ->where('id', $data->category_id) ->get(),
            'user' => $user ->where('id', $data->user_id) ->get(),
            ]);
    }
    
    public function delete(Data $data){
        $data->delete();
        return redirect('/open/' .  $data->study_id);
    }
    
}
