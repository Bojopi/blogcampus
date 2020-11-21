import React,{Fragment,useState} from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import {Link} from 'react-router-dom'
import Error from '../layout/Error'

import axios from 'axios'

const NuevoRecurso = () => {
    const [error, guardarError] = useState(false);

    const [nuevorecurso,guardarNuevoRecurso] = useState({
      titulo:'',
      descripcion:'',
      logo:'',
      video:'',
      enlace:'',
      id_categoria:''  
    })

    const {titulo,descripcion,video,enlace,id_categoria}=nuevorecurso;

    const onChangeImage = e => {
        
        const file = e.target.files[0];
        try {
            const image = URL.createObjectURL(file);
            document.getElementById('imgLogo').src=image;
            
        } catch (error) {
            console.log(error)
            document.getElementById('imgLogo').src='';
        }
    }

    const onChange = e =>{
        guardarNuevoRecurso({
            ...nuevorecurso,
            [e.target.name]:e.target.value
        })
    }
    const enviarImagen = async (formdata)=>{
        console.log(formdata)

        const url = `http://localhost:4000/api/logoRecursos`

        await fetch(url,{
            method:'POST',
            body:formdata
           
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => alert('insertado correctamente'));
        document.getElementById('imgLogo').src=''
    }
    
    const onSubmit = async e =>{
        e.preventDefault();
        //validacion

        
        if (titulo==='' || descripcion===''||video===''||enlace===''||id_categoria==='') {
            guardarError(true);
            return;
        }
        guardarError(false);
        const formdata = new FormData(e.currentTarget)
        //insercion
        var t = new Date();
        let fecha = `${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`
        await axios.post('http://localhost:4000/api/registrarRecurso', {
            titulo: titulo,
            descripcion: descripcion,
            logo: `${titulo}-${fecha}`,
            video:video,
            enlace:enlace,
            id_categoria:parseInt(id_categoria)
        })
        .then(function (response) {
            if(response.status===200){
                alert('Venta Registrada')
                enviarImagen(formdata)
                
            }else{
                
                alert('Error al insertar')
            }
            // console.log(response.status);
        })
        // 
    }
    return ( 
        <Fragment>
            <Header/>
            <div className="container nuevoRec">
               <br/>
               <h2>Registro de Nuevo Recurso</h2> 
               <hr/>
               <div className="container-form">
                    <form onSubmit={onSubmit} className="form-nuevo-articulo" encType="multipart/form-data">
                        <h3>Formulario</h3>
                        <div className="form-row">
                            <div className="col col-12">
                                <i className="material-icons">add</i><label htmlFor="">Nombre del Recurso</label>
                                <input type="text" className="form-control" name="titulo" value={titulo} onChange={onChange}/>
                            </div>
                        </div>
                        <div className="form-row mt-4">
                            <div className="col col-12">
                                <i className="material-icons">add</i><label htmlFor="des">Descripcion</label>
                                <textarea name="descripcion" value={descripcion}  className="form-control" id="des" cols="30" rows="5" onChange={onChange} ></textarea>
                            </div>
                        </div>
                        <div className="form-row mt-4">
                            <div className="col col-12">
                                <i className="material-icons">add</i><label htmlFor="">Logo</label>
                                <div className="custom-file">
                                    <input type="file" name="logo" className="custom-file-input" id="customFiles" onChange={onChangeImage} />
                                    <label className="custom-file-label" htmlFor="customFiles">Choose file</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-row mt-4">
                            <div className="col col-12">
                                <i className="material-icons">add</i><label htmlFor="">Link del video Tutorial</label>
                                <input type="text" className="form-control" name="video" value={video} onChange={onChange} />
                            </div>
                        </div>
                        <div className="form-row mt-4">
                            <div className="col col-12">
                                <i className="material-icons">add</i><label htmlFor="">Enlace de la Pagina</label>
                                <input type="text" className="form-control" name="enlace" value={enlace} onChange={onChange} />
                            </div>
                        </div>
                        <div className="form-row mt-4">
                            <div className="col col-12">
                                <i className="material-icons">add</i><label htmlFor="">Categoria</label>
                                <select name="id_categoria" id="" className="form-control" value={id_categoria} onChange={onChange}>
                                    <option value="0">Seleccione una Categoria...</option>
                                    <option value="1">Comunicacion</option>
                                    <option value="2">Diseño</option>
                                    <option value="3">Presentacion</option>
                                </select>
                            </div>                            
                        </div>
                        {error 
                            ?<Error mensaje='Todos los datos deben estar llenados correctamente' clase='alert alert-danger' />
                            :null
                        }
                        
                        <button type='submit' className="btn btn-success">
                            Registrar Articulo
                        </button>
                        <Link type='button' to='/recursos' className="btn btn-danger cancel">
                            Cancelar
                        </Link>
                    </form>
                    <div className="container-img-recurso">
                        <h3>Vista Previa</h3>
                        <div className="card sombra">
                            <div className="card-header"></div>
                            <div className="card-body">
                                <figure>
                                    <img id="imgLogo" src="" alt=""/>
                                </figure>
                                <div className="parte-atras">
                                    <p><u>{titulo}</u></p>
                                    <br/>
                                    <p>{descripcion.substr(0,50)}...</p>
                                    <button className="btn btn-info">Ver mas</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>
     );
}
 
export default NuevoRecurso;