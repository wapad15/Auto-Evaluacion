import React, { Component } from 'react'
import { BrowserRouter,  Route, Switch} from 'react-router-dom'
import Login from '../pages/Login/Login';
import Viase from '../pages/Viase/Viase';

class Router extends Component {
  
  state = {}
  render() { 
    return ( 
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/VIASE" component={Viase}/>
      </Switch>
      </BrowserRouter>
     );
  }
}
 
export default Router;