
@extends('website.layouts.master')
@section('content')
<!--banner-->
  <div id="home" class="banner active">
    <div class="banner-info">
      <div class="container">
       <div class="row">
        <div class="col-md-12 header-center">

          <h3 style="color:white;text-align:center">GALLERY</h3> <div class="line"></div>

          <!-- START GALLERY -->

          <div class="carousel slide media-carousel" id="media">
            <div class="carousel-inner">

              <div class="item  active">
                <div class="row">
                  <div class="col-sm-4">

                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-1">
                        <img alt="" src="{{asset('public/web/images/gal1.jpg')}}" ></a>
                    <h4 class="text-center gal-caption">Artist Nilambur Shareef , Johnson Eyeroor</h4>
                  </div>
                  <div class="col-sm-4">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-2">
                        <img alt=""  src="{{asset('public/web/images/gal2.jpg')}}" ></a>
                     <h4 class="text-center gal-caption">Johnson Eyeroor, P.V Abdulwahab , T.K Hamza</h4>
                  </div>
                  <div class="col-sm-4">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-3">
                        <img alt=""  src="{{asset('public/web/images/gal3.jpg')}}" ></a>
                     <h4 class="text-center gal-caption">Vaikkom Muhammed Basheer, Nikhil Eyeroor , Johnson Eyeroor</h4>
                  </div>

                </div>
              </div>
              <div class="item">
                <div class="row">
                <div class="col-sm-4">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-4">
                        <img alt="Eyeroor Family"  src="{{asset('public/web/images/gal4.jpg')}}" ></a>
                     <h4 class="text-center gal-caption">Eyeroor Family</h4>
                  </div>
                  <div class="col-sm-4">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-5">
                        <img alt="" src="{{asset('public/web/images/gal5.jpg')}}" ></a>
                     <h4 class="text-center gal-caption">Johnson Eyeroor , Anees Basheer , NIkhil Eyeroor</h4>
                  </div>
                  <div class="col-sm-4">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-6">
                        <img alt="Eyeroor Family"  src="{{asset('public/web/images/gal6.jpg')}}" ></a>
                     <h4 class="text-center gal-caption">Eyeroor Family</h4>
                  </div>

                </div>
              </div>
              <div class="item">
                <div class="row">
                    <div class="col-sm-4">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-7">
                        <img alt=""  src="{{asset('public/web/images/gal7.jpg')}}" ></a>
                     <h4 class="text-center gal-caption">R.K Malayath, P.V Abdul Wahab, Johnson Eyeroor</h4>
                  </div>
                  <div class="col-sm-4">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-8">
                        <img alt="Perumbadavam"  src="{{asset('public/web/images/gal8.jpg')}}" ></a>
                     <h4 class="text-center gal-caption">Perumbadavam</h4>
                  </div>

                  <div class="col-sm-4">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-9">
                        <img alt="VT Smaraka Award" src="{{asset('public/web/images/gal9.jpg')}}" ></a>
                     <h4 class="text-center gal-caption">VT Smaraka Award</h4>
                  </div>

                </div>
              </div>
              <div class="item">
                <div class="row">

                  <div class="col-sm-4">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-10">
                        <img alt=""  src="{{asset('public/web/images/gal10.jpg')}}" ></a>
                     <h4 class="text-center gal-caption">Basheer</h4>
                  </div>
                  <div class="col-sm-4">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-11">
                        <img alt="1st Ed Release Johnson Eyeroor, Fabi Basheer & Vaisakhan"  src="{{asset('public/web/images/gal37.jpg')}}" ></a>
                     <h4 class="text-center gal-caption">1st Ed Release Johnson Eyeroor, Fabi Basheer & Vaisakhan</h4>
                  </div>
                  <div class="col-sm-4">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-12">
                        <img alt="2nd Ed CBS Mani, Alankode Leela Krishnan, K Venu , JOhnson Eyeroor, Renni Antony, Gro Vasuvettan, AV Jose, Sajeevan Anthikkad"  src="{{asset('public/web/images/gal38.jpg')}}" ></a>
                     <h4 class="text-center gal-caption">2nd Ed CBS Mani, Alankode Leela Krishnan, K Venu , JOhnson Eyeroor, Renni Antony, Gro Vasuvettan, AV Jose, Sajeevan Anthikkad</h4>

                  </div>
                </div>
              </div>
                   <div class="item ">
                <div class="row">
                <div class="col-sm-4">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-13">
                        <img alt=""  src="{{asset('public/web/images/gal39.jpg')}}" ></a>
                     <h4 class="text-center gal-caption">3rd Ed PV Abdul Vahab, R.K Malayat ... son Eyeroor , Nilambur Ayishaa.</h4>
                  </div>
                  <div class="col-sm-4">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-14">
                        <img alt="Johnson Eyeroor, AT Kovoor, Nasthikan Sunny" src="{{asset('public/web/images/gal40.jpg')}}" ></a>
                     <h4 class="text-center gal-caption">Johnson Eyeroor, AT Kovoor, Nasthikan Sunny</h4>
                  </div>
                  <div class="col-sm-4">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-15">
                        <img alt="Johnson Eyeroor. ONV Kurup, RK Malayath, D Vinaya Chandram"  src="{{asset('public/web/images/gal41.jpg')}}" ></a>
                     <h4 class="text-center gal-caption">Johnson Eyeroor. ONV Kurup, RK Malayath, D Vinaya Chandram</h4>
                  </div>

                </div>
              </div>
               <div class="item">
                <div class="row">
                  <div class="col-sm-4">

                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-16"><img alt="MC Varghese, Johnson Eyeroor" src="{{asset('public/web/images/gal42.jpg')}}" ></a>
                     <h4 class="text-center gal-caption">MC Varghese, Johnson Eyeroor</h4>

                  </div>
                  <div class="col-sm-4">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-17"><img alt="V.T Bhattathirippad, Johnson Eyeroor"  src="{{asset('public/web/images/gal43.jpg')}}" ></a>
                     <h4 class="text-center gal-caption">V.T Bhattathirippad, Johnson Eyeroor</h4>
                  </div>
                  <div class="col-sm-4">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-22"><img alt=""  src="{{asset('public/web/images/gal51.jpg')}}" ></a>
                     <h4 class="text-center gal-caption">pinarayi vijayan,Johnson Eyeroor</h4>
                  </div>

                </div>
              </div>
            </div>
            <a data-slide="prev" href="#media" class="left carousel-control"  style="top:14%;">‹</a>
            <a data-slide="next" href="#media" class="right carousel-control" style="top:14%;">›</a>

          </div>



          <section id="portfolio" class="template_portfolio">
            <div class="modal fade" id="gal-img-1">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                     <h4 class="modal-title">Artist Nilambur Shareef , Johnson Eyeroor</h4>
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/gal1.jpg')}}" class="img-responsive" alt=""/>


                    <br>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="gal-img-2">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Johnson Eyeroor, P.V Abdulwahab , T.K Hamza</h4>
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/gal2.jpg')}}" class="img-responsive" alt=""/>


                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="gal-img-3">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Vaikkom Muhammed Basheer, Nikhil Eyeroor , Johnson Eyeroor</h4>
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/gal3.jpg')}}" class="img-responsive" alt=""/>


                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="gal-img-4">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Eyeroor Family</h4>
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/gal4.jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="gal-img-5">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Johnson Eyeroor , Anees Basheer , NIkhil Eyeroor</h4>
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/gal5.jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="gal-img-6">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Eyeroor Family</h4>
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/gal6.jpg')}}" class="img-responsive" alt=""/>

                    <br>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="gal-img-7">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">R.K Malayath, P.V Abdul Wahab, Johnson Eyeroor</h4>
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/gal7.jpg')}}" class="img-responsive" alt=""/>

                    <br>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="gal-img-8">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Perumbadavam</h4>
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/gal8.jpg')}}" class="img-responsive" alt=""/>

                    <br>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="gal-img-9">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">VT Smaraka Award</h4>
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/gal9.jpg')}}" class="img-responsive" alt=""/>

                    <br>
                  </div>
                </div>
              </div>
            </div>

             <div class="modal fade" id="gal-img-10">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Basheer</h4>
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/gal10.jpg')}}" class="img-responsive" alt=""/>

                    <br>
                  </div>
                </div>
              </div>
            </div>
             <div class="modal fade" id="gal-img-11">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">1st Ed Release Johnson Eyeroor, Fabi Basheer & Vaisakhan</h4>
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/gal37.jpg')}}" class="img-responsive" alt=""/>

                    <br>
                  </div>
                </div>
              </div>
            </div>

              <div class="modal fade" id="gal-img-12">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">2nd Ed CBS Mani, Alankode Leela Krishnan, K Venu , JOhnson Eyeroor, Renni Antony, Gro Vasuvettan, AV Jose, Sajeevan Anthikkad</h4>
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/gal38.jpg')}}" class="img-responsive" alt=""/>

                    <br>
                  </div>
                </div>
              </div>
            </div>
              <div class="modal fade" id="gal-img-13">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">3rd Ed PV Abdul Vahab, R.K Malayat ..son Eyeroor , Nilambur Ayishaa.</h4>
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/gal39.jpg')}}" class="img-responsive" alt=""/>

                    <br>
                  </div>
                </div>
              </div>
            </div>
              <div class="modal fade" id="gal-img-14">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Johnson Eyeroor, AT Kovoor, Nasthikan Sunny</h4>
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/gal40.jpg')}}" class="img-responsive" alt=""/>

                    <br>
                  </div>
                </div>
              </div>
            </div>
              <div class="modal fade" id="gal-img-15">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Johnson Eyeroor. ONV Kurup, RK Malayath, D Vinaya Chandram</h4>
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/gal41.jpg')}}" class="img-responsive" alt=""/>

                    <br>
                  </div>
                </div>
              </div>
            </div>
              <div class="modal fade" id="gal-img-16">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">MC Varghese, Johnson Eyeroor</h4>
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/gal42.jpg')}}" class="img-responsive" alt=""/>

                    <br>
                  </div>
                </div>
              </div>
            </div>
              <div class="modal fade" id="gal-img-17">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">V.T Bhattathirippad, Johnson Eyeroor</h4>
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/gal43.jpg')}}" class="img-responsive" alt=""/>

                    <br>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="gal-img-22">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">pinarayi vijayan,Johnson Eyeroor</h4>
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/gal51.jpg')}}" class="img-responsive" alt=""/>

                    <br>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <!-- END GALLERY -->


 <!-- START GALLERY -->

<div class="carousel slide media-carousel" id="media1">
            <div class="carousel-inner">
              <div class="item">
                <div class="row">
                  <div class="col-sm-4">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-31"><img alt="Johnson Eyeroor, Lee Siegal" src="{{asset('public/web/images/gal31.jpg')}}"></a>
                     <h4 class="text-center gal-caption">Johnson Eyeroor, Lee Siegal</h4>
                  </div>

                  <div class="col-sm-4">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-23"><img alt="" src="{{asset('public/web/images/gal23.jpg')}}"></a>
                     <h4 class="text-center gal-caption">Certificate Handover, Rahim Marunnoor</h4>
                  </div>

                  <div class="col-sm-4">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-33"><img alt="Civic Chandran , Johnson Eyeroor" src="{{asset('public/web/images/gal33.jpg')}}"></a>
                     <h4 class="text-center gal-caption">Civic Chandran , Johnson Eyeroor</h4>
                  </div>

                </div>
              </div>
              <div class="item">
                <div class="row">

                <div class="col-sm-4">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-70"><img alt="70th Birthday Celebration" src="{{asset('public/web/images/gal70.jpg')}}"></a>
                     <h4 class="text-center gal-caption">70th Birthday Celebration</h4>
                  </div>


                    <div class="col-sm-4">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-37"><img alt="" src="{{asset('public/web/images/gal36.jpg')}}"></a>
                     <h4 class="text-center gal-caption">Johnson Eyeroor, Nasthikan Sunny</h4>
                  </div>

                 <div class="col-sm-4">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-20"><img alt="" src="{{asset('public/web/images/gal20.jpg')}}"></a>
                    <h4 class="text-center gal-caption">Johnson Eyeroor, Rahim Marunnoor</h4>
                  </div>


                </div>
              </div>
              <div class="item active">
                <div class="row">
                    <div class="col-sm-4">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-34"><img alt="" src="{{asset('public/web/images/gal34.jpg')}}"></a>
                     <h4 class="text-center gal-caption">Sreeni Pattathanam , Johnson Eyeroor, Gangan Azheekkode</h4>
                  </div>
                  <div class="col-sm-4">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-35"><img alt="" src="{{asset('public/web/images/gal35.jpg')}}"></a>
                     <h4 class="text-center gal-caption">K Venu , Johnson Eyeroor</h4>
                  </div>
                   <div class="col-sm-4">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-36"><img alt="" src="{{asset('public/web/images/gal52.jpg')}}"></a>
                     <h4 class="text-center gal-caption">Kamal Haasan, Johnson Eyeroor</h4>
                  </div>


                </div>
              </div>
            </div>
            <a data-slide="prev" href="#media1" class="left carousel-control" style="top:14%;">‹</a>
            <a data-slide="next" href="#media1" class="right carousel-control" style="top:14%;">›</a>
          </div>



          <section id="portfolio" class="template_portfolio">







            <div class="modal fade" id="gal-img-31">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Johnson Eyeroor, Lee Siegal</h4>
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/gal31.jpg')}}" class="img-responsive" alt=""/>

                    <br>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal fade" id="gal-img-37">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Johnson Eyeroor, Nasthikan Sunny</h4>

                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/gal36.jpg')}}" class="img-responsive" alt=""/>

                    <br>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal fade" id="gal-img-33">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Civic Chandran , Johnson Eyeroor</h4>
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/gal33.jpg')}}" class="img-responsive" alt=""/>

                    <br>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal fade" id="gal-img-35">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">K Venu , Johnson Eyeroor</h4>
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/gal35.jpg')}}" class="img-responsive" alt=""/>

                    <br>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal fade" id="gal-img-34">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Sreeni Pattathanam , Johnson Eyeroor, Gangan Azheekkode</h4>
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/gal34.jpg')}}" class="img-responsive" alt=""/>

                    <br>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal fade" id="gal-img-35">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">K Venu , Johnson Eyeroor</h4>
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/gal35.jpg')}}" class="img-responsive" alt=""/>

                    <br>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal fade" id="gal-img-36">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Kamal Haasan, Johnson Eyeroor</h4>
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/gal52.jpg')}}" class="img-responsive" alt=""/>

                    <br>
                  </div>
                </div>
              </div>
            </div>
  </section>
          <!-- END GALLERY -->
</div>
</div>
</div>
</div>
</div>
@endsection
