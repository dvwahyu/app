<?php

namespace App\Http\Controllers;

use App\Model\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $title  = 'Daftar Pengguna';
        return view('module.user.index', ['title' => $title]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $title  = "Buat pengguna baru";
        return view('module.user.create', ['title' => $title]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $title  = "Edit Pengguna";
        $user   = User::find($id);
        return view('module.user.edit', [
                'user'  => $user,
                'title' => $title
            ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
    
        // $this->validate($request,[
        //     'last_name' => ['required', 'string', 'max:255'],
        //     'first_name' => ['required', 'string', 'max:255'],
        //     'username' => ['required', 'string', 'max:255', 'unique:users,username,'.$id],
        //     'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email,'.$id],
        //     'password' => ['required', 'string', 'min:8', 'confirmed'],
        // ]);
        
        // $user = User::find($id);
        // $user->first_name = $request->first_name;
        // $user->last_name = $request->last_name;
        // $user->username = $request->username;
        // $user->email = $request->email;
        // $user->password = Hash::make($request->password);
        // $user->save();

        // return redirect()->route('user.index')->with('success','User berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
