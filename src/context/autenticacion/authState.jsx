import React,{useReducer} from 'react';

import AuthContext from './authContext'
import AuthReducer from './authReducer'

import clienteAxios from '../../config/axios'
import tokenAuth from '../../config/tokenAuth'

import { OBTENER_USUARIO, LOGIN_ERROR } from '../../types'

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
        try {
            const respuesta = await clienteAxios.get(`http://localhost:4000/api/autenticacion/${usu}/${pass}`)
            debugger
            console.log(respuesta)
            if (Object.keys(respuesta.data).length > 0) {

                let TOKEN = respuesta.data.token
                await localStorage.setItem('token',TOKEN)
                let base64Url = TOKEN.split('.')[1];
                let base64= base64Url.replace('-', '+').replace('_','/');
                const datos = JSON.parse(window.atob(base64))
                // debugger

                dispatch({
                    type: OBTENER_USUARIO,
                    payload:datos.json[0]
                });
                
            }else{
                console.log('usuario incorrecto')
            }

            
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
            // usuAuth
        }}>
            {props.children}

        </AuthContext.Provider>
    )
}

export default AuthState;