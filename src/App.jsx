import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
    <section id="corner">
      <div className="background-corner"></div>
      <div className="name">iSpotify</div>
      <button className="artists">Artistas</button>
      <button className="liked-songs">Músicas Curtidas</button>
      <button className="Logout">Logout</button>
    </section>
    
    <main>
      <div id="artists-page">Artistas</div>

      <section id="artists-profile">
        <div className="artist1">
          <img className="artist1-image"></img>
          <p className="artist1-name">Nome do Artista</p>
          <p className="artist1-section">Artista</p>

        </div>
        <div className="artist2">
          <img className="artist2-image"></img>
          <p className="artist2-name">Nome do Artista</p>
          <p className="artist2-section">Artista</p>

        </div>
        <div className="artist3">
          <img className="artist3-image"></img>
          <p className="artist3-name">Nome do Artista</p>
          <p className="artist3-section">Artista</p>

        </div>
        <div className="artist4">
          <img className="artist4-image"></img>
          <p className="artist4-name">Nome do Artista</p>
          <p className="artist4-section">Artista</p>

        </div>
        <div className="artist5">
          <img className="artist5-image"></img>
          <p className="artist5-name">Nome do Artista</p>
          <p className="artist5-section">Artista</p>

        </div>
        <div className="artist6">
          <img className="artist6-image"></img>
          <p className="artist6-name">Nome do Artista</p>
          <p className="artist6-section">Artista</p>

        </div>
        <div className="artist7">
          <img className="artist7-image"></img>
          <p className="artist7-name">Nome do Artista</p>
          <p className="artist7-section">Artista</p>

          </div>   
        <div className="artist8">
          <img className="artist8-image"></img>
          <p className="artist8-name">Nome do Artista</p>
          <p className="artist8-section">Artista</p>

        </div>
        <div className="artist9">
          <img className="artist9-image"></img>
          <p className="artist9-name">Nome do Artista</p>
          <p className="artist9-section">Artista</p>

        </div>
        <div className="artist10">
          <img className="artist10-image"></img>
          <p className="artist10-name">Nome do Artista</p>
          <p className="artist10-section">Artista</p>
          
        </div>
      </section>

    </main>
    </>
  )
}

export default App
