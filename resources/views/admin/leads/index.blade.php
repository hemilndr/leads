@extends('admin.layouts.master')

@section('content')
<div class="content-wrapper">
    <section class="content-header">
        <h1>
            User
            <small>Manage</small>
        </h1>
    </section>

    <section class="content">
        <div class="row">
            <div class="col-md-12">

                <div class="panel panel-default">
                    <div class="panel-heading"></div>
                    <div class="panel-body">

                        <div class="col-md-12">
                            <form method="GET" action="" accept-charset="UTF-8" class="navbar-form " role="search">
                                <div class="row">
                                    <div class="form-group ">
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" value="{{Request::get('search')}}" name="search" placeholder="Search key">
                                        </div>
                                    </div>
                                    <div class="form-group ">
                                        <button class="btn btn-primary" type="submit">
                                            <i class="fa fa-search"></i>
                                        </button>
                                        <a href="" class="btn  btn-warning">Clear</a>

                                    </div>
                                </div>
                            </form>
                        </div>
                        <br />
                        
                        <div class="nav-tabs-custom">
                        <!-- <nav class="w-100">
                            <div class="nav nav-tabs " id="product-tab" role="tablist">
                            <a class="nav-item nav-link active show" id="product-desc-tab" data-toggle="tab" href="#tab1" role="tab" aria-controls="product-desc" aria-selected="false">Lead</a>
                            <a class="nav-item nav-link" id="product-comments-tab" data-toggle="tab" href="#tab2" role="tab" aria-controls="product-comments" aria-selected="false">Import</a>
                            </div>
                        </nav> -->
                            
                            <div class="tab-content">
                                <div class="tab-pane active" id="tab1">
                                    <table class="table table-bordered table-hover" id="users-table">
                                        <thead>
                                            <tr>
                                            <th> #</th>
                                            <th> Name</th>
                                            <th> Email</th>
                                            <th> Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach($leads as $lead)
                                            <tr>
                                                <td> {{$loop->iteration}}</td>
                                                <td> {{$lead->name}}</td>
                                                <td>{{$lead->email}}</td>
                                                <td>{{$lead->points}}</td>
                                            </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>
                                <div class="tab-pane" id="tab2">
                                    <table class="table table-bordered table-hover" id="admins-table">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Role</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Admin User</td>
                                                <td>admin@example.com</td>
                                                <td>Admin</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <script>
            
        </script>
    </section>
    <!-- /.content -->
</div>
<!-- /.content-wrapper -->

@endsection