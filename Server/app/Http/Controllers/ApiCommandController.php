<?php

namespace App\Http\Controllers;

use App\Models\Command;
use Illuminate\Http\Request;
use App\Http\Resources\CommandCollection;

class ApiCommandController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Command=Command::all();
        return  new CommandCollection($Command);
    }

    
    public function store(Request $request)
    {
        $this->validate($request,[
            'user_id'=>'required',
            'course_id'=>'required',
        ]);
        Command::create([
            'user_id'=>$request->input('user_id'),
            'course_id'=>$request->input('course_id'),
        ]);
        return response()->json([
            'message'=>'Command added seccessfully'
        ]);
    }

    public function destroy($id){
        
        $Command=Command::find($id);
        $Command->delete();
         return response()->json([
             'message'=>'Command deleted seccefully',
         ]);
    }
}
