import React, { useEffect,useState} from 'react';

import {Link} from 'react-router-dom';

import Jumbotron from './layout/Jumbotron';
import Navegacion from './layout/Navegacion';
import ListaNoticias from './articulos/ListaNoticias';
import ListaExtras from './articulos/ListaExtras';

import './css/home.css'

const Home = () => {

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
    }, [admin])

    return ( 
        <>
            <Jumbotron />
            <Navegacion />
            <main>
                <div className="container not">
                    <div className="container-noticias">
                        <h2>Lee las Nuevas Noticias</h2>
                        {admin
                            ?<Link className="btn btn-danger" to='/nuevo-articulo'>Agregar Nuevo Articulo</Link>
                            :null
                        }
                        
                        <ListaNoticias />

                    </div>
                    <div className="container-extra">

                        <h2>RECOMENDACIONES</h2>
                        <ListaExtras/>
                    </div>
                </div>
            </main>
        </>
     );
}
 
export default Home;