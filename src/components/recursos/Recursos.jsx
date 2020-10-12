import React,{Fragment,useEffect,useContext} from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import Jumbotron from '../layout/Jumbotron'
import Navegacion from '../layout/Navegacion'
import Recurso from './Recurso'

import recursoContext from '../../context/recursos/recursoContext'

const Recursos = () => {

    const recursosContext = useContext(recursoContext);
    const {recursos,recursoscategoria,categoria, obtenerRecursos, obtenerRecursosCategoria,categoriaActual}=recursosContext;

    useEffect(() => {
        obtenerRecursos();     
    }, [])

    // categoriaActual(1)

    const onChange = e => {
        if (e.target.value==='0') {
            categoriaActual(null)
            return
        }
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
                    
                    
                        {/* <label className="col-sm-12 control-label" for="email-03">Estilo de fuente:</label> */}
                        <div className="donate">
                            <label><input type="radio" value='0' onChange={onChange} name="toggle" defaultChecked/><span><strong>TODOS</strong></span></label>
                            <label><input type="radio" value='1' onChange={onChange} name="toggle"/><span>Comunicacion</span></label>
                            <label><input type="radio" value='2' onChange={onChange} name="toggle"/><span>Diseño</span></label>
                            <label><input type="radio" value='3' onChange={onChange} name="toggle"/><span>Presentacion</span></label>
                        </div>
                    

                    
                    <div className="container-recursos">
                        {categoria===null
                            ?recursos.map( recurso =>{
                                return <Recurso key={recurso.id} recurso={recurso}/>
                            })
                            :recursoscategoria.map( recurso =>{
                                return <Recurso key={recurso.id} recurso={recurso}/>
                            })
                        }
                    </div>
                </div>
            </main>
            <Footer/>
        </Fragment>
     );
}
 
export default Recursos;