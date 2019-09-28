import React, { Component } from 'react'
import Header from './Header/Header';
import MenuDesplegable from './MenuDesplegable';



class PreguntasInstrumentos extends Component {


  prueba = (e) => {
    e.preventDefault()
    return (
      <React.Fragment>
        <h1>holiss</h1>
    </React.Fragment>
      )
    
  }
  render() { 
    return (
      <React.Fragment>
        <Header
        nombre='are correa'
          rol= 'VISAE's/>
        <div className="app-main">
          <MenuDesplegable />
          <div className="app-main__outer">
            <div className="app-main__inner">
              <div className="row">
                <div className=" col-lg-12 col-md-6">
                  <div className="main-card mb-3 card">
                    <div className="card-body">
                      <h5 className="card-title">CONSTRUCCION DE PREGUNTAS</h5>
                      <form onSubmit={this.prueba}  className="">
                        <div className="position-relative form-group">
                          <label htmlFor="exampleEmail" className="">Programa</label>
                          <input name="email" id="exampleEmail" placeholder="pregunta" type="email" className="form-control col-md-4" />
                        </div>
                        <div className="position-relative form-group ">
                          <label htmlFor="examplePassword" className="">Grupo de interes</label>
                          <input name="password" id="examplePassword" placeholder="pej: estudiante" type="password" className="form-control col-md-4" />
                        </div>
                        <button className="mt-1 btn btn-primary">Buscar</button>
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

export default PreguntasInstrumentos;