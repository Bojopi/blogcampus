import { OBTENER_RECURSOS ,RECURSOS_CATEGORIA, CATEGORIA_ACTUAL} from '../../types'

export default (state, action) => {
    switch(action.type){
        // case FORMULARIO_PROYECTO:
        //     return {
        //         ...state,
        //         formulario: true
        //     }
        case RECURSOS_CATEGORIA:
            return{
                ...state,
                recursoscategoria: state.recursos.filter( recurso => {
                    return recurso.id_categoria === action.payload
                })
                
                // puestossector: action.payload
            }
        case OBTENER_RECURSOS:
            return{
                ...state,
                recursos:action.payload
            }
        case CATEGORIA_ACTUAL:
            return{
                ...state,
                categoria:action.payload
            }
        // case OBTENER_PUESTO:
        //     return{
        //         ...state,
        //         puesto:action.payload
        //     }
            
        default:
            return state;
    }
}