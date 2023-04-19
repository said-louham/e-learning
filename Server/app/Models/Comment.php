<?php

namespace App\Models;

use App\Models\Course;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Comment extends Model
{
    use HasFactory;
    protected $fillable = [
        'comment',
        'user_id',
        'course_id',
    ];

    public function courses(){
        return $this->belongsTo(Course::class,'course_id');
    }
    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }

}
