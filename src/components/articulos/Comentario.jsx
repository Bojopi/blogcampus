import React from 'react';

import logo from '../../img/user.PNG'

const Comentario = ({comentario}) => {
    return ( 
        <div className="comentario">
            <img src={logo} width='50' alt=""/>
            <div className="info">
                <b>{comentario.autor}</b>
                <small><b>{comentario.fecha.substr(0,10)}</b>  / <span> {comentario.hora}</span></small>
                

            </div>
            <p>{comentario.comentario}</p>
            
        </div>
     );
}
 
export default Comentario;