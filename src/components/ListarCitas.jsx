import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Borrar} from '../action/ActionCitas'


export default function ListarCitas() {
    const {citas} = useSelector(state => state.citas)
    const dispach = useDispatch()
    const handleDelete = (id) => {
        dispach(Borrar(id))
    }
    return (
        <div className="card mt-5">
        <div className="card-body">
            <h2 className="card-title text-center">Agenda</h2>
            <div className="lista-citas">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Hora</th>
                            <th scope="col">Fractura</th>
                            <th scope="col">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        
        citas.map(cita =>{
            return(
                <tr key={cita.id}>
                    <td>{cita.nombre}</td>
                    <td>{cita.fecha}</td>
                    <td>{cita.hora}</td>
                    <td>{cita.sintomas}</td>
                    <td><button 
                    onClick={()=>handleDelete(cita.id)}
                    className="btn btn-danger">
                           Borrar &times;
                      </button>
                            </td>
                        </tr>
            )
        })
                    }
                    </tbody>
                </table>
            </div>
        </div >
    </div >
    )
}
