import { OBTENER_USUARIO, LOGIN_ERROR } from '../../types'

export default (state, action) => {
    switch(action.type){
        
        case LOGIN_ERROR:
            return{
                ...state,
                
            }
        case OBTENER_USUARIO:
            localStorage.setItem('token',action.payload.token);
            return{
                ...state,
                usuario:action.payload.datos
            }
        default:
            return state;
    }
}