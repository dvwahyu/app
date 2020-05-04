<?php

namespace App\Http\Livewire\User;

use Avatar;
use Storage;
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
        
        $user = new User();
        $user->first_name   = $this->first_name;
        $user->last_name    = $this->last_name;
        $user->username     = $this->username;
        $user->email        = $this->email;
        $user->password     = Hash::make($this->password);

        //file name avatar
        $pngName = $this->first_name.' ' .$this->last_name; 
        $avatar = Avatar::create(strtoupper($pngName))->setFontFamily('Laravolt')->getImageObject()->encode('png');
        $fileName = $this->username.'_avatar.png';
        $user->avatar = $fileName;
        Storage::put('public/avatars/'.$fileName, (string) $avatar);
        $user->save();
        
        $this->redirect('/user');
        
        toast(__('Pengguna berhasil ditambahkan'),'success');

    }

    public function render()
    {
        return view('livewire.user.create');
    }
}
