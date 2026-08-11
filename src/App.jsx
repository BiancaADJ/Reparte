import { useEffect, useState } from "react";
import logo from '../assets/img/letra-r.png'
import user from '../assets/img/usuario.png'
import moeda from '../assets/img/moeda.png'
import lupa from '../assets/img/lupa.png'
import sifrao from '../assets/img/sifrao.png'
import reparte_log from "../assets/img/campanha-digital.png"
import caridade from "../assets/img/caridade.png"
import missao from "../assets/img/missao.png"
import ads from "../assets/img/anuncios-online.png"
import '../assets/css/App.css'

function App(){
  /* Variáveis e constantes */

  return ( /* Página */
    <>
      <header className='header App-header flex-line sticky'>
        <div className='line-center'><img src={logo} alt='Logo'/></div>
        <div className='line-center'>
          <div className='relative border'>
            <img src={lupa} alt='lupa'/>
            <input className='relative' type='text'/></div>
          </div>
        <div className='line-center'>
          <a href='# '><i className='line-center'>
            <img src={sifrao} alt='sifrao'/>
            <output>0.000.000,00</output>
          </i></a>
          <a href="#Página de Usuário"><img src={user} alt='user'/></a>
        </div>
      </header>

      <section className='column-center'>
        <output><h2>Reparte</h2></output>
        <output><h1>0.000.000,00</h1></output>
        <p>Se sobra, acumula. Se falta, reparte.</p>
      </section>

      <section>
        <div className='flex-around'>
          <div className='column-center'>
            <h3>Caridade</h3>
            <img src={caridade} alt='moeda'/>
          </div>
          <div className='column-center'>
            <h3>Reparte Log</h3>
            <img src={reparte_log} alt='moeda'/>
          </div>
          <div className='column-center'>
            <h3>Missões</h3>
            <img src={missao} alt='moeda'/>
          </div>
        </div>
        <div className='flex-around'>
          <div className='column-center'>
            <h3>Acúmulo</h3>
            <img src={ads} alt='moeda'/>
          </div>
          <div className='column-center'>
            <h3>2</h3>
            <img src={moeda} alt='moeda'/>
          </div>
          <div className='column-center'>
            <h3>3</h3>
            <img src={moeda} alt='moeda'/>
          </div>
        </div>
      </section>

      <section></section>

      <footer>

      </footer>
    </>
  )
}

export default App
