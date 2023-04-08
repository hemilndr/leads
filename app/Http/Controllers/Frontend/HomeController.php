<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Traits\ReferralTrait;
use App\Models\CaseStudy;
use App\Models\User;
use Illuminate\Http\Request;

class HomeController 
{
    use ReferralTrait;

    public function index(){

        return view('website.index');
    }
 
    public function register(Request $request)
    {
        $validatedData = $request->validate([
            'email' => ['required', 'email', 'unique:users'],
            'name' => ['required', 'string', 'max:255'],
        ]);
                
        $referrer = User::where('referral_code', $request->input('reff_code'))->whereNotNull('referral_code')->first();
        $input = ['name'=> $request->name,'email' =>$request->email];
        if ($referrer) {//updating referee users point
            $input['referred_by'] = $referrer->id;
            $referrer->points += 10;
            $referrer->save($input);
        }
        $action = User::create($input);
        if($action){
            $ref_code_gen = $this->generateReferralCode($action->id); //generating ref code for the created user
            return response()->json(['message' => 'User registered successfully','status' => 1,'ref_code' => $ref_code_gen]);
        }else{
            return response()->json(['message' => 'User registration failed','status' => 0]);
        }
    }

    public function registrationSuccess()
    {
        return view('website.success');
    }

}
