import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InicioSesion } from './Componentes/InicioSesion';
import { Registro } from './Componentes/Registro';
import { Eventos } from './Componentes/Eventos';
import { Historial } from './Componentes/Historial';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Registro/>
  </React.StrictMode>,
)
