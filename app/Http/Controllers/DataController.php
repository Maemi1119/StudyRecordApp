<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Data;
use App\Models\Research;

class DataController extends Controller
{
    //
    
    public function openrecord(Data $data, Research $research){
        return Inertia::render('Record',[
            'datas' => $data ->get(),
            'researches' => $research ->get(),
            ]);
    }
    
    public function record(Request $request){
        //$user = Auth::id();
        //dd($request['check']);
        //Save of experimental and resarch records
        if( $request['check'] == true ){
            $record = Data::create([
                'aim'=>$request['aim'],
                'method'=>$request['method'],
                'tool'=>$request['tool'],
                'result'=>$request['result'],
                'memo'=>$request['memo'],
                //'user_id'=>$user,
                //'study_id'=>$study,
                //'category_id'=>NULL,
            ]);
        //Save of research records
        }elseif( $request['check'] == false ){
            $memory = Research::create([
                'title'=>$request['title'],
                'body'=>$request['body'],
                'link'=>$request['link'],
                //'user_id'=>NULL,
                //'study_id'=>NULL,
                //'category_id'=>NULL,
            ]);
        }
        return redirect('/');
    }
}
