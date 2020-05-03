@extends('layouts.app')

@section('content')

<div class="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">
    <!-- begin:: Content Head -->
    
    <!-- end:: Content Head -->

    <!-- begin:: Content -->
    <livewire:user.index />
    <!-- end:: Content -->
</div>


@endsection


@push('scripts')
@include('sweetalert::alert')
@endpush

