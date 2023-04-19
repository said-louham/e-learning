<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Comment;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Resources\CoursesResource;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\CoursesrCollection;

class ApiCoursesController extends Controller{



    // public function Comments(){
    //     return $this->belongsTo(Course::class,'id');
    // }
    // public function Course(){
    //     return $this->hasMany(Comment::class,'course_id');
    // }

    
    public function index(){
        $Course= Course::all();
        $Course = Course::with('comments', 'ratings', 'user')->get();

        return new CoursesrCollection($Course);

        // return response()->json([
        // 'Course'=>$Course->comments
        // ]);
    }

    public function store(Request $request)
    {
        $this->validate($request,[
            "title"=>"required|min:3",
            "subtitle"=>"required|min:3",
            "discription"=>"required|min:3",
            "image"=>"required",
            "language"=>"required|min:3",
            "price"=>"required|min:2",
            "user_id"=>"required|min:1",
            "category_id"=>"required|min:1",
            "Target"=>"required|min:3",
            "objectifs"=>"required|min:3",
        ]);

        if($request->has('image')){
            $file=$request->image;#get the file 
            $imageName=time().'_'.$file->getClientOriginalName(); # time + file name.jpg
            $file->move(public_path('Courses'),$imageName);#upload the file into mypicture folder
        }

       $course= Course::create([
            'title'=>$request->input('title'),
            'subtitle'=>$request->input('subtitle'),
            'discription'=>$request->input('discription'),
            'language'=>$request->input('language'),
            'price'=>$request->input('price'),
            'user_id'=>$request->input('user_id'),
            'category_id'=>$request->input('category_id'),
            'Target'=>$request->input('Target'),
            'objectifs'=>$request->input('objectifs'),
            'image'=> $imageName //image.png
        ]);

        return response()->json([
            // 'image'=>$imageName,
            
            'message'=>' course added seccessfully',
            'course'=>$course
        ]);
    }

    public function show( $id)
    {
        $Course=Course::find($id);
        return new CoursesResource($Course);
        
        // return response()->json([
        //     'course'=>$Course,
        //     // 'show'=>$Course->comments
        //     ]);
    }

    public function update(Request $request, Course $course)
    {
        if($request->has('image')){
            $file=$request->image;
            $imageName=time().'_'.$file->getClientOriginalName();
            $file->move(public_path('Courses'),$imageName);#upload the file into mypicture folder
            // unlink(public_path('Courses/').$course->image);
            if (file_exists(public_path('Courses/').$course->image)){
                unlink(public_path('Courses/').$course->image);
            }  
            $course->image=$imageName;
        }
         
        $course->update([
                    'title'=>$request->input('title'),
                    'subtitle'=>$request->input('subtitle'),
                    'discription'=>$request->input('discription'),
                    'language'=>$request->input('language'),
                    'price'=>$request->input('price'),
                    'user_id'=>$request->input('user_id'),
                    'category_id'=>$request->input('category_id'),
                    'Target'=>$request->input('Target'),
                    'objectifs'=>$request->input('objectifs'),
                    'image'=>$course->image, 
                    ]);

        return response()->json([
            'message'=>'updated seccefully',
            'course'=>$course

        ]);
    }

    public function destroy( $id)
    {
        $Course=Course::find($id);
        $Course->delete();
        return response()->json([
            'message'=> 'Course deleted seccessfully',
            'course'=>$Course,
        ]);
    }

    public function search(Request $request){
        $courses=Course::where('title','like','%'.$request->input('title').'%')->get();
        return response()->json([
            'courses'=>$courses
        ]);
    }


    public function Etat_Course(Request $request,$id){

            $this->validate($request,[
                'isAccept'=>'required'
            ]);
            $course=Course::find($id);
            $course->update([
                'isAccept'=>$request->input('isAccept')
            ]);
            return response()->json([
                'course Target  seccefuly',
                 'course'=>$course   
            ]);

    }
}



