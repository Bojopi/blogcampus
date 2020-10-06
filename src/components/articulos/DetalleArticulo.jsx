import React,{Fragment,useEffect,useState} from 'react';

import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Jumbotron from '../layout/Jumbotron';
import Navegacion from '../layout/Navegacion';

import logo from '../../img/campus-virtual.png';
import Comentario from './Comentario';

import axios from 'axios'

const DetalleArticulo = ({match}) => {
    const [comentarios,guardarComentarios]=useState([
        {id:1, persona: 'Dayana Rojas', fecha:'06/10/2020', hora:'13:38',foto_autor:'foto', comentario:'Me parece interesante el articulo'},
        {id:2, persona: 'Brayan Zeballos', fecha:'05/10/2020', hora:'11:00',foto_autor:'foto', comentario:'Ejemplo de respuesta'},
        
        
    ]);

    const [formcomentario,guardarFormComentario]=useState({
        autor:'',
        comentario:''
    })

    const [error, guardarError] = useState(false)

    const [articulo,guardarArticulo]=useState({})

    useEffect(() => {
        const cargarArticulo = async () => {
            const API = await fetch(`http://localhost:4000/api/traerArticulo/${parseInt(match.params.id)}`);
            const respuesta = await API.json();
            guardarArticulo(respuesta[0]);
            
            const API2= await fetch(`http://localhost:4000/api/traerComentarios/${parseInt(match.params.id)}`)
            const respuesta2 = await API2.json();
           
            guardarComentarios(respuesta2)
            
        }
        cargarArticulo();
    }, [])

    const {autor, comentario} = formcomentario
    
    const onChange = e => {
        guardarFormComentario({
            ...formcomentario,
            [e.target.name]:e.target.value
        })
    }


    const {id,titulo,introduccion,contenido,fecha,img,Autor} = articulo;

    const onSubmit = async (e) => {
        e.preventDefault();

        if(autor === '' || comentario === ''){
            guardarError(true)
            return
        }
        guardarError(false)

        var t = new Date();
        let fecha = `${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`
        let hora = `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`

        const url = `http://localhost:4000/api/registrarComentario`

        const data = {};
        data.autor = autor
        data.foto_autor = 'foto'
        data.fecha = fecha
        data.hora = hora
        data.comentario = comentario
        data.id_articulo = parseInt(match.params.id)
        
        let JSO = JSON.stringify(data)
        await fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSO, // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => alert('insertado correctamente'));
    }

    return ( 
        <Fragment>
            <Header />
            <Jumbotron />
            <Navegacion />
            <div className="container nuevoar">
                <div className="container-detalle">
                    <div className="info">
                        <br/>
                        <h2>{titulo}</h2>
                        <hr/>
                        <div className="info-noticia">
                            <p>{Autor} </p>
                            {Object.keys(articulo).length === 0
                                ?null
                                :<p> {fecha.substr(0,10)} </p>
                            }                   
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <img src={logo} alt=""/>
                            </div>
                        </div>
                            <p className="intro">{introduccion}</p>
                            <hr/>
                            <p className="intro">{contenido}</p>
                            <hr/>   
                        <div className="container-comentarios">
                            <h3>Comentarios</h3>
                            <br/>
                            {comentarios.map(comentario => {
                                return <Comentario key={comentario.id} comentario={comentario} />
                            })}

                        <form onSubmit={onSubmit} className="form-nuevo-articulo">
                        <h3>Formulario</h3>
                        <div className="form-row">
                            <div className="col col-12">
                                <i className="material-icons">add</i><label htmlFor="">Nombre</label>
                                <input type="text" className="form-control" name="autor" onChange={onChange}/>
                            </div>
                        </div>
                        
                        <div className="form-row mt-4">
                            <div className="col col-12">
                                <i className="material-icons">add</i><label htmlFor="">Comentario</label>
                                <textarea name="comentario" className="form-control" id="" cols="30" rows="5" onChange={onChange} ></textarea>
                            </div>
                        </div>
                        
                        
                        <button type="submit" className="btn btn-success">
                            Enviar Comentario
                        </button>
                    </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
     );
}
 
export default DetalleArticulo;