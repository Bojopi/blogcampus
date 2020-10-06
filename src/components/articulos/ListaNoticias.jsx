import React,{useState , Fragment, useEffect} from 'react'
import Noticia from './Noticia';

const ListaNoticias = () => {

    const [listanoticias,guardarListaNoticias]=useState([])
    useEffect(() => {
        const cargarArticulos = async () => {
            const API = await fetch(`http://localhost:4000/api/traerArticulos`);
            const respuesta = await API.json();
            guardarListaNoticias(respuesta)
        }
        cargarArticulos();
    }, [])

    return ( 
        <Fragment>
            <hr/>
            { listanoticias.map(noticia => {
                return <Noticia key={noticia.id} noticia={noticia}/>
            })}
        </Fragment>
     );
}
 
export default ListaNoticias;