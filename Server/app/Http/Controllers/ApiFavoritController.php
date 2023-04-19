<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
use Illuminate\Http\Request;
use App\Http\Resources\FavoriteCollection;

class ApiFavoritController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $favorite=Favorite::all();
        return new FavoriteCollection($favorite);
    }

    
    public function store(Request $request)
    {
        $this->validate($request,[
            'user_id'=>'required',
            'course_id'=>'required',
        ]);
        $user_favorite=Favorite::where('user_id',$request->input('user_id'))
                                ->where('course_id',$request->input('course_id'))
                                ->first();
        if(!$user_favorite){
            $favorite=Favorite::create([
                'user_id'=>$request->input('user_id'),
                'course_id'=>$request->input('course_id'),
            ]);
            return response()->json([
                'message'=>'favorite added seccessfully',
                'favorite'=>$favorite
    
            ]);
        }else{
            return response()->json([
                'message'=>'favorite alrady exist',
            ]);

        }
       
       

        
    }
  public function show( $id){
        
    $favorite=Favorite::find($id);
        return response()->json([
            'favorite'=>$favorite
        ]);
    }

    public function destroy($id){
    $favorite=Favorite::find($id);
    // $favorite=Favorite::where('user_id',$request->input('user_id'))
    // ->where('course_id',$request->input('course_id'))
    // ->first();
       $favorite->delete();
        return response()->json([
            'message'=>'Favorite deleted seccefully',
            'favorite'=>$favorite
        ]);
    }
}

// tache 
// epique
// sous tach
// sprint 
// 
