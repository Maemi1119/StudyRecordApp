<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Study extends Model
{
    use HasFactory;
    
    public function user(){
    return $this->hasOne(User::class);
    }
    
    public function datas(){
    return $this->hasMany(Data::class);
    }
    
    public function researches(){
    return $this->hasMany(Research::class);
    }
    
    protected $fillable = [
        'title',
        'overview',
        'pass',
    ];
}
