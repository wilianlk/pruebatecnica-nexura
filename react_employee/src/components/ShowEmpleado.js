import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api';

const ShowEmpleado = () => {

    const [empleado, setEmpleado] = useState([])
    useEffect(() => {
        getAllEmpleado()
    }, [])

    const getAllEmpleado = async () => {
        const response = await axios.get(`${endpoint}/empleados`)
        setEmpleado(response.data)

        console.log(response.data)

    }

    const deleteEmpleado = async (id) => {
        axios.delete(`${endpoint}/empleado/${id}`)
        getAllEmpleado()
    }

    return (
        <div>
            <div className='d-grid gap-2'>
                <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
            </div>

            <table className='table table-striped'>
                <thead className=''>
                <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Sexo</th>
                    <th>Area</th>
                    <th>Boletin</th>
                    <th>Modificar</th>
                    <th>Eliminar</th>
                </tr>
                </thead>
                <tbody>
                {empleado.map((empleados) => (
                    <tr key={empleados.id}>
                        <td> {empleados.nombre} </td>
                        <td> {empleados.email} </td>
                        <td> {empleados.sexo === 'M' ? 'Masculino' : empleados.sexo === 'F' ? 'Femenino' : ''} </td>
                        <td> {empleados.nombre_area} </td>
                        <td> {empleados.boletin} </td>
                        <td>
                            <Link to={`/edit/${empleados.id}`} className='btn btn-warning'>Edit</Link>
                        </td>
                        <td>
                            <button onClick={() => deleteEmpleado(empleados.id)} className='btn btn-danger'>Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowEmpleado