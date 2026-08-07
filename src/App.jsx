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
      <body className='border'>
      <header className='header App-header flex-line'>
        <div className='line-center'><img src={logo} alt='Logo'/></div>
        <div className='line-center'>
          <div className='relative border'>
            <img src={lupa} alt='lupa'/>
            <input className='relative' type='text'/></div>
          </div>
        <div className='line-center'>
          <i className='line-center'><img src={moeda} alt='moeda'/><output>0.000.000,00</output></i>
          <img src={user} alt='user'/>
        </div>
      </header>

      <section>
        <output><h2>Reparte</h2></output>
        <output><h1>0.000.000,00</h1></output>
        <p>Se sobra, acumula. Se falta, reparte.</p>
      </section>

      <section>
        <div className='flex-line'>
          <div className='column-center'>
            <h3>1</h3>
            <img src={moeda} alt='moeda'/>
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
        <div className='flex-line'>
          <div className='column-center'>
            <h3>1</h3>
            <img src={moeda} alt='moeda'/>
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
        <p>footer</p>
      </footer>
      </body></html></>
  )
}

export default App
