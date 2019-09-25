import React, {Component} from 'react'
import Header from './Header/Header'
import MenuDesplegable from './MenuDesplegable';
class  VisaeAutoEvaluacion extends Component {

  
  render() {
  return ( 
    <React.Fragment>
      <Header />
      <div class="app-main">
      <MenuDesplegable />
      <div class="app-main__outer">
          <div class="app-main__inner">
            <div class="row">
              <div class=" col-lg-12 col-md-">
                <div class="main-card mb-3 card">
                  <div class="card-body">
                    <h5 class="card-title">Iniciando nueva auto evaluacion</h5>
                    <form  class="">
                      <div class="position-relative form-group">
                        <label for="exampleEmail" class="">Periodo</label>
                        <input name="email" id="exampleEmail" placeholder="periodo" type="email" class="form-control" />
                      </div>
                      <div class="position-relative form-group">
                        <label for="examplePassword" class="">Nombre</label>
                        <input name="password" id="examplePassword" placeholder="nombre" type="password" class="form-control" />
                      </div>
                      <button class="mt-1 btn btn-primary">Iniciar</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
    }
}
 
export default VisaeAutoEvaluacion;