@extends('admin.layouts.master')

@section('content')
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <h1>
      Group
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

              <h3 class="card-title">Create Group</h3>
            </div>

            <form action="{{route('admin.group.save')}}" method="POST" enctype="multipart/form-data">
              @csrf
              <div class="card-body">
                <div class="form-group">
                  <label for="exampleInputEmail1">Title</label>
                  <input type="tezt" name="title" class="form-control" id="title" value="{{ old('title') }}" placeholder="Enter Title">
                  {!! $errors->first('title', '<p style="color:red;" class="help-block error">:message</p>') !!}
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Description</label>
                  <input type="tezt" name="description" class="form-control" id="description" value="{{ old('description') }}" placeholder="Enter Desc">
                  {!! $errors->first('description', '<p style="color:red;" class="help-block error">:message</p>') !!}
                </div>
              </div>
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