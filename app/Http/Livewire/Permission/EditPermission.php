<?php

namespace App\Http\Livewire\Permission;

use Livewire\Component;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Permission;
use RealRashid\SweetAlert\Facades\Alert;

class EditPermission extends Component
{

    public $permissionId;
    public $name;
    public $guard_name;

    public function mount($permission)
    {
        $this->permissionId = $permission->id;
        $this->name = $permission->name;
        $this->guard_name = $permission->guard_name;
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
        
        $permission = Permission::findOrFail($this->permissionId);
        $permission->name   = $this->name;
        $permission->guard_name    = Str::slug($this->name, '-');
        $permission->save();
        
        $this->redirect('/permission');
        
        toast(__('Permission berhasil diperbarui'),'success');

    }

    public function render()
    {
        return view('livewire.permission.edit-permission');
    }
}
