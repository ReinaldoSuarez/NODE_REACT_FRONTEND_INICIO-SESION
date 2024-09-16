import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //creo las variables para capturar la info del usuario, contraseña y logueo para el ingreso
  const [usuario, setUsuario] = useState('')
  const [contraseña, setContraseña] = useState('')
  const [logueado, setlogueado] = useState(false)

  //funciones para controlar el inicio de sesión, cambiar el estado e ingresar nuevos usuarios y contraseñas
  function cambiarUsuario(evento){
    setUsuario(evento.target.value)
  }

  function cambiarContraseña(evento){
    setContraseña(evento.target.value)
  }

  //funcion para alertar cuando un usuario está o no en la base de datos
  async function Ingresar(){
    const peticion = await fetch ('http://localhost:3000/login?correo=' + usuario + '&contrase%C3%B1=' + contraseña)
    if (peticion.ok){
      alert("USUARIO CONECTADO")
      setlogueado(true) 
    }else{
      alert("USUARIO INCORRECTO")
    }
  }

  return (
    <>
      <h1>INICIO DE SESIÓN</h1>
      <input placeholder='Usuario' type="text" name='usuario' id='usuario' value={usuario} onChange={cambiarUsuario}/> 
      <input placeholder='Contraseña' type="password" name='contraseña' id='contraseña' value={contraseña} onChange={cambiarContraseña}/>
      <button onClick={Ingresar}>Ingresar</button>
    </>
  )
}
export default App
