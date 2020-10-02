import React,{useReducer} from 'react'

import articuloContext from './articuloContext';
import articuloReducer from './articuloReducer';

import { FORMULARIO_PROYECTO, PUESTOS_SECTOR, OBTENER_PUESTOS, OBTENER_PUESTO } from '../../types'

const ArticuloState = props => {
    const initialState = {
        articulos: []
    }

    //dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(articuloReducer, initialState);

    //serie de funciones para el CRUD

    const obtenerArticulos = async () =>{
        // const API = await fetch(`http://localhost:4000/api/obtenerPuestos`)
        // const respuesta = await API.json()
        //    dispatch({
        //        type:OBTENER_PUESTOS,
        //        payload:respuesta
        //    })
    }
    return ( 
        <articuloContext.Provider value={{
            articulos:state.articulos
        }}>

        </articuloContext.Provider>
     );
}
 
export default ArticuloState;