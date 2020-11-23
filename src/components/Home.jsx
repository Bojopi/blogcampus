import React, { Fragment} from 'react';

import {Link} from 'react-router-dom';

import Header from './layout/Header';
import Jumbotron from './layout/Jumbotron';
import Navegacion from './layout/Navegacion';
import Footer from './layout/Footer';
import ListaNoticias from './articulos/ListaNoticias';
import ListaExtras from './articulos/ListaExtras';
// import AuthContext from '../context/autenticacion/authContext';

const Home = () => {
    // const authContext = useContext(AuthContext);
    // const { usuAuth } = authContext

    // useEffect(() => {
    //     usuAuth()
        
    // },[usuAuth])

    return ( 
        <Fragment>
            <Header />
            <Jumbotron />
            <Navegacion />
            <main>
                <div className="container not">
                    <div className="container-noticias">
                        <h2>Lee las Nuevas Noticias</h2>
                        <Link className="btn btn-danger" to='/nuevo-articulo'>Agregar Nuevo Articulo</Link>
                        
                        <ListaNoticias />

                    </div>
                    <div className="container-extra">

                        <h2>RECOMENDACIONES</h2>
                        <ListaExtras/>
                    </div>
                </div>
            </main>
            <Footer />

        </Fragment>
     );
}
 
export default Home;