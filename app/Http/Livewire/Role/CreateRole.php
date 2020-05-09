<?php

namespace App\Http\Livewire\Role;

use Livewire\Component;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use RealRashid\SweetAlert\Facades\Alert;

class CreateRole extends Component
{

    public $name;
    public $guard_name;
    
    //realtime validation
    public function updated($field)
    {
        $this->validateOnly($field, [
            'name' => ['required', 'string', 'max:50'],
        ]);
    }
    
    public function submit()
    {
        $this->validate([
                'name' => ['required', 'string', 'max:50'],
            ]);
        
        $role = new Role();
        $role->name   = $this->name;
        $role->guard_name    = Str::slug($this->name, '-');
        $role->save();
        
        $this->redirect('/role');
        
        toast(__('Role berhasil ditambahkan'),'success');

    }


    public function render()
    {
        return view('livewire.role.create-role');
    }
}
