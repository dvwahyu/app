<?php

namespace App\Http\Livewire\User;

use App\Model\User;
use Livewire\Component;

class Index extends Component
{
    public function render()
    {
        $users = User::get();
        return view('livewire.user.index', ['users' => $users]);
    }
}
