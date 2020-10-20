import React,{useReducer} from 'react';

import AuthContext from './authContext'
import AuthReducer from './authReducer'

import clienteAxios from '../../config/axios'
import tokenAuth from '../../config/tokenAuth'

import { REGISTRO_ERROR, REGISTRO_EXITOSO, OBTENER_USUARIO, LOGIN_EXITOSO, LOGIN_ERROR, CERRAR_SESION } from '../../types'

const AuthState = props => {
    const initialState = {
        token:localStorage.getItem('token'),
        autenticado:null,
        usuario:null,
        mensaje:null
    }

    const [state ,dispatch] = useReducer(AuthReducer,initialState);

    //las funciones

    const usuAuth = async () =>{
        const token = localStorage.getItem('token')
        if (token) {
            tokenAuth(token)
        }
    }

    const usuarioAutenticado = async (usu,pass) =>{
        // const token = localStorage.getItem('token');
        // if (token) {
        //     // TODO: funcion para enviar el token por headers
        //     tokenAuth(token)
        // }
        try {
            const respuesta = await clienteAxios.get(`/api/autenticacion/${usu}/${pass}`)
            // debugger
            console.log(respuesta)

            dispatch({
                type: OBTENER_USUARIO,
                payload:respuesta.data
            });
            usuAuth();
        } catch (error) {
            dispatch({
                type:LOGIN_ERROR
            })

        }
    }

    // const iniciarSession = async datos =>{
    //     try {
    //         const respuesta = await clienteAxios.get(`/api/autenticacion/${usu}/${pass}`)
    //         debugger
    //         console.log(respuesta)

    //         dispatch({
    //             type: OBTENER_USUARIO,
    //             payload:respuesta.data.datos
    //         })
    //     } catch (error) {
    //         dispatch({
    //             type:LOGIN_ERROR
    //         })

    //     }
    // }

    return(
        <AuthContext.Provider value={{
            token:state.token,
            autenticado:state.autenticado,
            usuario:state.usuario,
            mensaje:state.mensaje,
            usuarioAutenticado,
            usuAuth
        }}>
            {props.children}

        </AuthContext.Provider>
    )
}

export default AuthState;