import React from 'react'
import {Link, NavLink} from 'react-router-dom'

import Logo from '../../img/utep.png'

import '../css/sidebar.css'


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
                    <NavLink activeStyle={{color:'red'}}  className="nav-link" exact to="/" >Blog<span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item active">
                    <NavLink activeStyle={{color:'red'}} className="nav-link" exact to="/entrevistas">Entrevistas - Experiencias</NavLink>
                    </li>
                    <li className="nav-item active">
                    <NavLink activeStyle={{color:'red'}} className="nav-link" exact to="/recursos">Recursos TICs</NavLink>
                    </li>
                    {/* <li className="nav-item active">
                    <NavLink activeStyle={{color:'red'}} className="nav-link" exact to="/">Recomendaciones</NavLink>
                    </li> */}
                    
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