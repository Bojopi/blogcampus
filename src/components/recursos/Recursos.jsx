import React,{Fragment,useState,useEffect} from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import Jumbotron from '../layout/Jumbotron'
import Navegacion from '../layout/Navegacion'
import Recurso from './Recurso'

const Recursos = () => {

    const [recursos,guardarRecursos] = useState([
        // {id:1, logo:'teams', titulo:'Microsoft Teams', descripcion:'Una pequeña aplicacion para crear reuniones'}
    ])

    useEffect(() => {
        const cargarRecursos = async () => {
            const API=await fetch(`http://localhost:4000/api/traerRecursos`);
            const respuesta = await API.json();
            guardarRecursos(respuesta);
        }
        cargarRecursos();
    }, [])
    return ( 
        <Fragment>
            <Header/>
            <Jumbotron />
            <Navegacion/>
            <main>
                <div className="container recu">
                    <h2>Lista de Recursos Tic</h2>
                    <hr/>
                    <div className="container-recursos">
                        {recursos.map(recurso => {
                            return <Recurso key={recurso.id} recurso={recurso}/>
                        })}
                    </div>
                </div>
            </main>
            <Footer/>
        </Fragment>
     );
}
 
export default Recursos;