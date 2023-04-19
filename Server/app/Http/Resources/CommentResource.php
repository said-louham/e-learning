<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        // return parent::toArray($request);
        return [
        'id'=>$this->id,
        'comment'=>$this->comment,
        'user_id'=>$this->user_id,
        'course_id'=>$this->course_id,
        'created_at'=>$this->created_at,
        'updated_at'=>$this->updated_at,
        'user'=>$this->user
        ];
    }
}
