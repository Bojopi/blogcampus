import React,{useReducer} from 'react';

import AuthContext from './authContext'
import AuthReducer from './authReducer'

import clienteAxios from '../../config/axios'

// import tokenAuth from '../../config/tokenAuth'

import { OBTENER_USUARIO, LOGIN_ERROR } from '../../types'

const AuthState = props => {
    const initialState = {
        token:localStorage.getItem('token'),
        autenticado:null,
        usuario:null,
        mensaje:null,
        errorlogin:false
    }

    const [state ,dispatch] = useReducer(AuthReducer,initialState);

    const usuarioAutenticado = async (usu,pass) =>{
        try {
            const respuesta = await clienteAxios.get(`http://localhost:4000/api/autenticacion/${usu}/${pass}`)
            console.log(respuesta)
            if (Object.keys(respuesta.data).length != 0) {

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
                await localStorage.removeItem('token');
                console.log('usuario incorrecto')
                dispatch({
                    type:LOGIN_ERROR,
                    payload:true
                })
            }

            
        } catch (error) {
            dispatch({
                type:LOGIN_ERROR
            })

        }
    }

    return(
        <AuthContext.Provider value={{
            token:state.token,
            autenticado:state.autenticado,
            usuario:state.usuario,
            mensaje:state.mensaje,
            errorlogin:state.errorlogin,
            usuarioAutenticado,
        }}>
            {props.children}

        </AuthContext.Provider>
    )
}

export default AuthState;