import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from '../pages/Login/Login';
import Visae from '../pages/visae/Visae';
import VisaeAutoEvaluacion from './VisaeAutoEvaluacion';
import VisaeEncuesta from './VisaeEncuesta';
import PreguntasInstrumentos from './PreguntasInstrumentos';
import GrupoInteres from '../pages/estudiante/GrupoInteres';


class Router extends Component {

  state = {}
  render() {
    return (
      <BrowserRouter>
        <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">

          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Visae" component={Visae} />
            <Route exact path="/Visae-autoE" component={VisaeAutoEvaluacion} />
            <Route exact path="/visae-instrumentos" component={VisaeEncuesta} />
            <Route exact path="/visae-preguntas" component={PreguntasInstrumentos} />
            <Route exact path="/Grupo-interes" component={GrupoInteres} />
            <Route exact path="/visae-resultados" component={VisaeAutoEvaluacion} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default Router;