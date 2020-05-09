<div>

<!-- begin:: Content Head -->
 <div class="kt-subheader kt-grid__item" id="kt_subheader">
    <div class="kt-container ">

        <div class="kt-subheader__main">
            <h3 class="kt-subheader__title">
                {{ __('Role') }}
            </h3>
            <span class="kt-subheader__separator kt-subheader__separator--v"></span>
            <div class="kt-subheader__group" id="kt_subheader_search">
                <span class="kt-subheader__desc" id="kt_subheader_total">
                    {{ $roles->total() }} {{ __('Total') }} </span>
               
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
            <a href="{{ route('role.create') }}" class="btn btn-light btn-elevate btn-bold"> {{ __(' Tambah ') }} </a>
        </div>
    </div>
</div>

   <div class="kt-container  kt-grid__item kt-grid__item--fluid">
       <!--begin::Portlet-->
      <div class="kt-portlet kt-portlet--mobile">
           <div class="kt-portlet__body kt-portlet__body--fit">
               <!--begin: Datatable -->
               <div class="table-responsive">
                   <table class="table">
                       <thead class="kt-portlet__foot kt-portlet__foot--solid">
                           <tr>
                               <th>
                                   <a href="#" wire:click.prevent="sortBy('first_name')" role="button">
                                       {{ __('Nama') }} &nbsp;
                                       @include('includes._sort-icon', ['field' => 'first_name'])
                                   </a>   
                               </th>
                               <th> 
                                   <a href="#" wire:click.prevent="sortBy('last_name')" role="button">
                                       {{ __('Slug') }} &nbsp;
                                       @include('includes._sort-icon', ['field' => 'last_name'])
                                   </a>  
                               </th>
                               <th>
                                   {{ __('Permision') }}
                               </th>
                               <th width="12%">{{ __('Opsi') }}</th>
                           </tr>
                       </thead>
                       <tbody>
                           @forelse ($roles as $role)
                           <tr>
                               <td>
                                   <div class="kt-user-card-v2">
                                       {{ $role->name }}
                                   </div>
                               </td>
                               <td>
                                   <div class="kt-user-card-v2">
                                    {{ $role->guard_name }}
                                   </div>
                               </td>
                               <td>
                                <span class="kt-badge kt-badge--brand kt-badge--dot kt-badge--xl"></span>
                               </td>
                               <td>
                                   <div class="kt-widget2__actions">
                                    <button type="button" class="btn btn-outline-hover-primary btn-sm" data-toggle="kt-tooltip" data-skin="brand" data-placement="top" title="" data-original-title="{{ __('Detail') }}">
                                        <i class="fas fa-eye fa-lg kt-font-primary" ></i> 
                                    </button>
                                    @include('livewire.role.modal')
                                    <a href="{{ route('role.edit', $role->id) }}" class="btn btn-outline-hover-primary btn-sm" data-toggle="kt-tooltip" data-skin="brand" data-placement="top" title="" data-original-title="{{ __('Edit') }}">
                                        <i class="far fa-edit fa-lg kt-font-primary"></i> 
                                    </a>
                                    <button type="button" data-toggle="modal" data-target="#roleModal{{ $role->id }}" class="btn btn-outline-hover-primary btn-sm" data-toggle="kt-tooltip" data-skin="brand" data-placement="top" title="" data-original-title="{{ __('Hapus') }}">
                                        <i class="flaticon-delete kt-font-danger"></i> 
                                    </button>
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

       <div class="kt-pagination  kt-pagination--info">
        {{ $roles->links() }}

        <div class="col text-right text-muted">
            {{ __('Showing') }} {{ $roles->firstItem() }} {{ __('to') }} {{ $roles->lastItem() }} {{ __('out of') }} {{ $roles->total() }} {{ __('results') }}
        </div>
    </div>
     
   </div>
</div>

@push('scripts')

<script src="{{  asset('vendor/sweetalert/sweetalert.all.js')  }}"></script>
<script>
   @if (Session::has('alert.config'))
           Swal.fire({!! Session::pull('alert.config') !!});
   @endif
</script>
@endpush