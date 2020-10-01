import React,{Fragment} from 'react';
import Header from '../layout/Header';
import Logo from '../../img/campus.png'
import Facebook from '../../img/facebook.png'
import Twitter from '../../img/twitter.png'
import Youtube from '../../img/youtube.png'
import Instagram from '../../img/instagram.png'
import Footer from '../layout/Footer';
const Ingresar = () => {
    return ( 
        <Fragment>
            <Header />
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
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Usuario:</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Contraseña:</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
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

        <Footer/>
        </Fragment>
     );
}
 
export default Ingresar;