<?php

namespace App\Models;

use App\Models\User;
use App\Models\Rating;
use App\Models\Comment;
use App\Models\Category;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Course extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'subtitle',
        'discription',
        'image',
        'language',
        'price',
        'user_id',
        'category_id',
        'objectifs',
        'Target',
        'isAccept'
    ];

    public function comments(){
        return $this->hasMany(Comment::class);
    }


    public function categories(){
        return $this->belongsTo(Category::class,'category_id');
    }   


    public function ratings(){
        return $this->hasMany(Rating::class);
    }

    public function user()
{
    return $this->belongsTo(User::class);
}
}
