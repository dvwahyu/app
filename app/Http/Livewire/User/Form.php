<?php

namespace App\Http\Livewire\User;

use App\Model\User;
use Livewire\Component;
use Illuminate\Support\Facades\Hash;

class Form extends Component
{
    public $userId = '';
    public $first_name = '';
    public $last_name = '';
    public $username = '';
    public $email = '';
    public $password = '';
    public $password_confirmation = '';


    public function mount($user)
    {
        $this->userId = $user->id;
        $this->first_name = $user->first_name;
        $this->last_name = $user->last_name;
        $this->username = $user->username;
        $this->email = $user->email;
        $this->saveMethod='update';
        
    }

    //realtime validation
    public function updated($field)
    {
        $this->validateOnly($field, [
            'last_name' => ['required', 'string', 'max:255'],
            'first_name' => ['required', 'string', 'max:255'],
            'username' => ['required', 'string', 'max:255', 'unique:users,username,'.$this->userId],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email,'.$this->userId],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }
    
    public function update()
    {
        $this->validate([
                'last_name' => ['required', 'string', 'max:255'],
                'first_name' => ['required', 'string', 'max:255'],
                'username' => ['required', 'string', 'max:255', 'unique:users,username,'.$this->userId],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email,'.$this->userId],
                'password' => ['required', 'string', 'min:8', 'confirmed'],
            ]);
        
        User::find($this->userId)->update([
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'username' => $this->username,
            'email' => $this->email,
            'password' => Hash::make($this->password),
        ]);
        
        $this->redirect('/user');

        session()->flash('message', __('Pengguna berhasil di perbarui'));
    }

    public function render()
    {
        return view('livewire.user.form');
    }


}
