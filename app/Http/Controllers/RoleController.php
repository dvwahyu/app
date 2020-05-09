<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use RealRashid\SweetAlert\Facades\Alert;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $title  = __('Daftar Role');
        return view('module.roles.index', ['title' => $title]);
    }

    public function create()
    {
        $title  = "Buat role baru";
        return view('module.roles.create', ['title' => $title]);
    }

    public function edit($id)
    {
        $title  = "Edit role baru";
        $role   = Role::findOrFail($id);
        return view('module.roles.edit', ['title' => $title, 'role' => $role]);
    }
}
