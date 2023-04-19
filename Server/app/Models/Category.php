<?php

namespace App\Models;

use App\Models\Course;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

// use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
// use Astrotomic\Translatable\Translatable;

class Category extends Model  #implements TranslatableContract
{
    use HasFactory;
    // use Translatable;
    protected $fillable = [
        'name',
        'image',
    ];

    public function courses(){
        return $this->hasMany(Course::class);
    }
}
