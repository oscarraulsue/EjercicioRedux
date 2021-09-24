import React from 'react'
import { useForm } from '../hook/useForm'
import uuid from 'react-uuid'
import { useDispatch } from 'react-redux'
import { AddCitas } from '../action/ActionCitas'


const AgregarCitas = () => {
    const [ formValue, handleInputChange, reset ] = useForm({
        nombre: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })
    const {nombre, fecha, hora, sintomas} = formValue;
    
    const dispach = useDispatch();
    const nuevaCita= (cita) => {dispach(AddCitas(cita))}

    const handleSubmit = (e) => {
        e.preventDefault();

        reset();

        nuevaCita({
            id:uuid(),
            nombre,
            fecha,
            hora,
            sintomas,
        })
    }
    
    return (
        <div className="card mt-5">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <h1> Agregar Citas</h1>
                    <hr />

                    <div className="orm-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre</label>
                        <div className="mb-4 mb-lg-0">
                            <input
                                type="text"
                                name="nombre"
                                value={nombre}
                                className="form-control"
                                placeholder="Tu nombre"
                                autoComplete="off"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="form-group row mt-3">
                        <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                        <div className="form-group col-sm-8 col-lg-4">
                            <input
                                type="date"
                                name="fecha"
                                value={fecha}
                                className="form-control"
                                autoComplete="off"
                                onChange={handleInputChange}
                            />
                        </div>

                        <label className="col-sm-4 col-lg-2 col-form-label">hora</label>
                        <div className="form-group col-sm-8 col-lg-4">
                            <input
                                type="time"
                                name="hora"
                                value={hora}
                                className="form-control"
                                autoComplete="off"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                        <div className="form-group">
                            <textarea
                                name="sintomas"
                                className="form-control"
                                onChange={handleInputChange}
                                value={sintomas}
                                autoComplete="off">
                                 </textarea>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Guardar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AgregarCitas