<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use App\Http\Resources\CommentResource;
use App\Http\Resources\CommentCollection;

class ApiCommentController extends Controller
{
  
    public function index()
    {
        
    //    $comment=Comment::all();
       $comment = Comment::with('user')->get();

    //    return Response()->json([
    //     'message' =>$comment
    // ]);
    return new CommentCollection($comment);
    }

   

    public function store(Request $request)
    {
        $this->validate($request,[
            'comment'=>'required',
            'user_id'=>'required',  //delete this
            'course_id'=>'required',
        ]);
        $comment=Comment::create([
            'comment'=>$request->input('comment'),
            'user_id'=>$request->input('user_id'), // auth()->user()
            'course_id'=>$request->input('course_id'),
        ]);
        return response()->json([
            'message'=>'comment added seccessfully',
            'comment'=>$comment,
            'user'=>$comment->user
        ]);
    }
    public function show(Comment $comment)
    {
        return new CommentResource($comment);
    }
    public function destroy(Comment $comment)
    {
        $comment->delete();
        return response()->json([
            'comment'=>$comment
        ]);
    }
}
