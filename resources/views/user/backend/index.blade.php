<x-layouts.app>
    @if (session('type'))
        <div class="alert alert-success col-3" style="text-align: right;">
            {{ session()->get('type') }}
            <button type="button" class="btn-close" data-dismiss="toast" aria-label="Close"></button>
        </div>
        {{-- @php session()->forget('type') @endphp --}}
    @endif

    <div class="dropdown align-right">
        <button class="btn-icon btn btn-primary btn-round btn-sm dropdown-toggle" type="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            <!-- <i class="feather icon-settings"></i> -->
            <i class="feather icon-plus"></i>
        </button>
        <div class="dropdown-menu aline-right">
            <a class="dropdown-item" id="" href="{{ route('user.backend.users.create') }}">&nbsp; Add new</a>
        </div>
    </div>

    <div class="table-responsive-sm">
        <table class="table">
            <thead class="table_head">
                <tr>
                    <td align="left" width="5%">SL</td>
                    <td align="left">Name</td>
                    <td align="left">Email</td>
                    <td align="left">Image</td>
                    <td align="right">Action</td>
                </tr>
            </thead>
            <tbody class="table_data">
                @foreach ($users as $key => $v)
                    <tr>
                        <th scope="row">{{ $key + 1 }}</th>
                        <td align="left">{{ $v->name }}</td>
                        <td align="left">{{ $v->email }}</td>
                        <td align="left">
                            <img class="media-object rounded-circle" src="{{ Storage::url($v->image) }}" alt="Avatar"
                                height="50" width="50">
                        </td>
                        <td align="right">
                            <a href="{{ route('user.backend.users.edit', $v->id) }}"
                                class="btn btn-icon rounded-circle btn-outline-success mr-1 mb-1 waves-effect waves-light edit_btn acc_btn">
                                <i class="fa fa-pencil-square-o"></i>
                            </a>

                            <a href="{{ route('user.backend.users.destroy', $v->id)}}"
                                class="btn btn-icon rounded-circle btn-outline-danger  mr-1 mb-1 waves-effect waves-light del_btn delete-data">
                                <i class="fa fa-trash-o"></i>
                            </a>
                            {{-- <!-- <i class="btn btn-icon fa fa-trash-o rounded-circle btn-outline-danger mr-1 mb-1 waves-effect waves-light del_btn delete-data" data-href="{{ route('image.destroy') }}" data-id="{{ $v->id }}"> --> --}}
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</x-layouts.app>
