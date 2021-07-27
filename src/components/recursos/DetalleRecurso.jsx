import React,{Fragment,useState,useEffect} from 'react';
import Jumbotron from '../layout/Jumbotron';
import Navegacion from '../layout/Navegacion';

import '../css/drecurso.css'

const DetalleRecurso = ({match}) => {

    const [recurso,guardarRecurso]=useState({})
    useEffect(() => {
        const cargarRecurso = async () =>{
            const API = await fetch(`https://blog-campus-api-2021.herokuapp.com/api/traerRecurso/${parseInt(match.params.id)}`);
            const respuesta = await API.json();
            guardarRecurso(respuesta[0])

        }
        cargarRecurso();
    }, [match])

    const {titulo,descripcion,logo,video,enlace}=recurso;

    return ( 
        <Fragment>
            <Jumbotron/>
            <Navegacion/>
            <main>
                <div className="container recu">
                    <h2>Recurso</h2>
                    <div className="container-recurso">
                        <div className="info-video">
                            <iframe title={titulo} width="560" height="315" src={video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            
                            <a className="enlace-recurso" href={enlace} target='_blank' rel="noopener noreferrer"> Ingresa a {titulo} <span><i className="material-icons a">thumb_up</i></span></a>   
                            

                        </div>
                        <div className="informacion-tic">
                            <h3>{titulo}</h3>
                            <p>{descripcion}</p>
                            {Object.keys(recurso).length === 0
                                ?null
                                :<img src={`https://blog-campus-api-2021.herokuapp.com/img/recursos-logos/${logo}.png`} alt=""/>
                            }
                            
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
     );
}
 
export default DetalleRecurso;