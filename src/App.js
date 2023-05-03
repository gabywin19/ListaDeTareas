import React from 'react';
import './App.css';
import ListaDeTareas from './componets/ListaDeTareas';


function App() {
  return (
    <div className="aplicacion-tareas">
      <div><h1>Lista De Tareas</h1></div>
      <div className='tareas-lista-principal'>
       <h2>Mis Tareas</h2>
       <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
