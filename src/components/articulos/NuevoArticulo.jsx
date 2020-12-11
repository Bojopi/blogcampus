import React,{Fragment, useState, useEffect} from 'react';
import Error from '../layout/Error'

import {Link} from 'react-router-dom'

import swal from 'sweetalert'


const NuevoArticulo = (props) => {
    
    const [error, guardarError] = useState(false);
    const [nuevoarticulo, guardarNuevoArticulo]= useState({
        titulo:'',
        introduccion:'',
        contenido:''
    });

    const [ idautor, setidAutor] = useState('');

    const { titulo, introduccion, contenido} = nuevoarticulo;

    useEffect(() => {
        const verificarToken = async () => {
            try {
                if (await localStorage.getItem('token')==undefined) {
                    props.history.push('/');
                    return;
                }
                let token = await localStorage.getItem('token')
                let base64Url = token.split('.')[1];
                let base64= base64Url.replace('-', '+').replace('_','/');
                const datos = JSON.parse(window.atob(base64))
                debugger
                setidAutor(datos.json[0].id);
                let date= new Date();
                let fecha_actual = Math.floor(date.getTime()/1000);

                
                if (fecha_actual>datos.exp) {
                    props.history.push('/');
                    return
                }
                
            } catch (error) {
                console.log(error)
            }
        }
        verificarToken();
    }, [])

    const onChange = e => {
        guardarNuevoArticulo({
            ...nuevoarticulo,
            [e.target.name]:e.target.value
        });

        document.getElementById('tituloPrevio').textContent=titulo;
        document.getElementById('introPrevio').textContent=introduccion;
        
    };
    const onChangeImage = e => {
        
        const file = e.target.files[0];
        try {
            const image = URL.createObjectURL(file);
            document.getElementById('imgss').src=image;
            
        } catch (error) {
            console.log(error)
            document.getElementById('imgss').src='';
        }
    }
    
    const enviarImagen = async (formdata)=>{
        console.log(formdata)

        const url = `http://localhost:4000/api/a`

        await fetch(url,{
            method:'POST',
            body:formdata
           
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => swal("Exito!", "Articulo Creado", "success"));
        document.getElementById('imgss').src=''
    }
    
    const onSubmit = async (e)=>{
        e.preventDefault();

        if (titulo === '' || introduccion === '' || contenido === '') {
            guardarError(true);
            return
        }
        guardarError(false);

        const formdata = new FormData(e.currentTarget)
        

        // registrar nuevo articulo

        var t = new Date();
        let fecha = `${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`
        let hora = `${t.getHours()}.${t.getMinutes()}.${t.getSeconds()}`

        const url = `http://localhost:4000/api/registrarArticulo`

        const data = {};
        data.titulo = titulo
        data.introduccion = introduccion
        data.contenido = contenido
        data.fecha = fecha
        data.img = `${titulo} ${fecha} ${hora}`
        data.id_autor = parseInt(idautor);
        
        let JSO = JSON.stringify(data)
        await fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSO, // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response =>enviarImagen(formdata));

        guardarNuevoArticulo({
            titulo:'',
            introduccion:'',
            contenido:''
        })
        

    } 
    

    return(
        <Fragment>
            <div className="container nuevoar">
                <br/>
                <h2>Registro de Nuevo Articulo</h2>
                <hr/>
                <div className="container-form">
                    <form onSubmit={onSubmit} className="form-nuevo-articulo" encType="multipart/form-data">
                        <h3>Formulario</h3>
                        <div className="form-row">
                            <div className="col col-12">
                                <i className="material-icons">add</i><label htmlFor="">Titulo</label>
                                <input type="text" className="form-control" name="titulo" value={titulo} onChange={onChange} />
                            </div>
                        </div>
                        <div className="form-row mt-4">
                        <div className="col col-12">
                                <i className="material-icons">add</i><label htmlFor="">eliga su imagen</label>
                                <div className="custom-file">
                                    <input type="file" name="imagen" className="custom-file-input" id="customFile" onChange={onChangeImage} />
                                    <label className="custom-file-label" htmlFor="customFile">Choose file</label>

                                </div>
                            </div>
                        </div>
                        <div className="form-row mt-4">
                            <div className="col col-12">
                                <i className="material-icons">add</i><label htmlFor="">Introduccion</label>
                                <textarea name="introduccion" value={introduccion} className="form-control" id="" cols="30" rows="5" onChange={onChange}></textarea>
                            </div>
                        </div>
                        <div className="form-row mt-4">
                            <div className="col col-12">
                                <i className="material-icons">add</i><label htmlFor="">Contenido</label>
                                <textarea name="contenido" value={contenido} className="form-control" id="" cols="30" rows="5" onChange={onChange}></textarea>
                            </div>
                            
                        </div>
                        {error 
                            ?<Error mensaje='Todos los datos deben estar llenados correctamente' clase='alert alert-danger' />
                            :null
                        }
                        
                        <button type='submit' className="btn btn-success">
                            Registrar Articulo
                        </button>
                        <Link type='button' to='/' className="btn btn-danger cancel">
                            Cancelar
                        </Link>
                    </form>
                    <div className="container-img-articulo">
                        <h3>Vista previa</h3>

                        <h4 id="tituloPrevio">Titulo</h4>
                        <div className="info-noticia">
                            <p>Autor de la noticia </p>
                            <p>yyyy/mm/dd</p>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <img className="imgEjemplo" id='imgss' src="" alt=""/>
                            </div>
                        </div>
                        <p className="intro" id="introPrevio">Introduccion</p>
                        <div className="btn btn-info" >Leer mas</div>
                        <hr/>
                    </div>
                </div>       
            </div>
        </Fragment>
    )
} 

export default NuevoArticulo;