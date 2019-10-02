import React, { Component } from 'react'
import Header from './Header/Header';
import MenuDesplegable from './MenuDesplegable';
import Preguntas from './Preguntas';



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
          rol='VISAE' s />
        <div className="app-main">
          <MenuDesplegable />
          <div className="app-main__outer">
            <div className="app-main__inner">
              <div className="row">
                <div className=" col-lg-12 col-md-6">
                  <div className="main-card mb-3 card">
                    <div className="card-body">
                      <h5 className="card-title">CONSTRUCCION DE ENCUESTAS</h5>
                      <form onSubmit={this.prueba} className="">
                        <div className="form-row">
                          <div className="col-md-12">
                          <div className="position-relative form-group">
                            <label htmlFor="exampleEmail" className="">Escuela</label>
                            <select name="programa" className="form-control" >
                            <option >escuela #1</option>
                            <option >escuela #2</option>
                            <option >escuela #3</option>
                            <option >escuela #4</option>
                            <option >escuela #5</option>
                            <option >escuela #6</option>
                          </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                          <div className="position-relative form-group">
                            <label htmlFor="exampleEmail" className="">Programa</label>
                            <input name="email" id="exampleEmail" placeholder="promgrama" type="email" className="form-control " />
                            </div>
                          </div>
                          <div className="col-md-6">
                          <div className="position-relative form-group ">
                            <label htmlFor="examplePassword" className="">Grupo de interes</label>
                            <input name="password" id="examplePassword" placeholder="pej: estudiante" type="password" className="form-control " />
                          </div>
                          </div>
                          
                          <button className="mt-4 btn btn-primary">Buscar</button>
                        
                          </div>
                      </form>
                      <div >
                         <h5 >----------------------------------------------------</h5>
                        <Preguntas />
                        
                      </div>
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