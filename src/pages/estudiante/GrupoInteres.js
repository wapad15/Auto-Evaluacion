import React, { Component } from 'react'
import Header from '../../components/Header/Header'

class GrupoInteres extends Component {

  render() {
    return (
      <React.Fragment>
        <Header
          nombre='Nombre del estudiante'
          rol='Estudiante'
        />
        <div className="app-main">
          <div className="app-main__outer">
            <div className="app-main__inner">
              <div className="row">
                <div className="col-lg-9 col-md-12">
                  <div className="main-card mb-13 card">
                    <div className="card-body ">
                      <h5 className="card-title justify-content-center align-items-center" >Actividades</h5>
                      <button
                        className="mb-6 mr-6 btn-pill btn btn-primary btn-lg btn-block">
                          Iniciar Encuesta
                      </button>
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

export default GrupoInteres;