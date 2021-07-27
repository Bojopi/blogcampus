import React,{useReducer} from 'react'

import recursoContext from './recursoContext';
import recursoReducer from './recursoReducer';

import { OBTENER_RECURSOS , RECURSOS_CATEGORIA, CATEGORIA_ACTUAL } from '../../types'
import axios from 'axios'

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
        const API = await fetch(`https://blog-campus-api-2021.herokuapp.com/api/traerRecursos`)
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
    const registrarRecurso = async recurso =>{
        await axios.post('https://blog-campus-api-2021.herokuapp.com/api/registrarVenta', {
            // fecha_venta: fecha,
            // precio: parseInt(total),
            // tipo_pago:'Al Contado',
            // matricula:'LGD-2569',
            // id_vendedor:1,
            // id_cliente:parseInt(venta.id_cliente),
            // id_vehiculo:parseInt(venta.id_vehiculo)
        })
        .then(function (response) {
            if(response.status===200){
                alert('Venta Registrada')
                
            }else{
                
                alert('Error al insertar')
            }
            // console.log(response.status);
        })
        // dispatch({
        //     type:CATEGORIA_ACTUAL
        // })

    }

    return ( 
        <recursoContext.Provider value={{
            recursos:state.recursos,
            recursoscategoria:state.recursoscategoria,
            categoria:state.categoria,
            obtenerRecursos,
            obtenerRecursosCategoria,
            categoriaActual,
            registrarRecurso
        }}>
            {props.children}

        </recursoContext.Provider>
     );
}
 
export default RecursoState;