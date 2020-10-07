import React,{Fragment, useState} from 'react';
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Error from '../layout/Error'


const NuevoArticulo = () => {
    
    const [error, guardarError] = useState(false);
    const [nuevoarticulo, guardarNuevoArticulo]= useState({
        titulo:'',
        introduccion:'',
        contenido:''
    });

    const { titulo, introduccion, contenido} = nuevoarticulo;

    const onChange = e => {
        guardarNuevoArticulo({
            ...nuevoarticulo,
            [e.target.name]:e.target.value
        })
    };
    const onChangeImage = e =>{
        const file = e.target.files[0];

        const image = URL.createObjectURL(file);
        document.getElementById('imgss').src=image
    }
    const onSubmit = async (e)=>{
        e.preventDefault();

        if (titulo === '' || introduccion === '' || contenido === '') {
            guardarError(true);
            return
        }
        guardarError(false);

        const formdata = new FormData(e.currentTarget)
        // debugger

        const url = `http://localhost:4000/api/a`

        await fetch(url,{
            method:'POST',
            body:formdata
           
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => alert('insertado correctamente'));

        //registrar nuevo articulo

        // var t = new Date();
        // let fecha = `${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`

        // const url = `http://localhost:4000/api/registrarArticulo`

        // const data = {};
        // data.titulo = titulo
        // data.introduccion = introduccion
        // data.contenido = contenido
        // data.fecha = fecha
        // data.img = 'img'
        // data.id_autor = 1
        
        // let JSO = JSON.stringify(data)
        // await fetch(url, {
        //     method: 'POST', // or 'PUT'
        //     body: JSO, // data can be `string` or {object}!
        //     headers:{
        //         'Content-Type': 'application/json'
        //     }
        // }).then(res => res.json())
        // .catch(error => console.error('Error:', error))
        // .then(response => alert('insertado correctamente'));

        // guardarNuevoArticulo({
        //     titulo:'',
        //     introduccion:'',
        //     contenido:''
        // })

    } 
    

    return(
        <Fragment>
            <Header />
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
                                <i className="material-icons">add</i><label htmlFor="">eliga</label>
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
                        
                        <button className="btn btn-success">
                            Registrar Articulo
                        </button>
                    </form>
                    <div className="container-img-articulo">
                        <h3>Imagen</h3>
                        <figure>
                            <img className="imgEjemplo" id='imgss' src="" alt=""/>
                        </figure>
                    </div>
                </div>       
            </div>
            <Footer />
        </Fragment>
    )
} 

export default NuevoArticulo;