<?php

namespace App\Http\Livewire\User;

use App\Model\User;
use Livewire\Component;
use Illuminate\Support\Facades\Hash;
use RealRashid\SweetAlert\Facades\Alert;

class Create extends Component
{
    public $first_name = '';
    public $last_name = '';
    public $username = '';
    public $email = '';
    public $password = '';
    public $password_confirmation = '';

    //realtime validation
    public function updated($field)
    {
        $this->validateOnly($field, [
            'first_name' => ['required', 'string', 'max:50'],
            'last_name' => ['required', 'string', 'max:50'],
            'username' => ['required', 'string', 'max:190', 'unique:users'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }
    
    public function submit()
    {
        $this->validate([
                'first_name' => ['required', 'string', 'max:50'],
                'last_name' => ['required', 'string', 'max:50'],
                'username' => ['required', 'string', 'max:190', 'unique:users'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
                'password' => ['required', 'string', 'min:8', 'confirmed'],
            ]);
        
        User::create([
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'username' => $this->username,
            'email' => $this->email,
            'password' => Hash::make($this->password),
        ]);
        
        $this->redirect('/user');
        
        toast(__('Pengguna berhasil ditambahkan'),'success');

        //session()->flash('message', __('Pengguna berhasil ditambahkan'));
    }

    public function render()
    {
        return view('livewire.user.create');
    }
}
