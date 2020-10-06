import React, { Fragment } from 'react';

import {Link} from 'react-router-dom';

import Header from './layout/Header';
import Jumbotron from './layout/Jumbotron';
import Navegacion from './layout/Navegacion';
import Footer from './layout/Footer';
import ListaNoticias from './articulos/ListaNoticias';
import ListaExtras from './articulos/ListaExtras';

const Home = () => {
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

                        <h2>Contenido Extra</h2>
                        <ListaExtras/>
                    </div>
                </div>
            </main>
            <Footer />

        </Fragment>
     );
}
 
export default Home;