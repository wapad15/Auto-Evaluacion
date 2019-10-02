import React, { Component } from 'react'
import Header from './Header/Header';
import MenuDesplegable from './MenuDesplegable';
import { Link } from 'react-router-dom';

class ListarAutoE extends Component {
  // crear el SingleAutoevaliacion donde cada "tr" es una fila y representa una autoevaluacion
  //  ejemplo de metodo para mostrar  el listado de autoevaluaciones 
  /* mostrarAutoE = () => {
     const posts = this.props.posts;
 
     if (posts.length === 0) return null;
     
     return (
       <React.Fragment>
         {Object.keys(posts).map(key => (
           <Post
             key={key}
             info={posts[key]}
             borrarPost = {this.props.borrarPost}
           />
         ))}
       </React.Fragment>
     )
   }*/


  render() {
    return (
      <React.Fragment>
        <Header
          nombre='are correa'
          rol='VISAE'
        />
        <div className="app-main">
          <MenuDesplegable />
          <div className="app-main__outer">
            <div className="app-main__inner">
              <div className="row">
                <div className=" col-lg-12 col-md-6">
                  <div className="main-card mb-3 card">
                    <div className="card-body">
                      <h5 className="card-title">AutoEvaluaciones </h5>
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">NOMBRE</th>
                            <th scope="col">PERIODO</th>
                            <th scope="col">ACCIONES</th>
                          </tr>
                        </thead>
                        <tbody>

                          <tr>
                            <td>ejemplo id-1</td>
                            <td>nombre 1</td>
                            <td>periodo</td>
                            <td>
                              <Link to={`#`} className="btn btn-primary">Ver</Link>
                              <Link to={`#`} className="btn btn-warning">Editar</Link>
                              <button onClick={this.confirmarEliminacion}
                                type="button" className="btn btn-danger">Borrar</button>

                            </td>
                          </tr>


                          <tr>
                            <td>ejemplo id-2</td>
                            <td>nombre 2</td>
                            <td>periodo</td>
                            <td>
                              <Link to={`#`} className="btn btn-primary">Ver</Link>
                              <Link to={`#`} className="btn btn-warning">Editar</Link>
                              <button onClick={this.confirmarEliminacion}
                                type="button" className="btn btn-danger">Borrar</button>

                            </td>
                          </tr>



                        </tbody>
                      </table>
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

export default ListarAutoE;