import React from 'react';

const FormularioAutoEvaluacion = () => {
  return ( 
    <div class="col-lg-12 col-md-12">
      <div class="main-card mb-3 card">
          <div class="card-body">
            <div id="smartwizard" class="sw-main sw-theme-default">
                  <ul class="forms-wizard nav nav-tabs step-anchor">
                      <li class="nav-item active">
                          <a href="#step-1" class="nav-link">
                              <em>1</em><span>Iniciar Nueva Autoevaluacion</span>
                          </a>
                      </li>
                      <li class="nav-item done">
                          <a href="#step-2" class="nav-link">
                              <em>2</em><span>Construcion de encuestas por programa</span>
                          </a>
                      </li>
                      <li class="nav-item done">
                          <a href="#step-3" class="nav-link">
                              <em>3</em><span>Verificar Resultados</span>
                          </a>
                      </li>
                      <li class="nav-item done">
                          <a href="#step-4" class="nav-link">
                              <em>4</em><span>Consolidados</span>
                          </a>
                      </li>
                  </ul>

                  <div class="form-wizard-content sw-container tab-content" style={{minHeight: '353px'}}>
                      <div id="step-1" class="tab-pane step-content" style={{display: 'block'}}>
                          <div class="form-row">
                              <div class="col-md-6">
                                  <div class="position-relative form-group">
                                    <label for="exampleEmail55">Periodo</label>
                                    <input name="email" id="exampleEmail55" placeholder="Pj: 2019-2" type="text" class="form-control"/>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="position-relative form-group">
                                    <label for="examplePassword22">Nombre</label>
                                    <input name="password" id="examplePassword22" placeholder="pj: AÑO-2019" type="text" class="form-control"/>
                                  </div>
                              </div>
                              
                          </div>
                          
                      </div>
                      <div id="step-2" class="tab-pane step-content" style={{display: 'none'}}>
                          <div id="accordion" class="accordion-wrapper mb-3">
                              <div class="card">
                                  <div id="headingOne" class="card-header">
                                      <button type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" class="text-left m-0 p-0 btn btn-link btn-block">
                                          <span class="form-heading">Construccion de Encuentas
                                          <p>click para nueva encuesta</p></span>
                                      </button>
                                  </div>
                                  <div data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne" class="collapse show">
                                      <div class="card-body">
                                          <div class="form-row">
                                              <div class="col-md-6">
                                                  <div class="position-relative form-group">
                                                      <label for="exampleEmail2">Programa</label>
                                                      <select name="programa" class="form-control" >
                                                          <option >sistemas</option>
                                                          <option >civil</option>
                                                          <option >medicina</option>
                                                          <option >industrial</option>
                                                      </select>
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="position-relative form-group">
                                                      <label for="examplePassword">Grupo de interes</label>
                                                      <select name="programa" class="form-control" >
                                                          <option >Estudiante</option>
                                                          <option >Docente</option>
                                                          <option >Egresado</option>
                                                      </select>
                                                  </div>
                                              </div>
                                              
                                                
                                                <div class="col-md-6" style={{margin: '25px'}}>
                                                  <div class="position-relative form-group">
                                                    <input name="check" type="checkbox" class="form-check-input"/>
                                                    <label for="exapleCheck" class="form-check-label">Pregunta 1</label>
                                                 </div>
                                                 <div class="position-relative form-group">
                                                    <input name="check" type="checkbox" class="form-check-input"/>
                                                    <label for="exapleCheck" class="form-check-label">Pregunta 2</label>
                                                 </div>
                                                 <div class="position-relative form-group">
                                                    <input name="check" type="checkbox" class="form-check-input"/>
                                                    <label for="exapleCheck" class="form-check-label">Pregunta 3</label>
                                                 </div>
                                                 <div class="position-relative form-group">
                                                    <input name="check" type="checkbox" class="form-check-input"/>
                                                    <label for="exapleCheck" class="form-check-label">Pregunta 4</label>
                                                 </div>
                                                 <div class="position-relative form-group">
                                                    <input name="check" type="checkbox" class="form-check-input"/>
                                                    <label for="exapleCheck" class="form-check-label">Pregunta 5</label>
                                                 </div>
                                                 <div class="position-relative form-group">
                                                    <input name="check" type="checkbox" class="form-check-input"/>
                                                    <label for="exapleCheck" class="form-check-label">Pregunta 6</label>
                                                 </div>
                                                </div>
                                                  
                                                  
                                             
                                          </div>
                                          
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div id="step-3" class="tab-pane step-content" style={{display: 'block'}}>
                          <div class="form-row">
                              <div class="col-md-6">
                                  <div class="position-relative form-group">
                                    <label for="exampleEmail55">programa</label>
                                    <input name="email" id="exampleEmail55" placeholder="Pj: 2019-2" type="text" class="form-control"/>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="position-relative form-group">
                                    <label for="examplePassword22">Estamento</label>
                                    <input name="password" id="examplePassword22" placeholder="estamento" type="text" class="form-control"/>
                                  </div>
                              </div>
                              <div class="col-lg-12">
                            <div class="main-card mb-3 card">
                                <div class="card-body"><h5 class="card-title">Programa</h5>
                                    <table class="mb-0 table table-borderless">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Factor</th>
                                            <th>Porcentaje %</th>
                                            <th>Calificacion</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>nombre uno</td>
                                            <td>0.3</td>
                                            <td>4.5</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>nombre dos</td>
                                            <td>0.3</td>
                                            <td>4.0</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>nombre tres</td>
                                            <td>0.4</td>
                                            <td>4.8</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                              
                          </div>
                          
                      </div>
                      <div id="step-4" class="tab-pane step-content" 
                      style={{display: 'none'}}>
                          <div class="no-results">
                            <div class="swal2-icon swal2-success swal2-animate-success-icon">
                              <div class="swal2-success-circular-line-left" style={{backgroundColor: 'rgb(255, 255, 255)'}}>
                              </div>
                              <span class="swal2-success-line-tip"></span>
                              <span class="swal2-success-line-long"></span>
                              <div class="swal2-success-ring"></div>
                              <div class="swal2-success-fix" style={{backgroundColor: 'rgb(255, 255, 255)'}}>
                              </div>
                              <div class="swal2-success-circular-line-right" style={{backgroundColor: 'rgb(255, 255, 255)'}}>
                              </div>
                            </div>
                            <div class="results-subtitle mt-4">Listo!</div>
                            <div class="results-title">Auto-Evaluacion aplicada con exito</div>
                            <div class="mt-3 mb-3"></div>
                            <div class="text-center">
                                <button class="btn-shadow btn-wide btn btn-success btn-lg">Descargar consolidado</button>
                            </div>
                        </div>
                      </div>
                      
                  </div>
              </div>
              <div class="divider"></div>
              <div class="clearfix">
                  <button type="button" id="reset-btn" class="btn-shadow float-left btn btn-link">Reset</button>
                  <button type="button" id="next-btn" class="btn-shadow btn-wide float-right btn-pill btn-hover-shine btn btn-primary">Next</button>
                  <button type="button" id="prev-btn" class="btn-shadow float-right btn-wide btn-pill mr-3 btn btn-outline-secondary">Previous</button>
              </div>
          </div>
      </div>
  </div>
   );
}
 
export default FormularioAutoEvaluacion;