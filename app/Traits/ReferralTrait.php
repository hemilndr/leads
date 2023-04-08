<?php
namespace App\Traits;
use App\Models\Student;
use App\Models\User;

trait ReferralTrait {

    public function generateReferralCode($user_id)
    {
        $user = User::find($user_id);

        if (!$user->referral_code) {
            $user->referral_code = uniqid();
            $user->save();
        }

        return $user->referral_code;
    }

    public function generateReferralLink($user_id)
    {
        $user = User::find($user_id);
        $referralLink = url('/register?ref=' . $user->referral_code);

        return response()->json(['referral_link' => $referralLink]);
    }

}