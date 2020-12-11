import React,{Fragment,useContext,useState} from 'react';
import Logo from '../../img/campus.png'
import Facebook from '../../img/facebook.png'
import Twitter from '../../img/twitter.png'
import Youtube from '../../img/youtube.png'
import Instagram from '../../img/instagram.png'

import authContext from '../../context/autenticacion/authContext'
import Error from '../layout/Error'

import '../css/login.css'
const Ingresar = (props) => {

    const AuthContext = useContext(authContext);
    const { errorlogin, usuarioAutenticado } = AuthContext;

    const [user, guardarUser] = useState({
        usuario:'',
        pass:''
    })

    const { usuario,pass } =user

    const onChange = e =>{
        guardarUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit = async e =>{
        e.preventDefault();
        await usuarioAutenticado(usuario,pass)
        
            props.history.push('/');
        

    }

    return ( 
        <Fragment>
            <div className="jumbotron jumbotron-fluid">
            <div className="container jumbo">
                <div className="container-logo">
                    <img className="logo" src={Logo} alt=""/>
                    <h4>Blog de noticias para el campus virtual</h4>
                    <div className="card log">
                        <div className="card-header">
                            Ingresar
                        </div>
                        <div className="card-body">
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Usuario:</label>
                                <input type="text" name="usuario" value={usuario} onChange={onChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Contraseña:</label>
                                <input type="password" name="pass" value={pass} onChange={onChange} className="form-control" id="exampleInputPassword1"/>
                            </div>
                            
                            
                            <button type="submit" className="btn btn-success btn-block">Ingresar</button>
                        </form>
                        </div>
                    </div>
                </div>
                <div className="container-redes">
                    <div className="item2">

                    <h2 className="titulo-redes">Visitanos En</h2>
                    </div>
                    <div className="item">
                    <img className="" src={Facebook} alt=""/>   
                        
                    </div>
                    <div className="item">
                    <img className="" src={Twitter} alt=""/>

                    </div>
                    <div className="item">
                    <img className="" src={Youtube} alt=""/>

                    </div>
                    <div className="item">
                    <img className="" src={Instagram} alt=""/>

                    </div>
                </div>
            </div>
        </div>
        </Fragment>
     );
}
 
export default Ingresar;