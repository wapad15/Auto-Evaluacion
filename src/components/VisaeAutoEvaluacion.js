import React, {Component} from 'react'
import Header from './Header/Header'
import MenuDesplegable from './MenuDesplegable';
class  VisaeAutoEvaluacion extends Component {

  
  render() {
  return ( 
    <React.Fragment>
      <Header
        nombre='are correa'
        rol= 'VISAE'
      />
      <div className="app-main">
      <MenuDesplegable />
      <div className="app-main__outer">
          <div className="app-main__inner">
            <div className="row">
              <div className=" col-lg-12 col-md-6">
                <div className="main-card mb-3 card">
                  <div className="card-body">
                    <h5 className="card-title">Iniciando nueva auto evaluacion</h5>
                    <form  className="">
                      <div className="position-relative form-group">
                          <label htmlFor="exampleEmail2">Periodo</label>
                          <select name="programa" className="form-control" >
                            <option >16-01</option>
                            <option >16-02</option>
                            <option >08-03</option>
                            <option >16-04</option>
                            <option >08-05</option>
                            <option >16-06</option>
                          </select>
                      </div>
                      <div className="position-relative form-group">
                        <label htmlFor="examplePassword" className="">Nombre</label>
                        <input name="password" id="examplePassword" placeholder="nombre" type="password" className="form-control" />
                      </div>
                      <button className="mt-1 btn btn-primary">Iniciar</button>
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