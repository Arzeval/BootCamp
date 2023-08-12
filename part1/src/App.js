
import './App.css';

import Mensaje from './Mensaje.js';
const Description = () => {
  return <p>Esta es mi primera prueba con react! Espero que no sea la ultima hehe</p>
}
const App = () => {
 
  return (
    <div className="App">
      <Mensaje msg='Estamos vivos pa' />
      <Mensaje msg='Otro mensaje'/>
     
      <Description></Description>
    <h1> Mi primera app de React</h1>
   
    
    </div>
  );
}

export default App;
