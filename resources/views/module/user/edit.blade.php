@extends('layouts.app')

@section('content')

<div class="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">

    <div class="kt-subheader kt-grid__item" id="kt_subheader">
    </div>

    <div class="kt-container  kt-grid__item kt-grid__item--fluid">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="kt-portlet">
                    <div class="kt-portlet__head">
                        <div class="kt-portlet__head-label">
                            <h3 class="kt-portlet__head-title">
                                {{ __('Informasi Pengguna') }}
                            </h3>
                        </div>
                        <div class="kt-portlet__head-toolbar">
       
                            <a href="{{ route('user.index') }}" class="btn btn-clean btn-sm btn-icon-md btn-icon" data-toggle="kt-tooltip" data-skin="brand" data-placement="top" title="" data-original-title="{{ __('Daftar Pengguna') }}">
                                <i class="flaticon-menu-button"></i> 
                            </a>
                        </div>
                    
                    </div>

                    <!--begin::Form-->
                    
                    <livewire:user.form :user="$user" />
                    <!--end::Form-->
                </div>
            </div>
        </div>
    </div>

</div>

@endsection
