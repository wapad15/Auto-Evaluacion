import React from 'react';
import Header from './Header/Header';
import MenuDesplegable from './MenuDesplegable';

const VisaeEncuesta = () => {
   
   return ( 
     <React.Fragment>
       <Header />
       <div class="app-main">
         <MenuDesplegable />
         <div class="app-main__outer">
          <div class="app-main__inner">
       <div class="card">
         <div id="headingOne" class="card-header">
           <span class="form-heading">Construccion de Encuentas</span>
         </div>
         <div data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne" class="collapse show">
           <div class="card-body">
             <form>
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
                 <div class="col-md-12 " style={{ margin: '25px' }}>
                   <div class="position-relative form-group">
                     <input name="check" type="checkbox" class="form-check-input" />
                     <label for="exapleCheck" class="form-check-label">Pregunta 1</label>
                   </div>
                   <div class="position-relative form-group">
                     <input name="check" type="checkbox" class="form-check-input" />
                     <label for="exapleCheck" class="form-check-label">Pregunta 2</label>
                   </div>
                   <div class="position-relative form-group">
                     <input name="check" type="checkbox" class="form-check-input" />
                     <label for="exapleCheck" class="form-check-label">Pregunta 3</label>
                   </div>
                   <div class="position-relative form-group">
                     <input name="check" type="checkbox" class="form-check-input" />
                     <label for="exapleCheck" class="form-check-label">Pregunta 4</label>
                   </div>
                   <div class="position-relative form-group">
                     <input name="check" type="checkbox" class="form-check-input" />
                     <label for="exapleCheck" class="form-check-label">Pregunta 5</label>
                   </div>
                   <div class="position-relative form-group">
                     <input name="check" type="checkbox" class="form-check-input" />
                     <label for="exapleCheck" class="form-check-label">Pregunta 6</label>
                   </div>
                 </div>
               </div>
               <button class="mt-1 btn btn-primary">enviar</button>
             </form>
           </div>
         </div>
         </div>
           </div>
         </div>
         </div>
     </React.Fragment>
    );
 }
  
 export default VisaeEncuesta;