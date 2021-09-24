import { createStore, combineReducers } from "redux";
import CitasReducer from '../reducers/CitasReducer'
import {obtenerStateStorage, guardarStateStorage} from '../LocalStorage'

const reducers = combineReducers({
    citas: CitasReducer
})
const storageState = obtenerStateStorage()

export const store = createStore(
    reducers,
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    store.subscribe(()=>{
        guardarStateStorage({
          citas: store.getState().citas
        })
      })
