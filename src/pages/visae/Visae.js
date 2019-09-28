import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import MenuDesplegable from '../../components/MenuDesplegable';

/*
const fondo = '/assets/img/logoGrande.jpeg'
<div style={{height: '100%', width: '100%'}}>
        <div style={{
          backgroundImage: `url(${fondo})`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}>
        
        
          </div>
          </div> */

class Visae extends Component {

  render() {
    
    return (
      <React.Fragment>
        <Header
          nombre='are correa'
          rol= 'VISAE'
        />
        <div className="app-main">
          <MenuDesplegable />
          </div>
      </React.Fragment>
    );
  }
}

export default Visae;