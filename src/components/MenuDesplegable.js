import React from 'react';
import { Link } from 'react-router-dom'
const MenuDesplegable = () => {
  return ( 
   
        <div className="app-sidebar sidebar-shadow">
            
                <div className="scrollbar-sidebar ps ps--active-y">
                    <div className="app-sidebar__inner">
                        <ul className="vertical-nav-menu metismenu">
                            <li className="app-sidebar__heading">MENU</li>
                            <li className="">
                                <Link to={"#"} aria-expanded="false" >
                                    <i className="metismenu-icon pe-7s-rocket"></i>
                                    AUTO-EVALUACIONES
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </Link>
                                <ul className="mm-collapse" style={{height: '7.04px'}}>
                                    <li>
                                        <Link to={'Visae-autoE'} className="mm-active">
                                            <i className="metismenu-icon">
                                            </i>Crear
                                        </Link>
                                    </li>
                                    
                                    <li>
                                        <Link to={'Visae-listar'}>
                                            <i className="metismenu-icon">
                                            </i>Listar
                                        </Link>
                                  </li>
                                 
                                    <li>
                                        <Link to={'#'}>
                                            <i className="metismenu-icon"></i>
                                            RESULTADOS
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                        </Link>
                                        <ul className="mm-collapse">
                                            <li>
                                                <Link to={'#'}>
                                                    <i className="metismenu-icon">
                                                    </i>Consolidados
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'#'}>
                                                    <i className="metismenu-icon">
                                                    </i>el otro consolidado
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                 </ul>
                            </li>
                            <li className="">
                                <Link to={'#'} aria-expanded="false">
                                    <i className="metismenu-icon pe-7s-browser"></i>
                                    INSTRUMENTOS
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </Link>
                              <ul className="mm-collapse" style={{}}>
                                  <li>
                                        <Link to={'#'}>
                                            <i className="metismenu-icon"></i>
                                            Encuestas
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                        </Link>
                                        <ul className="mm-collapse">
                                            <li>
                                                <Link to={"/visae-preguntas"}>
                                                    <i className="metismenu-icon">
                                                    </i>crear
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'#'}>
                                                    <i className="metismenu-icon">
                                                    </i>editar
                                                </Link>
                                          </li>
                                          <li>
                                                <Link to={'#'}>
                                                    <i className="metismenu-icon">
                                                    </i>elimnar
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'#'}>
                                                    <i className="metismenu-icon">
                                                    </i>listar
                                                </Link>
                                            </li>
                                        </ul>
                                  </li>
                                  <li>
                                        <Link to={'#'}>
                                            <i className="metismenu-icon"></i>
                                            Encuestas
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                        </Link>
                                        <ul className="mm-collapse">
                                            <li>
                                          <Link to={'visae-instrumentos'}>
                                                    <i className="metismenu-icon">
                                                    </i>crear
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'#'}>
                                                    <i className="metismenu-icon">
                                                    </i>editar
                                                </Link>
                                          </li>
                                          <li>
                                                <Link to={'#'}>
                                                    <i className="metismenu-icon">
                                                    </i>elimnar
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'#'}>
                                                    <i className="metismenu-icon">
                                                    </i>listar
                                                </Link>
                                            </li>
                                        </ul>
                                  </li>
                                  <li>
                                        <Link to={'#'}>
                                            <i className="metismenu-icon"></i>
                                            Documentacion
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                        </Link>
                                        <ul className="mm-collapse">
                                            <li>
                                                <Link to={'#'}>
                                                    <i className="metismenu-icon">
                                                    </i>crear
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'#'}>
                                                    <i className="metismenu-icon">
                                                    </i>editar
                                                </Link>
                                          </li>
                                          <li>
                                                <Link to={'#'}>
                                                    <i className="metismenu-icon">
                                                    </i>elimnar
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'#'}>
                                                    <i className="metismenu-icon">
                                                    </i>listar
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to={'#'} aria-expanded="false">
                                    <i className="metismenu-icon pe-7s-plugin"></i>
                                    RESULTADOS
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </Link>
                                <ul className="mm-collapse">
                                    <li>
                                        <Link to={'#'}>
                                            <i className="metismenu-icon">
                                            </i>Consolidados de Encuestas
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'#'}>
                                            <i className="metismenu-icon">
                                            </i>Consolidado Documentacion
                                        </Link>
                                    </li>
                                    
                                    <li>
                                        <Link to={'#'}>
                                            <i className="metismenu-icon"></i>
                                            otra opcion
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                        </Link>
                                        <ul className="mm-collapse">
                                            <li>
                                                <Link to={'#'}>
                                                    <i className="metismenu-icon">
                                                    </i>1
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'#'}>
                                                    <i className="metismenu-icon">
                                                    </i>2
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'#'}>
                                                    <i className="metismenu-icon">
                                                    </i>3
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            
                            
                        </ul>
                    </div>
              <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}>
                  <div className="ps__thumb-x" tabIndex="0" style={{ left: '0px', bottom: '0px' }}></div>
              </div>
              <div className="ps__rail-y" style={{ top: '0px', height: '555px', right: '0px' }}>
                  <div className="ps__thumb-y" tabIndex="0" style={{ top: '0px', height: '304px' }}></div>
              </div>
          </div>
            </div>
   
   );
}
 
export default MenuDesplegable;