<!DOCTYPE html>
<html lang="en">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="o"/>
    <title>Admin</title>
   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
   <meta name="description" content="wearmoda Dashboard">
   <meta name="author" content="wearmoda Dashboard">
   <title>Saving Square</title>
   <link rel="stylesheet" href="{{asset('public/admin/assets/css/argon.css')}}" type="text/css">
   <link rel="stylesheet" href="{{asset('public/admin/assets/css/custom.css')}}" type="text/css">
   </head>
   <body>
      <div class="main-content" id="panel">
         <div class="header pb-6 d-flex align-items-center" style="min-height: 155px;">
            <nav class="sidenav navbar nav_main" id="sidenav-main">
               <div class="sidenav-header  align-items-center">
                  <a class="navbar-brand" href="">
                  <img src="{{asset('public/web/images/prich.png')}}" class="navbar-brand-img" alt="...">
                  </a>
               </div>
            </nav>
            <span class="mask bg-gradient-default"></span>
         </div>
         <!-- Page content -->
         <div class="container-fluid mt--6">
            <div class="row">
               <div class="col-xl-12">
                  <div class="card">
                     <div class="cph" style="padding-bottom: 70px;">
                        <div class="login-box" style="width: 50%;margin: 0 auto;">
                           <div class="login-logo" style="padding: 10px;width: 30%;margin: 0 auto;">
                              <h2><b> Login</b></h2>
                           </div>
                           <div class="card">
                              <div class="card-body login-card-body">
                                 <p class="login-box-msg">Sign in to start your session</p>
                                 <form class="form-horizontal" method="POST" action="{{route('admin.login')}}">
                                    @csrf
                                    <div class="input-group mb-3 form-group" >
                                       <input id="email" type="email" class="form-control" name="email" value="" required autofocus>
                                       <div class="input-group-append">
                                          <div class="input-group-text">
                                             <span class="fas fa-envelope"></span>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="input-group mb-3">
                                       <input id="password" type="password" class="form-control" name="password" required>
                                       <div class="input-group-append">
                                          <div class="input-group-text">
                                             <span class="fas fa-lock"></span>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="row">
                                       <div class="col-8">
                                          <div class="icheck-primary">
                                             <input type="checkbox" name="remember" id="remember" >
                                             <label for="remember">
                                             Remember Me
                                             </label>
                                          </div>
                                       </div>
                                       <div class="col-4">
                                          <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                                       </div>
                                    </div>
                                 </form>
                                 -->
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <footer class="footer pt-0">
               <div class="row align-items-center justify-content-lg-between">
                  <div class="col-lg-6">
                     <div class="copyright text-center  text-lg-left  text-muted">
                        &copy; 2021 <a href="" class="font-weight-bold ml-1" target="_blank"></a>
                     </div>
                  </div>
                  <div class="col-lg-6">
                     <ul class="nav nav-footer justify-content-center justify-content-lg-end">
                     </ul>
                  </div>
               </div>
            </footer>
         </div>
      </div>
      </div>
      </div>
      </div>
   </body>
</html>
