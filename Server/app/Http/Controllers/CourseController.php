<?php

namespace App\Http\Controllers;
use App\Models\Category;
use Illuminate\Http\Request;

class CourseController extends Controller{
    public function index()
    {
        $Categories= Category::all();
        return response()->json($Categories);
    }



    public function store(Request $request)
    {
        $this->validate($request,[
            'name'=>'required',
            'image'=>'required',
        ]);
        // add the picture to my folder here:
        Category::create([
            'name'=>$request->input('name'),
            'image'=>$request->input('image'),
        ]);
        return response()->json([
            'message'=>' added seccessfully'
        ]);
    }
}
