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
        $categories = $category ->where('study_id', $study->id) ->get();
        
        if(session('check'.$study->id)==true){
            return Inertia::render('Record',[
            'study'=> $study,
            'datas' => $data ->with('category') ->where('study_id', $study->id) ->get(),
            'researches' => $research ->with('category') ->where('study_id', $study->id) ->get(),
            'categories' => $categories
            ]);
        }else{
            return redirect('/beforecheck/' . $study->id);
        }
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
                'category_id'=>$request['category_id'],
            ]);
        //Save of research records
        }elseif( !empty($request['title'] ) ){
            $memory = Research::create([
                'title'=>$request['title'],
                'body'=>$request['body'],
                'link'=>$request['link'],
                'user_id'=>$userId,
                'study_id'=>$study->id,
                'category_id'=>$request['category_id'],
            ]);
        }
            return redirect('/open/' .  $study->id);
    }

public function show(Data $data, Category $category, User $user){
    if(session('check'.$data->study_id)==true){
        return Inertia::render('Experiment',[
        'datas' => $data,
        'category' => $category ->where('id', $data->category_id) ->get(),
        'categories' => $category ->get(),
        'user' => $user ->where('id', $data->user_id) ->get(),
        ]);
    }else{
        return redirect('/beforecheck/' . $study->id);
    }
    }
    
    public function update(Request $request, Data $data){
        
        $input_post['aim'] = $request['aim'];
        $input_post['method'] = $request['method'];
        $input_post['tool'] = $request['tool'];
        $input_post['result'] = $request['result'];
        $input_post['memo'] = $request['memo'];
        $input_post['category_id'] = $request['category_id'];
     
        $data->fill($input_post)->save();
        
        return redirect('/data/' . $data->id);
    }
    
    public function delete(Data $data){
        $data->delete();
        return redirect('/open/' .  $data->study_id);
    }
    
}
