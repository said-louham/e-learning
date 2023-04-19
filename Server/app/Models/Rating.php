<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    use HasFactory;
    protected $fillable = [
        'rate',
        'user_id',
        'course_id',
    ];
    
    public function courses(){
        return $this->belongsTo(Course::class,'course_id');
    }
    
}
