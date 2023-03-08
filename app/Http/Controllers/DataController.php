<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Study;
use App\Models\Data;
use App\Models\Research;

class DataController extends Controller
{
    //
    
    public function openrecord(Data $data, Research $research, Study $study){
        return Inertia::render('Record',[
            'study'=> $study,
            'datas' => $data ->where('study_id', $study->id) ->get(),
            'researches' => $research ->where('study_id', $study->id) ->get(),
            
            ]);
    }
    
    public function record(Request $request, Study $study){
        //$user = Auth::id();
        //dd($request['check']);
        //Save of experimental and resarch records
        if( !empty($request['aim']) ){
            $record = Data::create([
                'aim'=>$request['aim'],
                'method'=>$request['method'],
                'tool'=>$request['tool'],
                'result'=>$request['result'],
                'memo'=>$request['memo'],
                //'user_id'=>$user,
                'study_id'=>$study->id,
                //'category_id'=>NULL,
            ]);
        //Save of research records
        }elseif( !empty($request['title']) ){
            $memory = Research::create([
                'title'=>$request['title'],
                'body'=>$request['body'],
                'link'=>$request['link'],
                //'user_id'=>NULL,
                'study_id'=>$study->id,
                //'category_id'=>NULL,
            ]);
        }
        return redirect('/open/' .  $study->id);
    }
    
    public function show(Data $data){
        return Inertia::render('Experiment',[
            'datas' => $data
            ]);
    }
    
}
