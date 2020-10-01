import React from 'react'
import {Link} from 'react-router-dom'

import Logo from '../../img/utep.png'

{/* <Link to={`/detalle-puesto/${puesto.idpuesto}/${puesto.idsector}`} className="btn-detalle">Ver Detalle</Link> */}

const Navegacion = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#"><img src={Logo} width="60" alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Opcion 1 <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Opcion 2</a>
                    </li>
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Opcion 3</a>
                    </li>
                    
                </ul>
                    <div className="container-login">
                        <Link to="/ingresar" className="nav-link active" href="#"> <i className="material-icons">person</i></Link>

                    </div>
                    
               
                
                </div>
            </div>
      </nav>
     );
}
 
export default Navegacion;