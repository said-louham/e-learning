<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index(){
          $Categories= Category::all();
          return response()->json($Categories);
    }
    public function store(Request $request){
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

        public function getCategory($id){
                       $category= Category::find($id);
                        return response()->json([
                            'message'=> $category
                        ]);
        }
        
    public function delete($id){
                $category= Category::find($id);
                $category->delete();
        return response()->json([
            'message'=> 'deleted seccessfully'
        ]);
    }
}
