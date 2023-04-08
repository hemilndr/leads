@extends('website.layouts.master')
@section('content')
<div id="home" class="banner active">
   <div class="banner-info">
      <div class="container">
         <div class="row">
            <div class="col-md-12 header-center">
               <h3 style="color:white;text-align:center">Case Study</h3>
               <div class="line"></div>
               <br><br>
               <div class="blogCover">
                  <div class="contLft">
                     <div class="post">
                        @if(isset($casestudies))
                            @foreach ($casestudies as $casestudy )
                                <div class="snglBlg">
                                    <div class="title">
                                        <a href="case-details.html" rel="bookmark" title="">
                                            <h2>{{$casestudy->title}}</h2>
                                        </a>
                                    </div>
                                    <div class="entry">
                                        <p>{!!substr($casestudy->description,0, 350)!!}</p>
                                    </div>
                                    <a href="{{route('casestudy.details',$casestudy->slug)}}" rel="bookmark" class="readmore" title="Read More">Read More</a>
                                </div>
                            @endforeach
                        @else
                                <div class="snglBlg">
                                    <div class="title">
                                        <a href="case-details.html" rel="bookmark" title="">
                                        </a>
                                    </div>
                                    <div class="entry">
                                        <h2></h2>
                                        <p>Ohh there is no Case Studies Now...</p>
                                        <br>
                                        <br><br><br><br><br><br><br><br><br><br>
                                    </div>
                                </div>
                        @endif
                     </div>
                  </div>
                  <div class="contRgt">
                     <div class="heading">Recent Posts</div>
                     <div class="blogRecent">
                        <div class="rightsidebar">
                           <ul class="listing">
                            @if(isset($casestudies))
                               @foreach ($casestudies as $casestudy )
                                <li><a href="{{route('casestudy.details',$casestudy->slug)}}" title="{{$casestudy->title}}">{{$casestudy->title}}</a></li>
                               @endforeach
                            @endif
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
@endsection
