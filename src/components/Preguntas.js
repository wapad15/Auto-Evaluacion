import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Preguntas extends Component {

// crear el SinglePregunta donde cada "tr" es una fila y representa una pregunta
  //  ejemplo de metodo para mostrar  el listado de preguntas
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

        <div className="row">
          <div className=" col-lg-12 col-md-6">
            <div className="main-card mb-3 card">
              <div className="card-body">
                <h5 className="card-title">Encuesta de (Pej: sistemas)</h5>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Pregunta</th>
                      <th scope="col">ACCIONES</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>contenido de pregunta muchos ejemplos, aqui va el contenido de las preguntas  </td>
                      <td>
                        <Link to={`#`} className="btn btn-warning">Editar</Link>
                        <button onClick={this.confirmarEliminacion}
                          type="button" className="btn btn-danger">Borrar</button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>contenido de pregunta muchos ejemplos, aqui va el contenido de las preguntas</td>
                      <td>
                        <Link to={`#`} className="btn btn-warning">Editar</Link>
                        <button onClick={this.confirmarEliminacion}
                          type="button" className="btn btn-danger">Borrar</button>
                      </td>
                    </tr>

                    <tr>
                      <td>3</td>
                      <td>contenido de pregunta muchos ejemplos, aqui va el contenido de las preguntas</td>
                      <td>
                        <Link to={`#`} className="btn btn-warning">Editar</Link>
                        <button onClick={this.confirmarEliminacion}
                          type="button" className="btn btn-danger">Borrar</button>
                      </td>
                    </tr>



                  </tbody>
                </table>
                <button className="mt-4 btn btn-primary">añadir pregunta</button>
              </div>
            </div>
          </div>
        </div>


      </React.Fragment>
    );
  }
}

export default Preguntas;