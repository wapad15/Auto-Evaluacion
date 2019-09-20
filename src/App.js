import React, {Component} from 'react';
import Router from './components/Router';

class App extends Component {
  render() {
return (
    <div className="App">
      <React.Fragment>
        <Router/>
      </React.Fragment>
    </div>
  );
  }
  
}

export default App;
