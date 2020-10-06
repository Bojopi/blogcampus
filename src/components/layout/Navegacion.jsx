import React from 'react'
import {Link} from 'react-router-dom'

import Logo from '../../img/utep.png'


const Navegacion = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to='/'><img src={Logo} width="60" alt=""/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                    <Link className="nav-link" to="/" >Opcion 1 <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                    <Link className="nav-link" to="/">Opcion 2</Link>
                    </li>
                    <li className="nav-item active">
                    <Link className="nav-link" to="/">Opcion 3</Link>
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