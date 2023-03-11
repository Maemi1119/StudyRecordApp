<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    
    public function study(){
    return $this->hasOne(Study::class);
    }
    
    public function datas(){
    return $this->hasMany(Data::class);
    }
    
    public function researches(){
    return $this->hasMany(Research::class);
    }
    
    protected $fillable = [
        'category',
        'comment',
        'study_id',
    ];
}
