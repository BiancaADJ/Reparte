import { useState } from 'react'
import logo from '../assets/img/letra-r.png'
import user from '../assets/img/usuario.png'
import moeda from '../assets/img/moeda.png'
import lupa from '../assets/img/lupa.png'
import '../assets/css/App.css'

function App(){
  /* Variáveis e constantes */

  return ( /* Página */
    <><html>
      <body>
      <header className="header App-header">
        <div className=""><img src={logo} alt="Logo"/></div>
        <div className=""><img src={lupa} alt="lupa" /><input type="text"/></div>
        <div className="">
          <i><img src={moeda} alt="moeda"/><output>0.000.000,00</output></i>
          <img src={user} alt="user"/>
        </div>
      </header>

      <section></section>
      </body></html></>
  )
}

export default App
