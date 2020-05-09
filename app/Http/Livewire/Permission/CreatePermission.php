<?php

namespace App\Http\Livewire\Permission;

use Livewire\Component;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use RealRashid\SweetAlert\Facades\Alert;

class CreatePermission extends Component
{
    public $name;
    public $guard_name;

    public function submit()
    {
        $this->validate([
                'name' => ['required', 'string', 'max:50'],
            ]);
        
        $role = new Permission();
        $role->name   = $this->name;
        $role->guard_name    = Str::slug($this->name, '-');
        $role->save();
        
        $this->redirect('/permission');
        
        toast(__('Permission berhasil ditambahkan'),'success');

    }

    public function render()
    {
        return view('livewire.permission.create-permission');
    }
}
