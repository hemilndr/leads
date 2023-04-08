@extends('admin.layouts.master')

@section('content')
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <h1>
      Expense
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

              <h3 class="card-title">View  Expense</h3>
            </div>

              <div>
              <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Amount</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
    @foreach($expenses as $expense)
    <tr>
      <th scope="row">{{$loop->iteration}}</th>
      <td>{{$expense->title}}</td>
      <td>{{$expense->total_amount}}</td>
      <td>{{date('d-m-Y', strtotime($expense->created_at))}}</td>
    </tr>
  @endforeach
  </tbody>
</table>
              </div>
          </div>
        </div>

      </div>


  </section>
</div>
<script>
  $('select').selectpicker();

</script>
@endsection