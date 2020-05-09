<div>
    <form wire:submit.prevent="submit" class="kt-form">
      <div class="kt-portlet__body">
          <div class="form-group">
              <label for="name" class="col-form-label">{{ __('Nama Permission') }}</label>
              <input type="text" wire:model="name" class="form-control @error('name') is-invalid @enderror" id="name" placeholder="{{ __('Masukan nama permission') }}">
             
              @error('name')
                  <span class="invalid-feedback" role="alert">
                      <strong>{{ $message }}</strong>
                  </span>
              @enderror
          </div>
  
        </div>
      <div class="kt-portlet__foot">
        <button type="submit" wire:target="submit" wire:loading.attr="disable" class="btn btn-primary btn-block"> 
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
          <button type="reset" class="btn btn-secondary btn-block" >{{ __('Batal') }}</button>
      </div>
      </form>
  </div>
  