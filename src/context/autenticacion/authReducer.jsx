import { OBTENER_USUARIO, LOGIN_ERROR } from '../../types'

export default (state, action) => {
    switch(action.type){
        
        case LOGIN_ERROR:
            return{
                ...state,               
            }
        case OBTENER_USUARIO:
            // localStorage.setItem('token',action.payload.token);
            debugger
            return{
                ...state,
                usuario:action.payload
            }
        default:
            return state;
    }
}