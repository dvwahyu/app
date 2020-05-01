<div>
    <div class="kt-container  kt-grid__item kt-grid__item--fluid">
        <!--begin::Portlet-->
       <div class="kt-portlet kt-portlet--mobile">
            <div class="kt-portlet__body kt-portlet__body--fit">
                <!--begin: Datatable -->
                <div class="table-responsive">
                    <table class="table">
                        <thead style="margin:50px;">
                            <tr>
                                <th>User</th>
                                <th>Username</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse ($users as $user)
                            <tr>
                                <td>
                                    <div class="kt-user-card-v2">
                                        <div class="kt-user-card-v2__pic">
                                            <div class="kt-badge kt-badge--xl kt-badge--info" data-toggle="kt-tooltip" data-skin="brand" data-placement="top" title="" data-original-title="{{ $user->username }}">L</div>
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
                                                    <a href="#" class="kt-nav__link">
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

        <!--begin::Modal-->
        <div class="modal fade" id="kt_datatable_records_fetch_modal" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Selected Records</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"></span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="kt-scroll ps" data-scroll="true" data-height="200"
                            style="height: 200px; overflow: hidden;">
                            <ul id="kt_apps_user_fetch_records_selected"></ul>
                            <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
                                <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                            </div>
                            <div class="ps__rail-y" style="top: 0px; right: 0px;">
                                <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-brand" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <!--end::Modal-->
    </div>
</div>
