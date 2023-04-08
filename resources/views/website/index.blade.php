<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="utf-8">
   <!-- Title -->
   <title>Project</title>
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <!-- Meta description -->
   <meta name="csrf-token" content="{{ csrf_token() }}">
   <!-- CSS -->
   <link href="{{asset('public/website/dist/css/main.css')}}" rel="stylesheet" type="text/css">
   <!-- Favicon -->
   <style>
      span.error-message {
         color: red;
         font-size: 12px;
      }

   </style>
</head>

<!-- body start -->

<body>
   <header>
      <div class="container">
         <div class="row">
            <div class="col-lg-12 col-12 text-center">
            <img src="{{asset('public/website/dist/img/logo.png')}}" alt="">
            </div>
         </div>
      </div>
   </header>

   <section class="bnrsection">
      <div class="container-fluid">
         <div class="row">
            <div class="col-lg-12 p-0">
               <img src="{{asset('public/website/dist/img/bnr.jpg')}}" alt="">
            </div>
         </div>
      </div>
      <div class="container">
         <div class="row">
            <div class="offset-lg-1 col-lg-10 col-md-12 col-12 text-center">
               <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
               <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <div class="offset-lg-2 col-lg-8 offset-md-1 col-md-10 col-12 text-center">
               <div class="formpart">
                  <form action="">
        
                     <div id="slide02">
                        <h3>Enter  Details</h3>
                        <div class="mb-3 text-start">
                           <label for="FormControlInput5" class="form-label">Name</label>
                           <input type="text" class="form-control" name="name" id="FormControlInput5" placeholder="Name">
                           <span  class="error-message" id="name_error"></span>
                        </div>
                        <div class="mb-3 text-start">
                           <label for="FormControlInput4" class="form-label">Email Address</label>
                           <input type="email" class="form-control" name="email" id="FormControlInput4" placeholder="Email Address">
                           <span class="error-message" id="email_error"></span>
                        </div>
                        <div class="mb-3 text-start">
                           <label for="FormControlInput4" class="form-label">Referral code (optional)</label>
                           <input type="text" class="form-control" name="reff_code" id="FormControlInput6" placeholder="Code">
                           <span class="error-message" id="reff_code_error"></span>
                        </div>
                        <div class="mb-3 text-center">
                           <button type="button" class="btn btn-success"  id="submit_claim">Submit</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </section>


   <footer>
      <div class="container">
         <div class="row">
            <div class="col-lg-12 col-12">
               <h5>Lorem Ipsum is simply dummy text</h5>
               <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
               <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
               <p>Copyright@2022</p>
            </div>
         </div>
      </div>
   </footer>

   <script src="{{asset('public/website/dist/js/app.js')}}"></script>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
   <script>  
      $(document).ready(function() {
         // Listen for the input event on the email input field
         $('#FormControlInput5').on('input', function() {
               // Clear the text of the email error message
               $('#name_error').text('');
         });
         $('#FormControlInput4').on('input', function() {
               // Clear the text of the name error message
               $('#email_error').text('');

         });
         $('#FormControlInput6').on('input', function() {
               // Clear the text of the reff_code error message
               $('#reff_code_error').text('');
         });
            // Listen for the click event on the submit button
            $('#submit_claim').on('click', function() {
               // Prevent the default form submission
               event.preventDefault();
               // Submit the form using jQuery's submit method
               if(secondFormValidate() ){
                  SubmitUserForm();
               }
         });
      });      
      function secondFormValidate() 
      {
         
         let email = $('#FormControlInput4').val();         
         let name = $('#FormControlInput5').val();
         let pass = 1;
         if(email == ''){
            $('#FormControlInput4').addClass('is-invalid');
            pass = 0
         }
         if(name == ''){
            $('#FormControlInput5').addClass('is-invalid');
            pass = 0
         }
         /* Define the recommended regular expression. */
         var emailExp = new RegExp(/^\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i);
         /* Test the email given against the expression and return the result. */
         if(!emailExp.test(email)){
            $('#FormControlInput4').addClass('is-invalid');
            pass = 0
         }
         if(pass == 1){
            return true;

         }else{
            return false;
         }
      }
      $("input[type='text']").change( function() {
         $(this).removeClass('is-invalid');
      });
      $(".watermark").change( function() {
         $(this).removeClass('is-invalid');
      });
      function SubmitUserForm()
      {
         let email = $('#FormControlInput4').val();         
         let name = $('#FormControlInput5').val();
         let reff_code = $('#FormControlInput6').val();         
         $.ajaxSetup({
            headers: {
               'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
         });
         $.ajax({
               url: "{{route('user.register')}}", //the page containing php script
               type: "post", //request type,
               dataType: 'json',
               data: {
                  email: email,
                  name: name,
                  reff_code: reff_code,
               },
               success: function(result) {
                  if(result.status ==1){
                     window.location.href = "{{ route('registration.success', ['ref_code' => '']) }}" + result.ref_code;
                  }else{

                  }
               },   
               error: function(response) {
                  var errors = response.responseJSON.errors;
                  // Handle validation errors
                  $.each(errors, function(key, value) {
                        $('#' + key + '_error').text(value[0]);
                  });
               }
            });
         
      }
   </script>
</body>
<!--body end -->

</html>