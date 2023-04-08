@extends('admin.layouts.master')

@section('content')
<div class="content-wrapper">
    <section class="content-header">
        <h1>
            Group
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
                        <br />
                        <div class="col-md-12">
                            <a href="{{route('admin.group.create')}}" class="btn btn-success btn-sm" title="Add New ">
                                <i class="fa fa-plus" aria-hidden="true"></i> Add New
                            </a>
                        </div>
                        <div class="table-responsive col-md-12">
                            <br />
                            <br />
                            <table class="table table-borderless">
                                <tr>
                                    <th>Id</th>
                                    <th style="width: 30%;">Title</th>
                                    <th>Action</th>
                                </tr>
                                @if(isset($groups))

                                @foreach($groups as $group)

                                <tr>
                                    <td>{{ $loop->iteration }}</td>
                                    <td>{{ $group->title }}</td>


                                    </td>
                                    <td>
                                        <a href="{{route('admin.group.edit',[encrypt($group->id)])}}" title="Edit Group" class="btn btn-primary">
                                            Edit
                                        </a>
                                        <form method="POST" action="{{route('admin.group.delete')}}" accept-charset="UTF-8" style="display:inline">
                                            {{ csrf_field() }}
                                            <input type="hidden" name="id" value="{{encrypt($group->id)}}">
                                            <button type="submit" class="btn btn-danger" title="Delete Group" onclick="return confirm('Are you sure?')">
                                                Delete
                                            </button>
                                        </form>
                                        <a href="{{route('admin.group.add.user',[encrypt($group->id)])}}" title="add user" class="btn btn-success">
                                            <i class='fas fa-user-alt' style='font-size:24px'></i>
                                        </a>
                                        <a href="{{route('admin.group.expense.create',[encrypt($group->id)])}}" title="add expense" class="btn btn-primary">Expense</a>
                                        <a href="{{route('admin.group.expense.view',[encrypt($group->id)])}}" title="view expense" class="btn btn-primary"><i class="fa fa-eye" aria-hidden="true"></i></a>
                                    </td>
                                </tr>
                                @endforeach
                                @else
                                <tr>
                                    <td colspan="4">No records found</td>
                                </tr>
                                @endif


                            </table>



                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script>
            function check() {

                var r = confirm("Are you sure wanted to delete?");

                if (r) {
                    return true;
                } else {
                    return false;
                }
            }
        </script>
    </section>
    <!-- /.content -->
</div>
<!-- /.content-wrapper -->

@endsection