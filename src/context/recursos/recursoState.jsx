import React,{useReducer} from 'react'

import recursoContext from './recursoContext';
import recursoReducer from './recursoReducer';

import { OBTENER_RECURSOS , RECURSOS_CATEGORIA, CATEGORIA_ACTUAL } from '../../types'

const RecursoState = props => {
    const initialState = {
        recursos: [],
        recursoscategoria: null,
        categoria:null
    }

    //dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(recursoReducer, initialState);

    //serie de funciones para el CRUD

    const obtenerRecursos = async () =>{
        const API = await fetch(`http://localhost:4000/api/traerRecursos`)
        const respuesta = await API.json()
           dispatch({
               type:OBTENER_RECURSOS,
               payload:respuesta
           })
    }
    const obtenerRecursosCategoria = async categoriaID => {
        dispatch({
            type:RECURSOS_CATEGORIA,
            payload:categoriaID
        })
    }
    
    const categoriaActual = async categoriaID =>{
        dispatch({
            type:CATEGORIA_ACTUAL,
            payload:categoriaID
        })

    }

    return ( 
        <recursoContext.Provider value={{
            recursos:state.recursos,
            recursoscategoria:state.recursoscategoria,
            categoria:state.categoria,
            obtenerRecursos,
            obtenerRecursosCategoria,
            categoriaActual
        }}>
            {props.children}

        </recursoContext.Provider>
     );
}
 
export default RecursoState;