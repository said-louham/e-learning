<?php

namespace App\Http\Controllers;

use App\Models\Rating;
use Illuminate\Http\Request;
use App\Http\Resources\RatingResource;
use App\Http\Resources\RatingCollection;

class ApiRatingController extends Controller
{
  
    public function index()
    {
       $rating= Rating::all();
    return new RatingCollection($rating);
    }

    public function store(Request $request)
    {

        $this->validate($request,[
            'rate'=>'required',
            'user_id'=>'required',  //delete this
            'course_id'=>'required',
        ]);

        
        $rate=Rating::where('user_id',$request->input('user_id') )
                      ->where( 'course_id',$request->input('course_id'))
                      ->first();
        if(isset($rate)){
                $rate->update([
                'rate'=>$request->input('rate')
                ]);

                return response()->json([
                 'message'=>' rate updated seccessfully',
                 'rate'=>$rate
                ]);
        }else{
            $rate=Rating::create([
            'rate'=>$request->input('rate'),
            'user_id'=>$request->input('user_id'), 
            'course_id'=>$request->input('course_id'),
        ]);
            return response()->json([
                'message'=>'rate created seccessfully',
                'rate'=>$rate
               ]);
        }

        // Rating::create([
        //     'rate'=>$request->input('rate'),
        //     'user_id'=>$request->input('user_id'), // auth()->user()
        //     'course_id'=>$request->input('course_id'),
        // ]);
        // return response()->json([
        //     'message'=>'rate added seccessfully'
        // ]);
        
    }

    
    public function show(Rating $rating){
        
        return new RatingResource($rating);
    }


       public function update(Request $request, Rating $rating){

         $rating->update([
            'rate'=>$request->input('rate'),
            'user_id'=>$request->input('user_id'),
            'course_id'=>$request->input('course_id'),
                    
                    ]);
        return response()->json([
            'message'=>' rating updated seccefully'
        ]);
    }



    public function destroy(Rating $rating)
    {
        $rating->delete();
        return response()->json([
            'message'=>'rating deleted seccefuly'
        ]);
    }
}
