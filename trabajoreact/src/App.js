import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
//Importar componentes
import TextBoxOculto from './components/TextBoxOculto';

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
        <section className="componentes">
          <TextBoxOculto/>
        </section>
      </header>
     
    </div>
  );
}

export default App;
