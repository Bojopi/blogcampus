import React,{Fragment} from 'react'

import {Link} from 'react-router-dom'

// import logo from '../../img/campus-virtual.png';

const Noticia = ({noticia}) => {
    debugger
    return ( 
        <Fragment>
            <h4 className="titulo-noticia">{noticia.titulo}</h4>
            <div className="info-noticia">
                <p>{noticia.Autor} </p>
                <p> {noticia.fecha.substr(0,10)} </p>
            </div>
            <div className="card">
                <div className="card-body">
                    <img src={`http://localhost:4000/img/${noticia.img}.jpg`} alt=""/>
                </div>
            </div>
            <p className="intro">{noticia.introduccion}</p>
            <Link className="btn btn-info" to={`/detalle-articulo/${noticia.id}`}>Leer mas</Link>
            <hr/>
        </Fragment>
     );
}
 
export default Noticia;