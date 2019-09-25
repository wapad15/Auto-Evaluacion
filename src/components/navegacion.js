import React  from 'react'
import { Link } from 'react-router-dom';


const Navegacion = () => {
  return ( 
    <div class="nav nav-pills" style={{margin: '20px'}}>
      <Link to={'Visae-autoE'} class="nav-link ">Crear Auto-evaluacion</Link>
      <Link to={'visae-instrumentos'} class="nav-link">Diseño de Instrumentos</Link>
      <Link to={'visae-consulta'} class="nav-link">Consultar resultados de encuestas</Link>
      <Link  to={'visae-resultados'}  class="nav-link">Consultar resultados de autoevaluacion</Link>
      <Link disabled="" to={'#'}  class="nav-link disabled">--</Link>
    </div>
   );
}
 
export default Navegacion;