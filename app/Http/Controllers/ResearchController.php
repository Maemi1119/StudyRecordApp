<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Research;

class ResearchController extends Controller
{
    //
    public function show(Research $research){
        return Inertia::render('Research',[
            'researches' => $research
            ]);
    }
    
    public function delete(Research $research){
        $research->delete();
        return redirect('/open/' .  $research->study_id);
    }
}
