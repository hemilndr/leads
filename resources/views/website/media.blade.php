@extends('website.layouts.master')
@section('content')
 <div id="home" class="banner active">
    <div class="banner-info">
      <div class="container">
       <div class="row">
        <div class="col-md-12 header-center">

         <div class="col-md-12 header-center">

          <h3 style="color:white;text-align:center">MEDIA</h3> <div class="line"></div>
          <div class="carousel slide media-carousel" id="media1">
            <div class="carousel-inner">
              <div class="item  active">
                <div class="row">
                  <div class="col-sm-3">
                 <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-11"><img alt=""     src="{{asset('public/web/images/media001.jpg')}}" ></a>
                  </div>
                  <div class="col-sm-3">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-12"><img alt=""  src="{{asset('public/web/images/media002.jpg')}}" ></a>
                  </div>
                  <div class="col-sm-3">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-13"><img alt=""  src="{{asset('public/web/images/media007.jpg')}}" ></a>
                  </div>
                   <div class="col-sm-3">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-14"><img alt=""  src="{{asset('public/web/images/media008.jpg')}}" ></a>
                  </div>
                </div>

              </div>
              <div class="item">
                <div class="row">
                  <div class="col-sm-3">
                 <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-011"><img alt="" src="{{asset('public/web/images/media41.jpg')}}" ></a>
                  </div>
                  <div class="col-sm-3">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-012"><img alt=""  src="{{asset('public/web/images/media42.jpg')}}" ></a>
                  </div>
                  <div class="col-sm-3">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-013"><img alt=""  src="{{asset('public/web/images/media007.jpg')}}" ></a>
                  </div>
                   <div class="col-sm-3">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-014"><img alt=""  src="{{asset('public/web/images/media008.jpg')}}" ></a>
                  </div>
                </div>

              </div>
            </div>
            <a data-slide="prev" href="#media1" class="left carousel-control"  style="top:5%;">‹</a>
            <a data-slide="next" href="#media1" class="right carousel-control" style="top:5%;">›</a>
          </div>



          <section id="portfolio" class="template_portfolio">
            <div class="modal fade" id="gal-img-11" >
              <div class="modal-dialog">
                <div class="modal-content modal-content-color">
                  <div class="modal-header">
                    <button type="button" class="close close-color" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>

                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/001.jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="gal-img-12">
              <div class="modal-dialog">
                <div class="modal-content modal-content-color">
                  <div class="modal-header">
                    <button type="button" class="close close-color" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/002.jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="gal-img-13">
              <div class="modal-dialog">
                <div class="modal-content modal-content-color">
                  <div class="modal-header">
                    <button type="button" class="close close-color" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/0007.jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="gal-img-14">
              <div class="modal-dialog">
                <div class="modal-content modal-content-color">
                  <div class="modal-header">
                    <button type="button" class="close close-color" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/0008.jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
              <div class="modal fade" id="gal-img-011">
              <div class="modal-dialog">
                <div class="modal-content modal-content-color">
                  <div class="modal-header">
                    <button type="button" class="close close-color" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/manorama%202012%20sept%2019%20wed1.jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
              <div class="modal fade" id="gal-img-012">
              <div class="modal-dialog">
                <div class="modal-content modal-content-color">
                  <div class="modal-header">
                    <button type="button" class="close close-color" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/manorama%202013%20march%201%20fri1.jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
              <div class="modal fade" id="gal-img-013">
              <div class="modal-dialog">
                <div class="modal-content modal-content-color">
                  <div class="modal-header">
                    <button type="button" class="close close-color" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/0007.jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
              <div class="modal fade" id="gal-img-014">
              <div class="modal-dialog">
                <div class="modal-content modal-content-color">
                  <div class="modal-header">
                    <button type="button" class="close close-color" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/0008.jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
          </section>



          <div class="carousel slide media-carousel" id="media2">
            <div class="carousel-inner">
              <div class="item  active">
                <div class="row">
                  <div class="col-sm-3">

                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-21"><img alt="" src="{{asset('public/web/images/media019.jpg')}}" ></a>

                  </div>
                  <div class="col-sm-3">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-22"><img alt=""  src="{{asset('public/web/images/media20.jpg')}}" ></a>
                  </div>
                  <div class="col-sm-3">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-23"><img alt=""  src="{{asset('public/web/images/media21.jpg')}}" ></a>
                  </div>
                  <div class="col-sm-3">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-24"><img alt=""  src="{{asset('public/web/images/media22.jpg')}}" ></a>
                  </div>

                </div>
              </div>
                 <div class="item">
                <div class="row">
                  <div class="col-sm-3">
                 <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-021"><img alt="" src="{{asset('public/web/images/media43.jpg')}}" ></a>
                  </div>
                  <div class="col-sm-3">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-022"><img alt=""  src="{{asset('public/web/images/media44.jpg')}}" ></a>
                  </div>
                  <div class="col-sm-3">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-023"><img alt=""  src="{{asset('public/web/images/media21.jpg')}}" ></a>
                  </div>
                   <div class="col-sm-3">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-024"><img alt=""  src="{{asset('public/web/images/media22.jpg')}}" ></a>
                  </div>
                </div>

              </div>
             </div>
            <a data-slide="prev" href="#media2" class="left carousel-control"  style="top:5%;">‹</a>
            <a data-slide="next" href="#media2" class="right carousel-control" style="top:5%;">›</a>
          </div>

          <section id="portfolio" class="template_portfolio">
            <div class="modal fade" id="gal-img-21">
              <div class="modal-dialog">
                <div class="modal-content modal-content-color">
                  <div class="modal-header">
                    <button type="button" class="close close-color" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <!-- <h4 class="modal-title">Caption</h4> -->
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/chandrika1.jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="gal-img-22">
              <div class="modal-dialog">
                <div class="modal-content modal-content-color">
                  <div class="modal-header">
                    <button type="button" class="close close-color" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <!-- <h4 class="modal-title">Caption</h4> -->
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/chandrika2.jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="gal-img-23">
              <div class="modal-dialog">
                <div class="modal-content modal-content-color">
                  <div class="modal-header">
                    <button type="button" class="close close-color" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <!-- <h4 class="modal-title">Caption</h4> -->
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/chandrika3.jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="gal-img-24">
              <div class="modal-dialog">
                <div class="modal-content modal-content-color">
                  <div class="modal-header">
                    <button type="button" class="close close-color" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <!-- <h4 class="modal-title">Caption</h4> -->
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/chandrika4.jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
                 <div class="modal fade" id="gal-img-021">
              <div class="modal-dialog">
                <div class="modal-content modal-content-color">
                  <div class="modal-header">
                    <button type="button" class="close close-color" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <!-- <h4 class="modal-title">Caption</h4> -->
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/mathrubhumi%202014%20feb20.jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
              <div class="modal fade" id="gal-img-022">
              <div class="modal-dialog">
                <div class="modal-content modal-content-color">
                  <div class="modal-header">
                    <button type="button" class="close close-color" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <!-- <h4 class="modal-title">Caption</h4> -->
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/mathrubhumi%202014%20july%204%20fri1.jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
              <div class="modal fade" id="gal-img-023">
              <div class="modal-dialog">
                <div class="modal-content modal-content-color">
                  <div class="modal-header">
                    <button type="button" class="close close-color" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <!-- <h4 class="modal-title">Caption</h4> -->
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/chandrika3.jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
              <div class="modal fade" id="gal-img-024">
              <div class="modal-dialog">
                <div class="modal-content modal-content-color">
                  <div class="modal-header">
                    <button type="button" class="close close-color" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <!-- <h4 class="modal-title">Caption</h4> -->
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/chandrika4.jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
        </section>
          <!-- END GALLERY -->

          <!-- START GALLERY 3-->

          <div class="carousel slide media-carousel" id="media3">
            <div class="carousel-inner">
              <div class="item  active">
                <div class="row">
                  <div class="col-sm-3">

                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-31"><img alt="" src="{{asset('public/web/images/media009.jpg')}}" ></a>

                  </div>
                  <div class="col-sm-3">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-32"><img alt=""  src="{{asset('public/web/images/media011.jpg')}}" ></a>
                  </div>
                  <div class="col-sm-3">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-33"><img alt=""  src="{{asset('public/web/images/media013.jpg')}}" ></a>
                  </div>
                  <div class="col-sm-3">

                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-34"><img alt="" src="{{asset('public/web/images/media014.jpg')}}" ></a>

                  </div>

                </div>
              </div>
                <div class="item">
                <div class="row">
                  <div class="col-sm-3">
                 <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-031"><img alt="" src="{{asset('public/web/images/media45.jpg')}}"></a>
                  </div>
                  <div class="col-sm-3">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-032"><img alt=""  src="{{asset('public/web/images/media46.jpg')}}"></a>
                  </div>
                  <div class="col-sm-3">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-033"><img alt=""  src="{{asset('public/web/images/media013.jpg')}}"></a>
                  </div>
                   <div class="col-sm-3">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-034"><img alt=""  src="{{asset('public/web/images/media014.jpg')}}"></a>
                  </div>
                </div>
              </div>

            </div>
            <a data-slide="prev" href="#media3" class="left carousel-control"  style="top:5%;">‹</a>
            <a data-slide="next" href="#media3" class="right carousel-control" style="top:5%;">›</a>
          </div>

         <section id="portfolio" class="template_portfolio">
            <div class="modal fade" id="gal-img-31">
              <div class="modal-dialog">
                <div class="modal-content modal-content-color">
                  <div class="modal-header">
                    <button type="button" class="close close-color" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <!-- <h4 class="modal-title">Caption</h4> -->
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/0009.jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="gal-img-32">
              <div class="modal-dialog">
                <div class="modal-content modal-content-color">
                  <div class="modal-header">
                    <button type="button" class="close close-color" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <!-- <h4 class="modal-title">Caption</h4> -->
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/0011.jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="gal-img-33">
              <div class="modal-dialog">
                <div class="modal-content modal-content-color">
                  <div class="modal-header">
                    <button type="button" class="close close-color" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <!-- <h4 class="modal-title">Caption</h4> -->
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/013.jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="gal-img-34">
              <div class="modal-dialog">
                <div class="modal-content modal-content-color">
                  <div class="modal-header">
                    <button type="button" class="close close-color" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <!-- <h4 class="modal-title">Caption</h4> -->
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/0014.jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="gal-img-031">
              <div class="modal-dialog">
                <div class="modal-content modal-content-color">
                  <div class="modal-header">
                    <button type="button" class="close close-color" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <!-- <h4 class="modal-title">Caption</h4> -->
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/prahelika%202002%20april%2011%20thur.jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="gal-img-032">
              <div class="modal-dialog">
                <div class="modal-content modal-content-color">
                  <div class="modal-header">
                    <button type="button" class="close close-color" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <!-- <h4 class="modal-title">Caption</h4> -->
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/varthamaanam%202010%20sept.%2029%20wed..jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="gal-img-033">
              <div class="modal-dialog">
                <div class="modal-content modal-content-color">
                  <div class="modal-header">
                    <button type="button" class="close close-color" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <!-- <h4 class="modal-title">Caption</h4> -->
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/013.jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="gal-img-034">
              <div class="modal-dialog">
                <div class="modal-content modal-content-color">
                  <div class="modal-header">
                    <button type="button" class="close close-color" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <!-- <h4 class="modal-title">Caption</h4> -->
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/0014.jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
         </section>
          <!-- END GALLERY -->

          <!-- START GALLERY 4-->
          <div class="carousel slide media-carousel" id="media4">
            <div class="carousel-inner">
              <div class="item  active">
                <div class="row">

                  <div class="col-sm-3">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-41"><img alt=""  src="{{asset('public/web/images/media015.jpg')}}" ></a>
                  </div>
                  <div class="col-sm-3">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-42"><img alt=""  src="{{asset('public/web/images/media016.jpg')}}" ></a>
                  </div>
                      <div class="col-sm-3">

                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-43"><img alt="" src="{{asset('public/web/images/media017.jpg"')}} ></a>

                  </div>
                     <div class="col-sm-3">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-44"><img alt=""  src="{{asset('public/web/images/media018.jpg')}}" ></a>
                  </div>

                </div>
              </div>
                 <div class="item">
                <div class="row">
                  <div class="col-sm-3">
                 <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-041"><img alt="" src="{{asset('public/web/images/media47.jpg')}}" ></a>
                  </div>
                  <div class="col-sm-3">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-042"><img alt=""  src="{{asset('public/web/images/media016.jpg')}}" ></a>
                  </div>
                  <div class="col-sm-3">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-043"><img alt=""  src="{{asset('public/web/images/media017.jpg')}}" ></a>
                  </div>
                   <div class="col-sm-3">
                    <a class="thumbnail" href="#" data-toggle="modal" data-target="#gal-img-044"><img alt=""  src="{{asset('public/web/images/media018.jpg')}}" ></a>
                  </div>
                </div>

              </div>

            </div>
            <a data-slide="prev" href="#media4" class="left carousel-control"  style="top:5%;">‹</a>
            <a data-slide="next" href="#media4" class="right carousel-control" style="top:5%;">›</a>
          </div>



          <section id="portfolio" class="template_portfolio">
            <div class="modal fade" id="gal-img-41">
              <div class="modal-dialog" >
                <div class="modal-content modal-content-color">
                  <div class="modal-header">
                    <button type="button" class="close close-color" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <!-- <h4 class="modal-title">Caption</h4> -->
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/015.jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="gal-img-42">
              <div class="modal-dialog">
                <div class="modal-content modal-content-color">
                  <div class="modal-header">
                    <button type="button" class="close close-color" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <!-- <h4 class="modal-title">Caption</h4> -->
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/016.jpg')}}" class="img-responsive" alt=""/>

                </div>
              </div>
            </div>
            </div>
            <div class="modal fade" id="gal-img-43">
              <div class="modal-dialog">
                <div class="modal-content modal-content-color">
                  <div class="modal-header">
                    <button type="button" class="close close-color" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <!-- <h4 class="modal-title">Caption</h4> -->
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/017.jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="gal-img-44">
              <div class="modal-dialog">
                <div class="modal-content modal-content-color">
                  <div class="modal-header">
                    <button type="button" class="close close-color" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <!-- <h4 class="modal-title">Caption</h4> -->
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/018.jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
              <div class="modal fade" id="gal-img-041">
              <div class="modal-dialog">
                <div class="modal-content modal-content-color">
                  <div class="modal-header">
                    <button type="button" class="close close-color" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <!-- <h4 class="modal-title">Caption</h4> -->
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/media477.jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
               <div class="modal fade" id="gal-img-042">
              <div class="modal-dialog">
                <div class="modal-content modal-content-color">
                  <div class="modal-header">
                    <button type="button" class="close close-color" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <!-- <h4 class="modal-title">Caption</h4> -->
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/016.jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
               <div class="modal fade" id="gal-img-043">
              <div class="modal-dialog">
                <div class="modal-content modal-content-color">
                  <div class="modal-header">
                    <button type="button" class="close close-color" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <!-- <h4 class="modal-title">Caption</h4> -->
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/017.jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
               <div class="modal fade" id="gal-img-044">
              <div class="modal-dialog">
                <div class="modal-content modal-content-color">
                  <div class="modal-header">
                    <button type="button" class="close close-color" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  </div>
                  <div class="modal-body">
                    <img src="{{asset('public/web/images/018.jpg')}}" class="img-responsive" alt=""/>

                  </div>
                </div>
              </div>
            </div>
          </section>




</div>
</div>
</div>
</div>
</div>
</div>
@endsection
 <script type="text/javascript">
          $(document).ready(function(){

            loadGallery(true, 'a.thumbnail');
function disableButtons(counter_max, counter_current){
  $('#show-previous-image, #show-next-image').show();
  if(counter_max == counter_current){
    $('#show-next-image').hide();
  } else if (counter_current == 1){
    $('#show-previous-image').hide();
  }
}
function loadGallery(setIDs, setClickAttr){
  var current_image,
  selector,
  counter = 0;

  $('#show-next-image, #show-previous-image').click(function(){
    if($(this).attr('id') == 'show-previous-image'){
      current_image--;
    } else {
      current_image++;
    }

    selector = $('[data-image-id="' + current_image + '"]');
    updateGallery(selector);
  });

  function updateGallery(selector) {
    var $sel = selector;
    current_image = $sel.data('image-id');
    $('#image-gallery-caption').text($sel.data('caption'));
    $('#image-gallery-title').text($sel.data('title'));
    $('#image-gallery-image').attr('src', $sel.data('image'));
    disableButtons(counter, $sel.data('image-id'));
  }

  if(setIDs == true){
    $('[data-image-id]').each(function(){
      counter++;
      $(this).attr('data-image-id',counter);
    });
  }
  $(setClickAttr).on('click',function(){
    updateGallery($(this));
  });
}
});
</script>
</body>
</html>
