import React from 'react';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import Ingresar from './components/auth/Ingresar';
import NuevoArticulo from './components/articulos/NuevoArticulo'
import DetalleArticulo from './components/articulos/DetalleArticulo'
import Recursos from './components/recursos/Recursos';
import DetalleRecurso from './components/recursos/DetalleRecurso'
import RecursoState from './context/recursos/recursoState'
import AuthState from './context/autenticacion/authState';
// import tokenAuth from './config/tokenAuth'
import NuevoRecurso from './components/recursos/NuevoRecurso';
import Entrevistas from './components/entrevistas/Entrevistas';

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

function App() {
  
  return (
    <RecursoState>
      <AuthState>
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/ingresar" component={Ingresar}/>
            <Route exact path="/nuevo-articulo" component={NuevoArticulo}/>
            <Route exact path="/detalle-articulo/:id" component={DetalleArticulo}/>
            <Route exact path="/recursos" component={Recursos}/>
            <Route exact path="/detalle-recurso-tic/:id" component={DetalleRecurso}/>
            <Route exact path="/nuevo-recurso" component={NuevoRecurso}/>
            <Route exact path="/entrevistas" component={Entrevistas}/>
          </Switch>
          <Footer/>
        </Router>
      </AuthState>
    </RecursoState>

  );
}

export default App;
