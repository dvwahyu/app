<?php

namespace App\Http\Livewire\Permission;

use Livewire\Component;
use Livewire\WithPagination;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use RealRashid\SweetAlert\Facades\Alert;

class ListPermission extends Component
{
    use WithPagination;
    
    public $search;
    public $perPage = 10;
    public $sortField;
    public $sortAsc = true;

    public function sortBy($field)
    {
        if ($this->sortField === $field) {
            $this->sortAsc = ! $this->sortAsc;
        } else {
            $this->sortAsc = false;
        }

        $this->sortField = $field;
    }

    public function destroy($id)
    {   
        $permission = Permission::find($id);

       if ($permission->delete()) {
            $this->redirect('/permission');
            toast(__('Permissin telah dihapus'),'success');

       }
      
    }

    public function render()
    {
        $permissions = Permission::where('name', 'like', '%'.$this->search.'%')
                        ->orWhere('guard_name', 'like', '%'.$this->search.'%')
                        ->orderBy('name', $this->sortAsc ? 'asc' : 'desc')
                        ->orderBy('guard_name', $this->sortAsc ? 'asc' : 'desc')
                        ->paginate($this->perPage);

        return view('livewire.permission.list-permission',['permissions' => $permissions]);
    }
}
