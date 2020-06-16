import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
//Importar componentes
import MiComponente from './components/MiComponente';

function holaMundo (nombre, edad) {
  var presentacion  = (
  <div>
    <h2>Hola, soy {nombre}</h2>
    <h3>Tengo {edad}</h3>
  </div>
  );
  return presentacion;
}

function App() {
  var nombre = "Sebastian Mayorga";
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola bienvenido a nuestra aplicación creada con react
        </p>
        {holaMundo(nombre,21)}
        <section className="componentes">

          <MiComponente/>

        </section>
      </header>
     
    </div>
  );
}

export default App;
