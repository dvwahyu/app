<!-- Modal -->
<div class="modal" id="permissionModal{{ $permission->id }}" tabindex="-1" role="dialog" aria-labelledby="permissionModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-sm" permission="document">
    <div class="modal-content">
    
        <div class="modal-body justify-content-center">
            <p class="text-center">{{ __('Apakah kamu yakin ??') }}</p>
            <h5 class="text-center"> {{ $permission->name }}</h5>
            
        </div>
       
        <div class="justify-content-center align-self-center mb-3">
            <button type="button" class="btn btn-secondary" data-dismiss="modal"> <i class="flaticon-close"></i> {{ __('Batal') }}</button>
            <button wire:click="destroy({{ $permission->id }})" wire:loading.attr="disable" class="btn btn-danger">
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
            
            <i class="fas fa-trash"></i> {{ __('Hapus') }}</button>
        </div>
     
    </div>
  </div>
</div>