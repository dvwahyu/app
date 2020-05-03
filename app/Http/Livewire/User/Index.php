<?php

namespace App\Http\Livewire\User;

use App\Model\User;
use Livewire\Component;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination;

    public $search;
    public $perPage = 5;
    public $sortField;
    public $sortAsc = true;
    //protected $updateQueryString = ['search'];

    public function updatingSearch()
    {
        $this->resetPage();
    }

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
        $users = User::search($this->search)
                    ->orderBy('first_name', $this->sortAsc ? 'asc' : 'desc')
                    ->orderBy('username', $this->sortAsc ? 'asc' : 'desc')
                    ->paginate($this->perPage);

        return view('livewire.user.index', ['users' => $users]);
    }

    public function destroy($id)
    {   
        $user = User::find($id);
        $user->delete();

        $this->emit('alert', ['type' => 'success', 'message' => __('Pengguna telah dihapus !')]);
      
    }
}
