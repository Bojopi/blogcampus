import React from 'react';

import logo from '../../img/user.PNG'

const Comentario = ({comentario}) => {
    return ( 
        <div className="comentario">
            <img src={logo} width='50' alt=""/>
            <b>{comentario.autor}</b>
            <small>{comentario.fecha}</small>
            <small>{comentario.hora}</small>
            <p>{comentario.comentario}</p>
        </div>
     );
}
 
export default Comentario;