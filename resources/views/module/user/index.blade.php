@extends('layouts.app')

@section('content')

<div class="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">
    <!-- begin:: Content Head -->
    <livewire:user.search />
    <!-- end:: Content Head -->

    <!-- begin:: Content -->
    <livewire:user.index />
    <!-- end:: Content -->
</div>


@endsection
