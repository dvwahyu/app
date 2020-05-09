<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use RealRashid\SweetAlert\Facades\Alert;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $title  = "Daftar Permission";
        return view('module.permission.index', ['title' => $title]);
    }

    public function create()
    {
        $title  = "Buat permission baru";
        return view('module.permission.create', ['title' => $title]);
    }

    public function edit($id)
    {
        $title  = "Edit permission";
        $permission = Permission::findOrFail($id);
        return view('module.permission.edit', ['title' => $title, 'permission' => $permission]);
    }

}
