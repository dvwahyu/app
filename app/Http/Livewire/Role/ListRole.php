<?php

namespace App\Http\Livewire\Role;

use Livewire\Component;
use Livewire\WithPagination;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use RealRashid\SweetAlert\Facades\Alert;

class ListRole extends Component
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

    public function render()
    {
        $roles = Role::where('name', 'like', '%'.$this->search.'%')
                ->orWhere('guard_name', 'like', '%'.$this->search.'%')
                ->orderBy('name', $this->sortAsc ? 'asc' : 'desc')
                    ->orderBy('guard_name', $this->sortAsc ? 'asc' : 'desc')
                    ->paginate($this->perPage);
        return view('livewire.role.list-role', ['roles' => $roles]);
    }

    public function destroy($id)
    {   
        $role = Role::find($id);

       if ($role->delete()) {
            $this->redirect('/role');
            toast(__('Role telah dihapus'),'success');

       }
      
    }

}
