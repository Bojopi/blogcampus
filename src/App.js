import React from 'react';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import Ingresar from './components/auth/Ingresar';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/ingresar" component={Ingresar}/>
      </Switch>
    </Router>

  );
}

export default App;
