import React,{Fragment} from 'react'
import Jumbotron from '../layout/Jumbotron';
import Navegacion from '../layout/Navegacion';

import foto from '../../img/se.jpg'

const Entrevistas = () => {
    return ( 
        <Fragment>
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
                            
                        </div>
                    </div>  
                </div>
            </div>
        </Fragment>
     );
}
 
export default Entrevistas;