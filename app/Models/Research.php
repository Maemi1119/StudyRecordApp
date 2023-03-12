<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Research extends Model
{
    use HasFactory;
    
    public function user(){
    return $this->hasOne(User::class);
    }
    
    public function study(){
    return $this->hasOne(Study::class);
    }
    
    public function category(){
    return $this->belongsTo(Category::class);
    }
    
    protected $fillable = [
        'title',
        'body',
        'link',
        'user_id',
        'study_id',
        'category_id',
    ];
}
