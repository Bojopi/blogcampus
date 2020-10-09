import React,{Fragment,useState,useEffect,useContext} from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import Jumbotron from '../layout/Jumbotron'
import Navegacion from '../layout/Navegacion'
import Recurso from './Recurso'

import recursoContext from '../../context/recursos/recursoContext'

const Recursos = () => {

    const recursosContext = useContext(recursoContext);
    const {recursos,recursoscategoria, obtenerRecursos, obtenerRecursosCategoria,categoriaActual}=recursosContext;

    useEffect(() => {
        obtenerRecursos();     
    }, [])

    // categoriaActual(1)

    const onChange = e => {
        // debugger
        // alert('ss')
        categoriaActual(parseInt(e.target.value));
        obtenerRecursosCategoria(parseInt(e.target.value))
    }
    return ( 
        <Fragment>
            <Header/>
            <Jumbotron />
            <Navegacion/>
            <main>
                <div className="container recu">
                    <h2>Lista de Recursos Tic</h2>
                    <hr/>
                    <h3>Categorias</h3>
                    <input type="radio" name="sds" id="asda" value="1" onChange={onChange}/>as
                    <input type="radio" name="sds" id="a" value="2" onChange={onChange}/>aaa
                    
                    <div className="container-recursos">
                        {categoriaActual===null
                            ?null
                            :recursos.map(recurso => {
                                return <Recurso key={recurso.id} recurso={recurso}/>
                            })
                        }
                        {categoriaActual!=null
                        ?recursos.map(recurso => {
                            return <Recurso key={recurso.id} recurso={recurso}/>
                        })
                        :null
                        }
                    </div>
                </div>
            </main>
            <Footer/>
        </Fragment>
     );
}
 
export default Recursos;