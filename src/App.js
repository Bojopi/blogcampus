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
import tokenAuth from './config/tokenAuth'

//Revisar si tenemos un token
const token = localStorage.getItem('token');
if (token) {
  tokenAuth(token);
}

function App() {
  
  return (
    <RecursoState>
      <AuthState>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/ingresar" component={Ingresar}/>
            <Route exact path="/nuevo-articulo" component={NuevoArticulo}/>
            <Route exact path="/detalle-articulo/:id" component={DetalleArticulo}/>
            <Route exact path="/recursos" component={Recursos}/>
            <Route exact path="/detalle-recurso-tic/:id" component={DetalleRecurso}/>
          </Switch>
        </Router>
      </AuthState>
    </RecursoState>

  );
}

export default App;
