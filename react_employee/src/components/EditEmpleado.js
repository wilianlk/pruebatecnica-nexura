import axios from "axios";
import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";

const endpoint = 'http://localhost:8000/api/empleado/'

const EditEmpleado = () => {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [sexo, setSexo] = useState('')
    const [area_id, setAreaId] = useState('')
    const [boletin, setBoletin] = useState(0)
    const [descripcion, setDescripcion] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            nombre: nombre,
            email: email,
            sexo: sexo,
            area_id: area_id,
            boletin: boletin,
            descripcion: descripcion
        })
        navigate('/')
    }

    useEffect(() => {
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setDescripcion(response.data.descripcion)
            // setPrice(response.data.price)
            // setStock(response.data.stock)
        }
        getProductById()
    }, [])

    return (
        <div>
            <h3>Edit Product</h3>
            <form onSubmit={update}>

                <div className='row mb-3'>
                    <label htmlFor='name' className='col-sm-2 col-form-label'>Nombre Completo</label>
                    <div className="col-sm-10">
                        <input
                            value={nombre}
                            name='name'
                            onChange={(e) => setNombre(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                </div>

                <div className='row mb-3'>
                    <label htmlFor='email' className='col-sm-2 col-form-label'>Correo Electronico</label>
                    <div className="col-sm-10">
                        <input
                            value={email}
                            name='email'
                            onChange={(e) => setEmail(e.target.value)}
                            type='email'
                            className='form-control'
                        />
                    </div>
                </div>

                <div className='row mb-3'>
                    <label htmlFor='email' className='col-sm-2 col-form-label'>Sexo</label>

                    <div className="row-cols-sm-3">
                        <div className="form-check">
                            <label className='radio'>Masculino</label>
                            <input type='radio' name='gender' value='F' onChange={(e) => setSexo(e.target.value)}/>
                        </div>

                        <div className="form-check">
                            <label>Femenino</label>
                            <input type='radio' name='gender' value='M' onChange={(e) => setSexo(e.target.value)}/>
                        </div>
                    </div>
                </div>

                <div className='row mb-3'>
                    <label htmlFor='area' className='col-sm-2 col-form-label'>Area *</label>
                    <div className="col-sm-10">
                        <input
                            value={area_id}
                            onChange={(e) => setAreaId(e.target.value)}
                            className='form-control'>
                        </input>
                    </div>
                </div>

                <div className='row mb-3'>
                    <label htmlFor='descripcion' className='col-sm-2 col-form-label'>Descripcion *</label>
                    <div className="col-sm-10">
                    <textarea
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        className='form-control'>
                    </textarea>
                    </div>
                </div>

                <div className='row mb-5'>
                    <label htmlFor='roles' className='col-sm-2 col-form-label'>Roles *</label>
                    <div className="row-cols-3">
                        <div className="form-check">
                            ss
                        </div>
                        <div className="form-check">
                            ss
                        </div>
                        <div className="form-check">
                            ss
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-3 offset-sm-2">
                        <button type='submit' className='btn btn-primary'>Actualizar Empleado</button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default EditEmpleado
