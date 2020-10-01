import React,{Fragment} from 'react'

import logo from '../../img/campus-virtual.png';

const Noticia = ({noticia}) => {
    return ( 
        <Fragment>
            <h4>{noticia.titulo}</h4>
            <div className="info-noticia">
                <p>{noticia.autor} </p>
                <p> {noticia.fecha} </p>
            </div>
            <div className="card">
                <div className="card-body">
                    <img src={logo} alt=""/>
                </div>
            </div>
            <p className="intro">{noticia.introduccion}</p>
            <button className="btn btn-info">Leer mas</button>
            <hr/>
        </Fragment>
     );
}
 
export default Noticia;