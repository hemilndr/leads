<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <!-- Title -->
      <title>Project</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!-- Meta description -->
     
      <!-- CSS -->
      <link href="{{asset('public/website/dist/css/main.css')}}" rel="stylesheet" type="text/css">
      <!-- Favicon -->
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
         <!-- <div class="container-fluid">
            <div class="row">
               <div class="col-lg-12 p-0">
                  <img src="dist/img/bnr.jpg" alt="">
               </div>
            </div>
         </div> -->
         <div class="container">
            <div class="row">
                <div class="offset-lg-1 col-lg-10 col-md-12 col-12 text-center">
                    <h2>Thankyou...</h2>
                    <p>Registration completed successfully!</p>
                   
                    <div id="ref-code"  class="d-none">...</div>


                 </div>
            </div>
        </div>
    </section>


    
    <footer class="fixed-bottom">
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
     <script>
       // Get the URL of the current page
        var url = new URL(window.location.href);
        // Use the URLSearchParams API to get the value of the 'ref_code' query parameter
        var refCodeParam = url.searchParams.get('ref_code');
        // Output the value of the 'ref_code' parameter
        if(refCodeParam != "" || refCodeParam != null){
            $('#ref-code').html('<span> Your Referral Code is :'+refCodeParam+'</span>').removeClass('d-none');
        }
     </script>
  </body>
   <!--body end -->
   
</html>