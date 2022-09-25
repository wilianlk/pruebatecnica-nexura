<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Empleado;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EmpleadoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $empleados = Empleado::select('empleado.*','areas.nombre AS nombre_area')
            ->join('areas', 'areas.id', '=', 'empleado.area_id')
            ->get();

        return $empleados;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $empleados = new Empleado();
        $empleados->nombre = $request->nombre;
        $empleados->email = $request->email;
        $empleados->sexo = $request->sexo;
        $empleados->area_id = $request->area_id;
        $empleados->boletin = $request->boletin;
        $empleados->descripcion = $request->descripcion;
        $empleados->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $empleados = Empleado::find($id);
        return $empleados;
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
        $empleados = Empleado::findOrFail($request->id);
        $empleados->nombre = $request->nombre;
        $empleados->email = $request->email;
        $empleados->sexo = $request->sexo;
        $empleados->area_id = $request->area_id;
        $empleados->boletin = $request->boletin;
        $empleados->descripcion = $request->descripcion;
        $empleados->save();
        return $empleados;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Empleado::destroy($id);
    }
}
