<?php

namespace App\Http\Livewire\User;

use Avatar;
use Storage;
use App\Model\User;
use Livewire\Component;
use Illuminate\Support\Facades\Hash;
use RealRashid\SweetAlert\Facades\Alert;

class EditForm extends Component
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
    

        $user = User::find($this->userId);
        $user->first_name   = $this->first_name;
        $user->last_name    = $this->last_name;
        $user->username     = $this->username;
        $user->email        = $this->email;
        $user->password     = Hash::make($this->password);
        
        //update avatar
        $path = public_path().'/storage/avatars/';

          //code for remove old file
          if($user->avatar != ''  && $user->avatar != null){
               $file_old = $path.$user->avatar;
               unlink($file_old);
          }
        //file name avatar
        $pngName = $this->first_name.' ' .$this->last_name; 
        $avatar = Avatar::create(strtoupper($pngName))->setFontFamily('Laravolt')->getImageObject()->encode('png');
        $fileName = $this->username.'_avatar.png';
        $user->avatar = $fileName;
        Storage::put('public/avatars/'.$fileName, (string) $avatar);
        $user->save();
        
        $this->redirect('/user');

        toast(__('Pengguna berhasil diperbaruai'),'success');
    }

    public function render()
    {
        return view('livewire.user.edit-form');
    }
}
