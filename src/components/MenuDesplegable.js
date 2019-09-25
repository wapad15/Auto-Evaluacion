import React from 'react';
import { Link } from 'react-router-dom'
const MenuDesplegable = () => {
  return ( 
   
        <div class="app-sidebar sidebar-shadow">
                <div class="scrollbar-sidebar ps ps--active-y">
                    <div class="app-sidebar__inner">
                        <ul class="vertical-nav-menu metismenu">
                            <li class="app-sidebar__heading">MENU</li>
                            <li class="">
                                <Link href="#" aria-expanded="false" >
                                    <i class="metismenu-icon pe-7s-rocket"></i>
                                    AUTO-EVALUACIONES
                                    <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </Link>
                                <ul class="mm-collapse" style={{height: '7.04px'}}>
                                    <li>
                                        <Link to={'Visae-autoE'} class="mm-active">
                                            <i class="metismenu-icon">
                                            </i>Crear
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="dashboards-commerce.html">
                                            <i class="metismenu-icon">
                                            </i>Eliminar
                                        </a>
                                    </li>
                                    <li>
                                        <a href="dashboards-sales.html">
                                            <i class="metismenu-icon">
                                            </i>Listar
                                        </a>
                                  </li>
                                  <li>
                                        <a href="dashboards-crm.html">
                                            <i class="metismenu-icon"></i>
                                            Editar
                                        </a>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <i class="metismenu-icon"></i>
                                            RESULTADOS
                                            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                        </Link>
                                        <ul class="mm-collapse">
                                            <li>
                                                <a href="dashboards-minimal-1.html">
                                                    <i class="metismenu-icon">
                                                    </i>Consolidados
                                                </a>
                                            </li>
                                            <li>
                                                <a href="dashboards-minimal-2.html">
                                                    <i class="metismenu-icon">
                                                    </i>el otro consolidado
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                 </ul>
                            </li>
                            <li class="">
                                <Link href="#" aria-expanded="false">
                                    <i class="metismenu-icon pe-7s-browser"></i>
                                    INSTRUMENTOS
                                    <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </Link>
                              <ul class="mm-collapse" style={{}}>
                                  <li>
                                        <Link href="#">
                                            <i class="metismenu-icon"></i>
                                            Preguntas
                                            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                        </Link>
                                        <ul class="mm-collapse">
                                            <li>
                                                <a href="dashboards-minimal-1.html">
                                                    <i class="metismenu-icon">
                                                    </i>crear
                                                </a>
                                            </li>
                                            <li>
                                                <a href="dashboards-minimal-2.html">
                                                    <i class="metismenu-icon">
                                                    </i>editar
                                                </a>
                                          </li>
                                          <li>
                                                <a href="dashboards-minimal-2.html">
                                                    <i class="metismenu-icon">
                                                    </i>elimnar
                                                </a>
                                            </li>
                                            <li>
                                                <a href="dashboards-minimal-2.html">
                                                    <i class="metismenu-icon">
                                                    </i>listar
                                                </a>
                                            </li>
                                        </ul>
                                  </li>
                                  <li>
                                        <Link href="#">
                                            <i class="metismenu-icon"></i>
                                            Encuestas
                                            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                        </Link>
                                        <ul class="mm-collapse">
                                            <li>
                                          <Link to={'visae-instrumentos'}>
                                                    <i class="metismenu-icon">
                                                    </i>crear
                                                </Link>
                                            </li>
                                            <li>
                                                <a href="dashboards-minimal-2.html">
                                                    <i class="metismenu-icon">
                                                    </i>editar
                                                </a>
                                          </li>
                                          <li>
                                                <a href="dashboards-minimal-2.html">
                                                    <i class="metismenu-icon">
                                                    </i>elimnar
                                                </a>
                                            </li>
                                            <li>
                                                <a href="dashboards-minimal-2.html">
                                                    <i class="metismenu-icon">
                                                    </i>listar
                                                </a>
                                            </li>
                                        </ul>
                                  </li>
                                  <li>
                                        <Link href="#">
                                            <i class="metismenu-icon"></i>
                                            Documentacion
                                            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                        </Link>
                                        <ul class="mm-collapse">
                                            <li>
                                                <a href="dashboards-minimal-1.html">
                                                    <i class="metismenu-icon">
                                                    </i>crear
                                                </a>
                                            </li>
                                            <li>
                                                <a href="dashboards-minimal-2.html">
                                                    <i class="metismenu-icon">
                                                    </i>editar
                                                </a>
                                          </li>
                                          <li>
                                                <a href="dashboards-minimal-2.html">
                                                    <i class="metismenu-icon">
                                                    </i>elimnar
                                                </a>
                                            </li>
                                            <li>
                                                <a href="dashboards-minimal-2.html">
                                                    <i class="metismenu-icon">
                                                    </i>listar
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="#" aria-expanded="false">
                                    <i class="metismenu-icon pe-7s-plugin"></i>
                                    RESULTADOS
                                    <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </Link>
                                <ul class="mm-collapse">
                                    <li>
                                        <a href="apps-mailbox.html">
                                            <i class="metismenu-icon">
                                            </i>Consolidados de Encuestas
                                        </a>
                                    </li>
                                    <li>
                                        <a href="apps-chat.html">
                                            <i class="metismenu-icon">
                                            </i>Consolidado Documentacion
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <Link href="#">
                                            <i class="metismenu-icon"></i>
                                            otra opcion
                                            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                        </Link>
                                        <ul class="mm-collapse">
                                            <li>
                                                <a href="apps-forum-list.html">
                                                    <i class="metismenu-icon">
                                                    </i>1
                                                </a>
                                            </li>
                                            <li>
                                                <a href="apps-forum-threads.html">
                                                    <i class="metismenu-icon">
                                                    </i>2
                                                </a>
                                            </li>
                                            <li>
                                                <a href="apps-forum-discussion.html">
                                                    <i class="metismenu-icon">
                                                    </i>3
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            
                            
                        </ul>
                    </div>
                <div class="ps__rail-x" style={{left: '0px', bottom: '0px'}}><div class="ps__thumb-x" tabindex="0" style={{left: '0px', bottom: '0px'}}></div></div><div class="ps__rail-y" style={{top: '0px', height: '555px', right: '0px'}}><div class="ps__thumb-y" tabindex="0" style={{top: '0px', height: '304px'}}></div></div></div>
            </div>
   
   );
}
 
export default MenuDesplegable;