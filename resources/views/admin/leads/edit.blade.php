@extends('admin.layouts.master')

@section('content')
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <h1>
      User
      <small>Manage</small>
    </h1>

    @if ($message = Session::get('message'))
    <div class="alert alert-success alert-dismissible">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
      <h5><i class="icon fa fa-check"></i> {!! $message !!}</h5>

    </div>
    @endif
  </section>

  <section class="content">
    <div class="container-fluid">
      <div class="row">

        <div class="col-md-12">
          <div class="card card-primary">
            <div class="card-header">

              <h3 class="card-title">Edit User</h3>
            </div>

            <form action="{{route('admin.user.update')}}" method="POST" enctype="multipart/form-data">
              @csrf
              <input type="hidden" name="user_id" value="{{encrypt($user->id)}}">
              <div class="card-body">
                <div class="form-group">
                  <label for="exampleInputEmail1">Name</label>
                  <input type="tezt" name="name" class="form-control" id="name" value="{{ old('name', isset($user) ? $user->name : '') }}" placeholder="Enter Title">
                  {!! $errors->first('name', '<p style="color:red;" class="help-block error">:message</p>') !!}
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email</label>
                  <input type="tezt" name="email" class="form-control" id="email" value="{{ old('email', isset($user) ? $user->email : '') }}" placeholder="Enter Title">
                  {!! $errors->first('email', '<p style="color:red;" class="help-block error">:message</p>') !!}
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Mobile</label>
                  <input type="tezt" name="mobile" class="form-control" id="mobile" value="{{ old('mobile', isset($user) ? $user->mobile : '') }}" placeholder="Enter Title">
                  {!! $errors->first('mobile', '<p style="color:red;" class="help-block error">:message</p>') !!}
                </div>
               
              </div>
              <!-- /.card-body -->

              <div class="card-footer">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>

      </div>


  </section>
</div>

@endsection