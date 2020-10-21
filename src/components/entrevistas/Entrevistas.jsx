import React,{Fragment} from 'react'
import Header from '../layout/Header';
import Jumbotron from '../layout/Jumbotron';
import Navegacion from '../layout/Navegacion';

import foto from '../../img/se.jpg'
import fotob from '../../img/b.jpg'
import Footer from '../layout/Footer';

const Entrevistas = () => {
    return ( 
        <Fragment>
            <Header/>
            <Jumbotron/>
            <Navegacion/>
            <div className="container recu">
                <h2>Entrevistas realizadas</h2>
                <hr/>
                <div className="container-entrevistas">
                    <div className="card sombra">
                        <div className="card-body">
                            <figure>
                                <img src={foto} alt=""/>
                            </figure>
                            <div className="palabras">
                                <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, accusamus. "</p>
                                <p className="nombre-entrevista"><small> <i><b>- Daniel Gorianz Ferrufino</b> </i> </small> </p>
                            </div>
                        </div>
                        <div className="card-footer">
                            {/* <button className="btn btn-primary btn-entrevista">Ver mas...</button> */}
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <Footer/>
        </Fragment>
     );
}
 
export default Entrevistas;