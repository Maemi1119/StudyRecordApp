<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Research extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'title',
        'body',
        'link',
        'user_id',
        'study_id',
        'category_id',
    ];
}
