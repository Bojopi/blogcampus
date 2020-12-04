import React,{useState , useEffect} from 'react'
import Noticia from './Noticia';

import '../css/listanoticias.css'

const ListaNoticias = () => {

    const [listanoticias,guardarListaNoticias]=useState([])
    const [paginaActual,setPaginaActual]=useState(1)
    const[cantidadPaginas,guardarCantidadPaginas]=useState(0)

    useEffect(() => {
        const cargarArticulos = async () => {
            const AP2 = await fetch(`http://localhost:4000/api/cantidadPaginas`);
            const respuesta2 = await AP2.json();
            const API = await fetch(`http://localhost:4000/api/traerArticulos/${parseInt(paginaActual)}`);
            const respuesta = await API.json();
            guardarCantidadPaginas(Math.ceil(parseInt(respuesta2[0].cantidad)/5))
            // debugger
            guardarListaNoticias(respuesta)
        }
        cargarArticulos();
    }, [paginaActual])
    
    const avanzarPagina = () => {
        setPaginaActual(paginaActual+1)
        
    }
    const retrocederPagina = () => {
        setPaginaActual(paginaActual-1)
    }

    return ( 
        <>
            <hr/>
            { listanoticias.map(noticia => {
                return <Noticia key={noticia.id} noticia={noticia}/>
            })}
            <div className="container-paginacion">
               
                {paginaActual === 1
                    ? <button className="btn btn-primary anterior" onClick={retrocederPagina} disabled>Anterior</button>
                    : <button className="btn btn-primary anterior" onClick={retrocederPagina}>Anterior</button>
                }
                {paginaActual=== cantidadPaginas
                    ?<button className="btn btn-primary siguiente" onClick={avanzarPagina} disabled>Siguiente</button>
                    :<button className="btn btn-primary siguiente" onClick={avanzarPagina} >Siguiente</button>
                }
                

            </div>
        </>
     );
}
 
export default ListaNoticias;