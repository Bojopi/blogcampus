import React from 'react'
import {Link} from 'react-router-dom'

const Recurso = ({recurso}) => {
    return ( 
        <div className="card recur">
            <div className="card-header"></div>
            <div className="card-body">
                <img src={`http://localhost:4000/img/recursos-logos/${recurso.logo}.png`} alt=""/>
                <div className="parte-atras">
                    <p><u>{recurso.titulo}</u></p>
                    <br/>
                    <p>{recurso.descripcion}</p>
                    <Link to={`/detalle-recurso-tic/${recurso.id}`} className="btn btn-info">Ver mas</Link>
                </div>
            </div>
        </div>
     );
}
 
export default Recurso;