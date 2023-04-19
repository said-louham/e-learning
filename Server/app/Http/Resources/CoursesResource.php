<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CoursesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */ 
    public function toArray($request)
    {
        return [
            'title'=>$this->title,
            'subtitle'=>$this->subtitle,
            'discription'=>$this->discription,
            'image'=>$this->image,
            'language'=>$this->language,
            'price'=>$this->price,
            'user_id'=>$this->user_id,
            'Target'=>$this->Target,
            'objectifs'=>$this->objectifs,
            'category_id'=>$this->category_id,
            'created_at'=>$this->created_at,
            'comments'=>$this->comments,
            'ratings'=>$this->ratings,
            'isAccept'=>$this->isAccept
        ];
    }
}
