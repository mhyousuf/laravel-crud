<x-layouts.app>
    <section id="multiple-column-form">
        <div class="row match-height">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">{{ __('Storage Image Media') }}</h4>
                    </div>

                    <div class="card-content">
                        <div class="card-body">
                            <form
                                class="form"
                                action="{{ isset($user)
                                    ? route('user.backend.users.update', $user->id)
                                    : route('user.backend.users.store')
                                }}"
                                method="POST"
                                enctype="multipart/form-data"
                            >
                                @csrf
                                @isset($user) @method('PUT') @endisset

                                <div class="form-body">
                                    <div class="row form_box">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="form_heading">Email</label>
                                                <input
                                                    type="email"
                                                    class="form-control @error('email') is-invalid @enderror"
                                                    name ="email"
                                                    id="email"
                                                    value="{{ old('email') ?? $user->email ?? null }}"
                                                    placeholder="Email"
                                                />
                                                {{-- @if($errors->has('email'))
                                                    <div class="invalid-feedback">{{ $errors->first('email') }}</div>
                                                @endif --}}
                                                @error('email') <div class="invalid-feedback">{{ $message }}</div> @enderror
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="form_heading">Password</label>
                                                <input
                                                    type="password"
                                                    class="form-control @error('password') is-invalid @enderror"
                                                    name="password"
                                                    id="password"
                                                    value="{{ old('password') ?? null }}"
                                                    placeholder="Password"
                                                />
                                                @error('password') <div class="invalid-feedback">{{ $message }}</div> @enderror
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-body">
                                    <div class="row form_box">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="form_heading">Name</label>
                                                <input
                                                    type="text"
                                                    class="form-control @error('name') is-invalid @enderror"
                                                    name ="name"
                                                    id="name"
                                                    value="{{ old('name') ?? $user->name ?? null }}"
                                                    placeholder="Name"
                                                />
                                                @error('name') <div class="invalid-feedback">{{ $message }}</div> @enderror
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="">Image</label>

                                                @isset ($user->image)
                                                    <a
                                                        href="{{ Storage::url($user->image) }}"
                                                        class="float-sm-end"
                                                        target="_blank"
                                                    >Show Media</a>
                                                @endisset

                                                <input
                                                    type="file"
                                                    name ="image"
                                                    class="form-control"
                                                    id="image"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-body">
                                    <div class="row form_box">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="form_heading">Nid Front</label>

                                                    @if ($user->getMedia('nid_front'))
                                                        <a
                                                            href="{{ $user->getFirstMediaUrl('nid_front') }}"
                                                            class="float-sm-end"
                                                            target="_blank"
                                                        >Show Media</a>
                                                    @endif

                                                <input
                                                    type="file"
                                                    name ="nid_front"
                                                    class="form-control"
                                                    id="nid_front"
                                                />
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="form_heading">Nid Back</label>
                                                    @if ($user->getMedia('nid_back'))
                                                        <a
                                                            href="{{ $user->getFirstMediaUrl('nid_back') }}"
                                                            class="float-sm-end"
                                                            target="_blank"
                                                        >Show Media</a>
                                                    @endif
                                                <input
                                                    type="file"
                                                    name ="nid_back"
                                                    class="form-control"
                                                    id="nid_back"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-body">
                                    <div class="row form_box">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label class="form_heading">Passport</label>
                                                    @if ($user->getMedia('passport'))
                                                        <a
                                                            href="{{ $user->getFirstMediaUrl('passport') }}"
                                                            class="float-sm-end"
                                                            target="_blank"
                                                        >Show Media</a>
                                                    @endif
                                                <input
                                                    type="file"
                                                    name ="passport"
                                                    class="form-control"
                                                    id="passport"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {{-- @isset ($user->image)
                                    <div class="text-center my-3">
                                        <img src="{{ Storage::url($user->image) }}" class="rounded" alt="User" width="400" height="350">
                                    </div>
                                @endisset --}}

                                <div class="my-3">
                                    <button class="btn btn-success" type="submit">
                                        {{ isset($user) ? 'Update' : 'Save'  }}
                                    </button>

                                    <a href="{{ route('user.backend.users.index') }}" type="button" class="btn btn-danger">Cencel</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</x-layouts.app>
