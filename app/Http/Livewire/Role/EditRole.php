<?php

namespace App\Http\Livewire\Role;

use Livewire\Component;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use RealRashid\SweetAlert\Facades\Alert;

class EditRole extends Component
{

    public $roleId;
    public $name;
    public $guard_name;

    public function mount($role)
    {
        $this->roleId = $role->id;
        $this->name = $role->name;
        $this->guard_name = $role->guard_name;
        $this->saveMethod='update';
        
    }

    //realtime validation
    public function updated($field)
    {
        $this->validateOnly($field, [
            'name' => ['required', 'string', 'max:50'],
        ]);
    }

    public function update()
    {
        $this->validate([
                'name' => ['required', 'string', 'max:50'],
            ]);
        
        $role = Role::findOrFail($this->roleId);
        $role->name   = $this->name;
        $role->guard_name    = Str::slug($this->name, '-');
        $role->save();
        
        $this->redirect('/role');
        
        toast(__('Role berhasil diperbarui'),'success');

    }

    public function render()
    {
        return view('livewire.role.edit-role');
    }
}
