<div>
    <form class="kt-form kt-form--fit kt-form--label-right" wire:submit.prevent="update">
        <div class="kt-portlet__body">
            <div class="form-group row">
                <label class="col-lg-2 col-form-label">{{ __('Nama Depan') }}</label>
                <div class="col-lg-3">
                    <input type="text"  wire:model="first_name" class="form-control @error('first_name') is-invalid @enderror" placeholder="{{ __('Masukan nama depan') }}">
        
                    @error('first_name')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror

                </div>
                <label class="col-lg-2 col-form-label">{{ __('Nama Belakang') }}</label>
                <div class="col-lg-3">
                    <input type="text" wire:model="last_name" class="form-control @error('last_name') is-invalid @enderror" placeholder="{{ __('Masukan nama belakang') }}">

                    @error('last_name')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-2 col-form-label">{{ __('Nama Pengguna') }}</label>
                <div class="col-lg-3">
                    <div class="kt-input-icon">
                        <input type="text" wire:model="username" class="form-control @error('username') is-invalid @enderror" placeholder="{{ __('Masukan nama pengguna') }}">

                        @error('username')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                </div>
                <label class="col-lg-2 col-form-label">{{ __('Email') }}</label>
                <div class="col-lg-3">
                    <div class="kt-input-icon">
                        <input type="email" wire:model="email" class="form-control @error('email') is-invalid @enderror" placeholder="{{ __('Masukan email') }}">

                        @error('email')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                </div>
            </div>

            <div class="form-group row">
                <label class="col-lg-2 col-form-label">{{ __('Kata Sandi') }}</label>
                <div class="col-lg-3">
                    <div class="kt-input-icon">
                        <input type="password" wire:model="password_confirmation" class="form-control @error('password') is-invalid @enderror" placeholder="{{ __('Masukan kata sandi') }}">

                        @error('password')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                </div>
                <label class="col-lg-2 col-form-label">{{ __('Konfirmasi Kata Sandi') }}</label>
                <div class="col-lg-3">
                    <div class="kt-input-icon">
                        <input type="password" wire:model="password" class="form-control" placeholder="{{ __('Konfirmasi kata sandi') }}">
                    </div>
                </div>
            </div>


        </div>

        <input disabled id="userId" class="form-control" type="hidden" wire:model="userId">

        <div class="kt-portlet__foot kt-portlet__foot--fit-x">
            <div class="kt-form__actions">
                <div class="row">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-10">
                        <button type="submit" wire:target="update" wire:loading.attr="disable" class="btn btn-primary"> 
                            <svg wire:target="submit" wire:loading xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 38 38" stroke="#fff" >
                                <g fill="none" fill-rule="evenodd">
                                    <g transform="translate(1 1)" stroke-width="2">
                                        <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
                                        <path d="M36 18c0-9.94-8.06-18-18-18"/>
                                            <animateTransform 
                                                attributeName="transform"
                                                type="rotate"
                                                from="0 18 18"
                                                to="360 18 18"
                                                dur="1s"
                                                repeatCount="indefinite">
                                        </path>
                                    </g>
                                    
                                </g>
                            </svg>
                            <span>{{ __('Simpan') }}</span>
                        </button>
                        <button type="reset" class="btn btn-secondary">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>
