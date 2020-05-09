@extends('layouts.app')

@section('content')

<div class="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">

    <div class="kt-subheader kt-grid__item" id="kt_subheader">
    </div>

    <div class="kt-container  kt-grid__item kt-grid__item--fluid">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="kt-portlet">
                    <div class="kt-portlet__foot kt-portlet__foot--solid" style="padding:15px;">
            
                        <div class="row">
                            <div class="col kt-align-left">
                                <div class="kt-portlet__head-label">
                                    <h4 class="kt-portlet__head-title">
                                        {{ __('Edit Permission') }}
                                    </h4>
                                </div>
                            </div>
                            <div class="col kt-align-right">
                                <a href="{{ route('permission.index') }}" class="btn btn-clean btn-sm btn-icon-md btn-icon" data-toggle="kt-tooltip" data-skin="brand" data-placement="top" data-original-title="{{ __('Daftar Permission') }}">
                                    <i class="flaticon-menu-button"></i> 
                                </a>
                            </div>
                        </div>
                    </div>

                    <!--begin::Form-->
                    <livewire:permission.edit-permission :permission="$permission" />
                    <!--end::Form-->
                </div>
            </div>
        </div>
    </div>

</div>

@endsection
