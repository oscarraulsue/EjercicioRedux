import {types} from '../type/types'

export const AddCitas = (cita) => {
    return{
        type: types.agregar,
        payload: cita
    }
}

export const Borrar = (id) => {
    return{
        type: types.borrar,
        payload: id
    }
}