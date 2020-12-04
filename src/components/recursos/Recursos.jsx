import React,{Fragment,useEffect,useContext,useState} from 'react'

import {Link} from 'react-router-dom'

import Jumbotron from '../layout/Jumbotron'
import Navegacion from '../layout/Navegacion'
import Recurso from './Recurso'

import recursoContext from '../../context/recursos/recursoContext'

import '../css/recursos.css'

const Recursos = () => {

    const recursosContext = useContext(recursoContext);
    const {recursos,recursoscategoria,categoria, obtenerRecursos, obtenerRecursosCategoria,categoriaActual}=recursosContext;
    const [admin, setAdmin] = useState(false);

    useEffect(() => {

        const verificarToken = async () => {
            try {
                if (await localStorage.getItem('token')==undefined) {
                    setAdmin(false);
                    return;
                }
                let token = await localStorage.getItem('token')
                let base64Url = token.split('.')[1];
                let base64= base64Url.replace('-', '+').replace('_','/');
                const datos = JSON.parse(window.atob(base64))

                let date= new Date();
                let fecha_actual = Math.floor(date.getTime()/1000);

                
                if (fecha_actual>datos.exp) {
                    setAdmin(false);
                    return
                }
                setAdmin(true);
                
            } catch (error) {
                console.log(error)
            }
        }
        verificarToken();
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
            <Jumbotron />
            <Navegacion/>
            <main>
                <div className="container recu">
                    <h2>Lista de Recursos Tic</h2>
                    {admin
                        ?<Link className="btn btn-danger" to='/nuevo-recurso'>Agregar Nuevo Recurso</Link>
                        :null
                    }
                    
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
        </Fragment>
     );
}
 
export default Recursos;