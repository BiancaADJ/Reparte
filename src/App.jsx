import { useEffect, useState } from "react";
import logo from "../assets/img/letra-r.png"
import user from "../assets/img/usuario.png"
import moeda from "../assets/img/moeda.png"
import lupa from "../assets/img/lupa.png"
import sifrao from "../assets/img/sifrao.png"
import reparte_log from "../assets/img/campanha-digital.png"
import caridade from "../assets/img/caridade.png"
import missao from "../assets/img/missao.png"
import ads from "../assets/img/anuncios-online.png"
import adicionar from "../assets/img/adicionar.png"

import logo_night from "../assets/img/letra-r-night.png"
import user_night from "../assets/img/usuario-night.png"
// import moeda_night from "../assets/img/moeda-night.png"
import lupa_night from "../assets/img/lupa-night.png"
import sifrao_night from "../assets/img/sifrao-night.png"
import reparte_log_night from "../assets/img/campanha-digital-night.png"
import caridade_night from "../assets/img/caridade-night.png"
import missao_night from "../assets/img/missao-night.png"
import ads_night from "../assets/img/anuncios-online-night.png"
import adicionar_night from "../assets/img/adicionar-night.png"
import "../assets/css/App.css"

function App(){
  /* Variáveis e constantes */

  return ( /* Página */
    <>
      <header className="header App-header flex-line sticky">
        <div>
          <picture className="picture">
            <source srcSet={logo_night} media="(prefers-color-scheme: dark)"/>
            <img src={logo} alt="Logo"/>
          </picture>
        </div>
        <div className="line-center">
          <div className="relative border">
            <picture>
              <source srcSet={lupa_night} media="(prefers-color-scheme: dark)"/>
              <img src={lupa} alt="lupa"/>
            </picture>
            <input className="relative" type="text"/></div>
          </div>
        <div className="line-center">
          <a href="# "><i className="line-center">
            <picture>
              <source srcSet={sifrao_night} media="(prefers-color-scheme: dark)"/>
              <img src={sifrao} alt="sifrao"/>
            </picture>
            <output>0.000.000,00</output>
          </i></a>
          <a href="#Página de Usuário">
            <picture>
              <source srcSet={user_night} media="(prefers-color-scheme: dark)"/>
              <img src={user} alt="user"/>
            </picture>
          </a>
        </div>
      </header>

      <section className="column-center">
        <output><h2>Reparte</h2></output>
        <output><h1>0.000.000,00</h1></output>
        <p>Se sobra, acumula. Se falta, reparte.</p>
      </section>

      <section>
        <div className="flex-around">
          <div className="column-center" alt="Caridade" title="Caridade">
            <h3>Caridade</h3>
            <picture>
              <source srcSet={caridade_night} media="(prefers-color-scheme: dark)"/>
              <img src={caridade}/>
            </picture>
          </div>
          <div className="column-center" alt="Reparte Log" title="Reparte Log">
            <h3>Reparte Log</h3>
            <picture>
              <source srcSet={reparte_log_night} media="(prefers-color-scheme: dark)"/>
              <img src={reparte_log}/>
            </picture>
          </div>
          <div className="column-center" alt="Missões" title="Missões">
            <h3>Missões</h3>
            <picture>
              <source srcSet={missao_night} media="(prefers-color-scheme: dark)"/>
              <img src={missao}/>
            </picture>
          </div>
        </div>
        <div className="flex-around">
          <div className="column-center" alt="Acúmulo" title="Acúmulo">
            <h3>Acúmulo</h3>
            <picture>
              <source srcSet={ads_night} media="(prefers-color-scheme: dark)"/>
              <img src={ads}/>
            </picture>
          </div>
          <div className="column-center" alt="Adicionar" title="Adicionar">
            <h3>+</h3>
            <picture>
              <source srcSet={adicionar_night} media="(prefers-color-scheme: dark)"/>
              <img src={adicionar}/>
            </picture>
          </div>
          <div className="column-center" alt="Adicionar" title="Adicionar">
            <h3>+</h3>
            <picture>
              <source srcSet={adicionar_night} media="(prefers-color-scheme: dark)"/>
              <img src={adicionar}/>
            </picture>
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
