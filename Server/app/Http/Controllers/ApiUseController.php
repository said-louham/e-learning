<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\PasswordReset;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\UsersCollection;
// use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Validation\Rules\Exists;
use Illuminate\Support\Facades\Password;
use App\Notifications\ResetPasswordNotification;
use League\Config\Exception\ValidationException;
use Illuminate\Validation\Rules\Password as RulesPassword;

class ApiUseController extends Controller {
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users=User::all();
        return new UsersCollection($users);
    }
 

    public function show( $id) {
        $User=User::find($id);
        return new UserResource($User);

        // return response()->json([
        //     'course'=>$Course,
        //     // 'show'=>$Course->comments
        //     ]);
    }
    public function store(Request $request) {
        $this->validate($request,[
        'full_name'=>'required',
         'email'=>'required',
         'password'=>'required']);
         $userexist=User::whereEmail($request->email)->first();
        if($userexist){
            return response()->json([
                'error'=>' Ops ! this user is alrady exist'
            ]);
        }
        $user=User::create([
            'full_name' =>$request->input('full_name'),
            'email' =>$request->input('email'),
            'password'=>hash::make($request->input('password'))
        ]);
        return response()->json([
            'message'=>'account created success'
        ]);
    }

    public function Login(Request $request){
        $this->validate($request,[
            'email'=>'required',
            'password'=>'required'
        ]);
        $user=User::whereEmail($request->email)->first();
        if(isset($user->id)){
                    if(hash::check($request->password,$user->password)){
                        $token=$user->createToken('Auth_token')->plainTextToken;
                                return response()->json([
                                    'message' => 'connected seccefuly',
                                    'user'=>$user,
                                    'token'=>$token,
                                    'login'=>true
                                ]);
                    }else{
                                return response()->json([
                                    'message' => 'password not correct',
                                    'login'=>false
                                ]);
                    };
        }else{
                    return response()->json([
                        'message' => 'no user exist with this email',
                        'login'=>false
                    ]);
        };
        }


    public function Profile(){
        // return response()->json( auth()->user());
        return new UserResource(auth()->user());
    }

    public function destroy(User $user)
    {  
        $user->delete();
        return response()->json([
            'message' =>' user deleted seccefully '
        ]);
     }

    public function logout(){
        // auth()->user()->tokens()->delete();
        return response()->json([
            'message' => 'logout seccessfully',
        ]);
    }

// ----------------------------------------------------------------

    public function forget(Request $request){
            $this->validate($request,[
                    'email'=>'required',
                ]);
         // find user with email
                 $user=User::whereEmail($request->input('email'))->first();
                    if(!isset($user->email)|| !isset($user)){
                        return response()->json([
                            'message'=>' no user exist with this email try agin'
                        ]);
                    }
// create random 4 numbers
         $NumberToken=str_pad(random_int(1,9999),4,'0',STR_PAD_LEFT);
         $userPasswordReset=PasswordReset::where('email',$request->input('email'))->first();
         if($userPasswordReset){
               
                   $userPasswordReset->update([
                         "email"=>$user->email,
                         'token'=>$NumberToken
                         ]);
    
            }else{
                    PasswordReset::create([
                        "email"=>$user->email,
                        'token'=>$NumberToken
                         ]);
            }

            $user->notify(new ResetPasswordNotification($NumberToken));

               return response()->json([
                            'message' => 'check your email adress',
                        ]);
    }

public function reset(Request $request){

            $request->validate([
                'email' => 'required|email',
                'password'=>'required',
                'token' => 'required',
            ]);
            $user=User::whereEmail($request->input('email'))->first();

        if(!isset($user->id)){
            return response()->json(['error'=>'cant find any user with this email']);
        }
        $resetRequest=PasswordReset::where('email',$user->email)->first();
            if(!isset($resetRequest)||$resetRequest->token!=$request->token){
            return response()->json(['error'=>'invalide token ']);
            }

        $user->fill([
            'password'=>Hash::make($request->password)
        ]);
        $user->save();

        $user->tokens()->delete();
        $resetRequest->delete();
         
        $token=$user->createToken('Auth_token')->plainTextToken;
        return response()->json([
            'message'=>'your password chnaged seccessfully',
            'user'=>$user,
            'token'=>$token
        ]);
}



        public function update(Request $request,$id){
            // $user=User::whereEmail($request->input('email'))->first();// find with id 
            $user=User::find($id);
            $this->validate($request,[
                'full_name'=>'required',
                'tel'=>'required',
                'email'=>'required',
                'image'=> 'required',
                'adress'=>'required',
                'sex'=>'required'
            ]);

                if($request->has('image')){
                    $file=$request->image;
                    $imageName=time().'_'.$file->getClientOriginalName();
                    $file->move(public_path('users'),$imageName);
                    if (file_exists(public_path('users/').$user->image)){
                        unlink(public_path('users/').$user->image);
                    }  
                    $user->image=$imageName;
                 }

                $user->update([
                    'full_name'=>$request->input('full_name'),
                    'tel'=>$request->input('tel'),
                    'email'=>$request->input('email'),
                    'adress'=>$request->input('adress'),
                    'sex'=>$request->input('sex'),
                    'image'=> $user->image,
                ]);

                return response()->json([
                    'message'=>' profile updated successfully',
                    'user'=>$user
                ]);
        }

        public function update_Solde(Request $request,$id){
            $user=User::find($id);
            $this->validate($request,[
                'solde'=>'required',
            ]);

            $user->update([
                'solde'=>$request->input('solde'),
            ]);
            return response()->json([
                'message'=>' solde updated successfully',
                'user'=>$user
            ]);
        }

}