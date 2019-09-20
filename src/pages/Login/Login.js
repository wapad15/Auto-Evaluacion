import React, { Component } from 'react'
import {Link } from 'react-router-dom'

class Login extends Component {

  render() { 
    return ( 
      <div className="app-container app-theme-white body-tabs-shadow">
        <div className="app-container">
            <div className="h-100">
                <div className="h-100 no-gutters row">
                    <div className="d-none d-lg-block col-lg-4">
                        <div className="slider-light">
                            <div className="slick-slider">
                                <div>
                                    <div className="position-relative h-100 d-flex justify-content-center align-items-center bg-plum-plate" >
                                            <div className="slide-img-bg">   </div>
                                            <div className="slider-content">
                                                <h3>Titulo Para imagen</h3>
                                                <p>texto para documentacion de la imagen</p>
                                            </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="position-relative h-100 d-flex justify-content-center align-items-center bg-premium-dark" >
                                        <div className="slide-img-bg" >
                                        </div>
                                            <div className="slider-content">
                                                <h3>Titulo Para imagen 2</h3>
                                                <p>texto para documentacion de la imagen 2</p>
                                            </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="position-relative h-100 d-flex justify-content-center align-items-center bg-sunny-morning" >
                                        <div className="slide-img-bg" >     
                                        </div>
                                            <div className="slider-content">
                                                <h3>Titulo Para imagen 3</h3>
                                                <p>texto para documentacion de la imagen 3</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-100 d-flex bg-white justify-content-center align-items-center col-md-12 col-lg-8">
                        <div className="mx-auto app-login-box col-sm-12 col-md-10 col-lg-9">
                                <div className="conatiner">
                                    <img  src ="assets/img/logo.jpeg" alt="UNAD"/> 
                            </div>
                            <h4 className="mb-0">
                                <span className="d-block mt-4">Bienvenido</span>
                                <span>Inicia sesión en tu cuenta.</span>
                            </h4>
                            <h6 className="mt-3">¿Sin cuenta? <Link to={'/'} className="text-primary" >Registrate ahora</Link></h6>
                            <div className="divider row"></div>
                            <div>
                                <form className="">
                                    <div className="form-row">
                                        <div className="col-md-6">
                                                <div className="position-relative form-group">
                                                    <label htmlFor="exampleEmail" className="">Correo</label>
                                                    <input name="email" id="exampleEmail" placeholder="Correo aqui..." type="email" className="form-control" />
                                                </div>
                                        </div>
                                        <div className="col-md-6">
                                                <div className="position-relative form-group">
                                                    <label htmlFor="examplePassword" className="">Contraseña</label>
                                                    <input name="password" id="examplePassword" placeholder="Contraseña aqui..." type="password"
                                                    className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                        <div className="position-relative form-check">
                                            <input name="check" id="exampleCheck" type="checkbox" className="form-check-input" />
                                            <label htmlFor="exampleCheck" className="form-check-label">Recordar</label>
                                        </div>
                                    <div className="divider row"></div>
                                    <div className="d-flex align-items-center">
                                            <div className="ml-auto">
                                                <Link to={'/'} className="btn-lg btn btn-link" >
                                                    Recuperar Contraseña
                                                </Link>
                                            <button className="btn btn-primary btn-lg ">Iniciar sesion</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
     );
  }
}
 
export default Login;