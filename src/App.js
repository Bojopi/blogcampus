import React from 'react';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import Ingresar from './components/auth/Ingresar';
import NuevoArticulo from './components/articulos/NuevoArticulo'
import DetalleArticulo from './components/articulos/DetalleArticulo'
import Recursos from './components/recursos/Recursos';
import DetalleRecurso from './components/recursos/DetalleRecurso'

function App() {
  return (
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

  );
}

export default App;
