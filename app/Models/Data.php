<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Data extends Model
{
    use HasFactory;
    
    public function user(){
    return $this->hasOne(User::class);
    }
    
    public function study(){
    return $this->hasOne(Study::class);
    }
    
    public function category(){
    return $this->hasOne(Category::class);
    }
    
    protected $fillable = [
        'aim',
        'method',
        'tool',
        'result',
        'memo',
        'user_id',
        'study_id',
        'category_id',
    ];
}
