<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Data extends Model
{
    use HasFactory;
    
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
