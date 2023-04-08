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

              <h3 class="card-title">Add User to Group</h3>
            </div>

            <form action="{{route('admin.group.add-user')}}" method="POST" enctype="multipart/form-data">
              @csrf
              <input type="hidden" name="group_id" value="{{$group_id}}">
              <div class="card-body">
                <div class="form-group">
                  <label for="exampleInputEmail1">Users</label>
                  <select class="selectpicker" name="users[]" multiple data-live-search="true">
                    @foreach($users as $user)
                    <option value="{{$user->id}}">{{$user->name}}</option>
                    @endforeach
                  </select>
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
<script>
  $('select').selectpicker();

</script>
@endsection