<div>
     <!-- begin:: Content Head -->
    <div class="kt-subheader   kt-grid__item" id="kt_subheader">
        <div class="kt-container ">

            <div class="col-md-12 px-0">
                @if(session()->has('message'))
                    <div class="alert alert-dark fade show" role="alert">
                        <div class="alert-text"> {{ session()->get('message') }} </div>
                        <div class="alert-close">
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true"><i class="la la-close"></i></span>
                            </button>
                        </div>
                    </div>
                @endif
            </div>

            <div class="kt-subheader__main">
                <h3 class="kt-subheader__title">
                    {{ __('Pengguna') }}
                </h3>
                <span class="kt-subheader__separator kt-subheader__separator--v"></span>
                <div class="kt-subheader__group" id="kt_subheader_search">
                    <span class="kt-subheader__desc" id="kt_subheader_total">
                        {{ $users->total() }} {{ __('Total') }} </span>
                   
                        <div class="kt-input-icon kt-input-icon--right kt-subheader__search">
                            <input type="text" wire:model="search" class="form-control" placeholder="{{ __('Pencarian...') }}">
                            
                            <span class="kt-input-icon__icon kt-input-icon__icon--right">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect x="0" y="0" width="24" height="24"></rect>
                                            <path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"></path>
                                            <path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fill-rule="nonzero"></path>
                                        </g>
                                    </svg>
                                </span>
                            </span>
                        </div>
                    
                </div>
                
            </div>
            <div class="kt-subheader__toolbar">
                <div class="kt-pagination  kt-pagination--brand">
                    <div class="kt-pagination__toolbar">
                        <select wire:model="perPage" class="form-control kt-font-brand">
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                    </div>
                </div>

                <div class="kt-subheader__wrapper">
                    <div class="dropdown dropdown-inline" data-toggle="kt-tooltip" data-skin="brand" data-placement="top" title="" data-original-title="{{ __('Order by') }}">
                        <a href="#" class="btn btn-light btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                            <i class="kt-nav__link-icon fa fa-sort-amount-down"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-fit dropdown-menu-md dropdown-menu-right">

                            <!--begin::Nav-->
                            <ul class="kt-nav">
                                <li class="kt-nav__item">
                                    <a href="#" class="kt-nav__link"><span class="kt-nav__link-text">{{ __('Sort Asc') }}</span>
                                    </a>
                                </li>
                                <li class="kt-nav__item">
                                    <a href="#" class="kt-nav__link"><span class="kt-nav__link-text">{{ __('Sort Desc') }}</span>
                                    </a>
                                </li>
                                <li class="kt-nav__item">
                                    <a href="#" class="kt-nav__link"><span class="kt-nav__link-text">{{ __('Hapus Sort') }}</span>
                                    </a>
                                </li>
                            </ul>

                            <!--end::Nav-->
                        </div>
                    </div>
                </div>
                
                <a href="{{ route('user.create') }}" class="btn btn-light btn-elevate btn-bold"> {{ __(' Tambah ') }} </a>
            </div>
        </div>
    </div>

    <!-- end:: Content Head -->

    <div class="kt-container  kt-grid__item kt-grid__item--fluid">
        <!--begin::Portlet-->
       <div class="kt-portlet kt-portlet--mobile">
            <div class="kt-portlet__body kt-portlet__body--fit">
                <!--begin: Datatable -->
                <div class="table-responsive">
                    <table class="table">
                        <thead class="kt-portlet__foot kt-portlet__foot--solid" style="margin:50px;">
                            <tr>
                                <th>
                                    <a href="#" wire:click.prevent="sortBy('first_name')" role="button">
                                        {{ __('Nama') }} &nbsp;
                                        @include('includes._sort-icon', ['field' => 'first_name'])
                                    </a>   
                                </th>
                                <th> 
                                    <a href="#" wire:click.prevent="sortBy('last_name')" role="button">
                                        {{ __('Nama Pengguna') }} &nbsp;
                                        @include('includes._sort-icon', ['field' => 'last_name'])
                                    </a>  
                                </th>
                                <th>
                                    {{ __('Type') }}
                                </th>
                                <th>
                                    {{ __('Status') }}
                                </th>
                                <th>{{ __('Opsi') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse ($users as $user)
                            <tr>
                                <td>
                                    <div class="kt-user-card-v2">
                                        <div class="kt-user-card-v2__pic">
                                            <img src="{{ asset('storage/avatars/'. $user->avatar) }}" class="m-img-rounded kt-marginless profile-user" alt="photo">
                                        </div>
                                        <div class="kt-user-card-v2__details">
                                            
                                            <a class="kt-user-card-v2__name" href="#">{{ $user->first_name }} {{ $user->last_name }}</a>
                                            <span class="kt-user-card-v2__desc">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" class="kt-svg-icon kt-svg-icon--brand">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <rect x="0" y="0" width="30" height="30"></rect>
                                                        <path d="M12.9835977,18 C12.7263047,14.0909841 9.47412135,11 5.5,11 C4.98630124,11 4.48466491,11.0516454 4,11.1500272 L4,7 C4,5.8954305 4.8954305,5 6,5 L20,5 C21.1045695,5 22,5.8954305 22,7 L22,16 C22,17.1045695 21.1045695,18 20,18 L12.9835977,18 Z M19.1444251,6.83964668 L13,10.1481833 L6.85557487,6.83964668 C6.4908718,6.6432681 6.03602525,6.77972206 5.83964668,7.14442513 C5.6432681,7.5091282 5.77972206,7.96397475 6.14442513,8.16035332 L12.6444251,11.6603533 C12.8664074,11.7798822 13.1335926,11.7798822 13.3555749,11.6603533 L19.8555749,8.16035332 C20.2202779,7.96397475 20.3567319,7.5091282 20.1603533,7.14442513 C19.9639747,6.77972206 19.5091282,6.6432681 19.1444251,6.83964668 Z" fill="#000000"></path>
                                                        <path d="M8.4472136,18.1055728 C8.94119209,18.3525621 9.14141644,18.9532351 8.89442719,19.4472136 C8.64743794,19.9411921 8.0467649,20.1414164 7.5527864,19.8944272 L5,18.618034 L5,14.5 C5,13.9477153 5.44771525,13.5 6,13.5 C6.55228475,13.5 7,13.9477153 7,14.5 L7,17.381966 L8.4472136,18.1055728 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"></path>
                                                    </g>
                                                </svg>
                                                 {{ $user->email }}
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="kt-user-card-v2">
                                       
                                        <div class="kt-user-card-v2__details">
                                            <a class="kt-user-card-v2__name" href="#">{{ $user->username }}</a>
                                            <span class="kt-user-card-v2__desc">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" class="kt-svg-icon kt-svg-icon--brand">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <rect x="0" y="0" width="30" height="30"></rect>
                                                        <path d="M12,10.9996338 C12.8356605,10.3719448 13.8743941,10 15,10 C17.7614237,10 20,12.2385763 20,15 C20,17.7614237 17.7614237,20 15,20 C13.8743941,20 12.8356605,19.6280552 12,19.0003662 C11.1643395,19.6280552 10.1256059,20 9,20 C6.23857625,20 4,17.7614237 4,15 C4,12.2385763 6.23857625,10 9,10 C10.1256059,10 11.1643395,10.3719448 12,10.9996338 Z M13.3336047,12.504354 C13.757474,13.2388026 14,14.0910788 14,15 C14,15.9088933 13.7574889,16.761145 13.3336438,17.4955783 C13.8188886,17.8206693 14.3938466,18 15,18 C16.6568542,18 18,16.6568542 18,15 C18,13.3431458 16.6568542,12 15,12 C14.3930587,12 13.8175971,12.18044 13.3336047,12.504354 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"></path>
                                                        <circle fill="#000000" cx="12" cy="9" r="5"></circle>
                                                    </g>
                                                </svg> 
                                                Login terakhir 2 minut ago
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span class="btn btn-bold btn-sm btn-font-sm  btn-label-brand">Pending</span>
                                </td>
                                <td><span class="kt-font-bold kt-font-danger">Online</span></td>
                                <td>
                                    <div class="kt-widget2__actions">
                                        <a href="#" class="btn btn-clean btn-sm btn-primary" data-toggle="dropdown" aria-expanded="false">
                                            <i class="flaticon2-next"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-fit dropdown-menu-right" style="">
                                            <ul class="kt-nav">
                                                <li class="kt-nav__item">
                                                    <a href="{{ route('user.edit', $user->id) }}"  class="kt-nav__link">
                                                        <i class="kt-nav__link-icon flaticon-edit"></i>
                                                        <span class="kt-nav__link-text">{{ __('Edit') }}</span>
                                                    </a>
                                                </li>
                                                <li class="kt-nav__item">
                                                    <a href="#" data-toggle="modal" data-target="#userModal{{ $user->id }}"
                                                         class="kt-nav__link delete-confirm ">
                                                        <i class="kt-nav__link-icon flaticon-delete"></i>
                                                        <span class="kt-nav__link-text">{{ __('Hapus') }}</span>
                                                    </a>
                                                </li>
                                                 
                                                <li class="kt-nav__item">
                                                    <a href="#" class="kt-nav__link">
                                                        <i class="kt-nav__link-icon flaticon-eye"></i>
                                                        <span class="kt-nav__link-text">{{ __('Detail') }}</span>
                                                    </a>
                                                </li>            
                                            </ul>
                                        </div>
                                    </div>
                                </td> 
                                @include('livewire.user.modal')
                            </tr>
                            
                            @empty
                                
                            @endforelse
                           
                        </tbody>
                    </table>
                </div>
                
                <!--end: Datatable -->
            </div>
        </div>


        <!--end::Portlet-->
        <div class="kt-pagination  kt-pagination--info">
            {{ $users->links() }}

            <div class="col text-right text-muted">
                {{ __('Showing') }} {{ $users->firstItem() }} {{ __('to') }} {{ $users->lastItem() }} {{ __('out of') }} {{ $users->total() }} {{ __('results') }}
            </div>
        </div>
    </div>
</div>

@push('scripts')
<script type="text/javascript">
    document.addEventListener('DOMContentLoaded', function () {
        window.livewire.on('alert', param => {
            toastr[param['type']](param['message']);
        });
    });
</script>

<script src="{{  asset('vendor/sweetalert/sweetalert.all.js')  }}"></script>
<script>
    @if (Session::has('alert.config'))
            Swal.fire({!! Session::pull('alert.config') !!});
    @endif
</script>
@endpush