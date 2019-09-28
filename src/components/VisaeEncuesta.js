import React from 'react';
import Header from './Header/Header';
import MenuDesplegable from './MenuDesplegable';

const VisaeEncuesta = () => {

  return (
    <React.Fragment>
      <Header
      nombre='are correa'
          rol= 'VISAE'/>
      <div className="app-main">
        <MenuDesplegable />
        <div className="app-main__outer">
          <div className="app-main__inner">
            <div className="card">
              <div id="headingOne" className="card-header">
                <span className="form-heading">Construccion de Encuentas</span>
              </div>
              <div data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne" className="collapse show">
                <div className="card-body">
                  <form>
                    <div className="form-row">
                      <div className="col-md-6">
                        <div className="position-relative form-group">
                          <label htmlFor="exampleEmail2">Programa</label>
                          <select name="programa" className="form-control" >
                            <option >sistemas</option>
                            <option >civil</option>
                            <option >medicina</option>
                            <option >industrial</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="position-relative form-group">
                          <label htmlFor="examplePassword">Grupo de interes</label>
                          <select name="programa" className="form-control" >
                            <option >Estudiante</option>
                            <option >Docente</option>
                            <option >Egresado</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12 " style={{ margin: '25px' }}>
                        <div className="position-relative form-group">
                          <input name="check" type="checkbox" className="form-check-input" />
                          <label htmlFor="exapleCheck" className="form-check-label">Pregunta 1</label>
                        </div>
                        <div className="position-relative form-group">
                          <input name="check" type="checkbox" className="form-check-input" />
                          <label htmlFor="exapleCheck" className="form-check-label">Pregunta 2</label>
                        </div>
                        <div className="position-relative form-group">
                          <input name="check" type="checkbox" className="form-check-input" />
                          <label htmlFor="exapleCheck" className="form-check-label">Pregunta 3</label>
                        </div>
                        <div className="position-relative form-group">
                          <input name="check" type="checkbox" className="form-check-input" />
                          <label htmlFor="exapleCheck" className="form-check-label">Pregunta 4</label>
                        </div>
                        <div className="position-relative form-group">
                          <input name="check" type="checkbox" className="form-check-input" />
                          <label htmlFor="exapleCheck" className="form-check-label">Pregunta 5</label>
                        </div>
                        <div className="position-relative form-group">
                          <input name="check" type="checkbox" className="form-check-input" />
                          <label htmlFor="exapleCheck" className="form-check-label">Pregunta 6</label>
                        </div>
                      </div>
                    </div>
                    <button className="mt-1 btn btn-primary">enviar</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default VisaeEncuesta;