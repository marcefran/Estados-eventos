import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registro from './Componentes/Registro'

function App() {
  const [alert, setAlert] = useState ({msg: "", color: ""});
  return(
<Registro alert = {alert} setAlert = {setAlert}/>
);

}


export default App
