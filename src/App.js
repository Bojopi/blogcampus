import React from 'react';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import Ingresar from './components/auth/Ingresar';
import NuevoArticulo from './components/articulos/NuevoArticulo'
import DetalleArticulo from './components/articulos/DetalleArticulo'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/ingresar" component={Ingresar}/>
        <Route exact path="/nuevo-articulo" component={NuevoArticulo}/>
        <Route exact path="/detalle-articulo/:id" component={DetalleArticulo}/>
      </Switch>
    </Router>

  );
}

export default App;
