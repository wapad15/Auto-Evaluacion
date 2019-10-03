import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown} from '@fortawesome/free-solid-svg-icons'
import './header.css'


class Header extends Component {
    
    render() {
    
        return (
            <React.Fragment>
                <div className="app-header header-shadow">
                    <img className="logo-img" src="assets/img/logo.jpg" alt="LOGO" />

                    <div className="header__pane ml-auto" >
                        <div style={{ margin: '90px' }}>
                            <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="app-header__content">
                        <div className="app-header-right">
                            <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left">
                                        <div className="btn-group">
                                            <Link to={'#'} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="p-0 btn">
                                            <img width="42" className="rounded-circle" src="assets/images/avatars/1.jpg" alt="" />
                                           <FontAwesomeIcon icon={faAngleDown} />
                                            </Link>
                                            
                                        </div>
                                        <div tabIndex="-1" role="menu" aria-hidden="true" className="rm-pointers dropdown-menu-lg dropdown-menu dropdown-menu-right">
                                            <div className="dropdown-menu-header">
                                                <div className="dropdown-menu-header-inner bg-info">
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left">
                                                                <div className="widget-heading">Arellys Correas</div>
                                                                <div className="widget-subheading  opacity-8">ROL</div>
                                                            </div>
                                                            <div className="widget-content-right mr-2">
                                                                <Link to={'/'}>
                                                                    <button
                                                                        className="unad btn-pill btn-shadow btn-shine btn btn-focus">Salir
                                                                </button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="scroll-area-xs" >
                                                <div className="scrollbar-container ps">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item-header nav-item">ALGUN MENSAJE
                                            </li>
                                                        <li className="nav-item-header nav-item">INFORMACION
                                            </li>
                                                        <li className="nav-item">
                                                            <Link to={'#'} className="nav-link">Recuperar Contraseña
                                                </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-content-left  ml-3 header-user-info">
                                        <div className="widget-heading">{this.props.nombre}</div>
                                        <div className="widget-subheading">{this.props.rol}</div>
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

export default Header;