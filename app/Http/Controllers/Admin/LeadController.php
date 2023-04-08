<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Lead;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Maatwebsite\Excel\Facades\Excel;
class LeadController 
{
    /**
     * Show a list of all of the application's leads.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $leads = User::latest()->get();
        return view('admin.leads.index', compact('leads'));
    }
   /*  public function upload(Request $request)
    {
        $file = $request->file('file');
        
        $data = Excel::load($file)->get();
        
        $errors = [];
        
        foreach ($data as $row) {
            // Validate each row of data
            $validator = Validator::make($row->toArray(), [
                'name' => 'required',
                'email' => 'required|email|unique:leads,email',
                'phone' => 'required',
                // Add additional validation rules as needed
            ]);
            
            if ($validator->fails()) {
                $errors[] = $validator->errors();
                continue;
            }
            
            // Insert valid data into the database
            Lead::create($row->toArray());
        }
        
        if (count($errors) > 0) {
            // Return error messages
            return response()->json([
                'success' => false,
                'errors' => $errors
            ]);
        } else {
            // Return success message and generate report
            return response()->json([
                'success' => true,
                'message' => 'Leads uploaded successfully'
            ]);
        }
    } */
}
