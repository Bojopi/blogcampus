import { FORMULARIO_PROYECTO, PUESTOS_SECTOR, OBTENER_PUESTOS, OBTENER_PUESTO } from '../../types'

export default (state, action) => {
    switch(action.type){
        case FORMULARIO_PROYECTO:
            return {
                ...state,
                formulario: true
            }
        case PUESTOS_SECTOR:
            return{
                ...state,
                puestossector: state.puestos.filter( puesto => {
                    return puesto.idsector === action.payload
                })
                // puestossector: action.payload
            }
        case OBTENER_PUESTOS:
            return{
                ...state,
                puestos:action.payload
            }
        case OBTENER_PUESTO:
            return{
                ...state,
                puesto:action.payload
            }
            
        default:
            return state;
    }
}