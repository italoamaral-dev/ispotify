import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <section id="corner">
        <div className="background-corner"></div>
        <div className="name">iSpotify ®</div>
        <button className="artists" id="button"><img src="src/images/artists-icon.png" id="icon" alt="radio" width="16" height="16" />Artistas</button>
        <button className="liked-songs" id="button"><img src="src/images/favorite-icon.svg" id="icon" alt="heart" width="16" height="16" />Músicas Curtidas</button>
        <button className="logout" id="button"><img src="src/images/logout-icon.svg" id="icon" alt="door" width="16" height="16" />Logout</button>
      </section>

      <main>
        <div id="artists-page">Artistas</div>

        <section id="artists-profile">
          <div className="artist1-box"></div>
          <div className="artist2-box"></div>
          <div className="artist3-box"></div>
          <div className="artist4-box"></div>
          <div className="artist5-box"></div>
          <div className="artist6-box"></div>
          <div className="artist7-box"></div>
          <div className="artist8-box"></div>
          <div className="artist9-box"></div>
          <div className="artist10-box"></div>

          <img src="src/images/sabrina-carpenter.avif" className="artist1-pic" alt="Sabrina Carpenter" width="160" height="160" />
          <img src="src/images/theweeknd.jpg" className="artist2-pic" alt="The Weeknd" width="160" height="160" />
          <img src="src/images/harry-styles.webp" className="artist3-pic" alt="Harry Styles" width="160" height="160" />
          <img src="src/images/album-billie.jpg" className="artist4-pic" alt="Billie Eilish" width="160" height="160" /> 
          <img src="src/images/ariana-grande.jpg" className="artist5-pic" alt="Ariana Grande" width="160" height="160" />
          <img src="src/images/bruno-mars.jpg" className="artist6-pic" alt="Bruno Mars" width="160" height="160" />
          <img src="src/images/am.jpeg" className="artist7-pic" alt="Artic Monkeys" width="160" height="160" />
          <img src="src/images/gracie-abrams.jpg" className="artist8-pic" alt="Gracie Abrams" width="160" height="160" />
          <img src="src/images/lady-gaga.jpg" className="artist9-pic" alt="Lady Gaga" width="160" height="160" />
          <img src="src/images/beyonce.webp" className="artist10-pic" alt="Beyoncé" width="160" height="160" />

          <div className="artist1">
            <p className="artist1-name">Sabrina Carpenter</p>
            <p className="artist1-section">Artista</p>

          </div>
          <div className="artist2">       
            <p className="artist2-name">The Weeknd</p>
            <p className="artist2-section">Artista</p>

          </div>
          <div className="artist3">          
            <p className="artist3-name">Harry Styles</p>
            <p className="artist3-section">Artista</p>

          </div>
          <div className="artist4">
            <p className="artist4-name">Billie Eilish</p>
            <p className="artist4-section">Artista</p>

          </div>
          <div className="artist5">
            <p className="artist5-name">Ariana Grande</p>
            <p className="artist5-section">Artista</p>

          </div>
          <div className="artist6">
            <p className="artist6-name">Bruno Mars</p>
            <p className="artist6-section">Artista</p>

          </div>
          <div className="artist7">
            <p className="artist7-name">Artic Monkeys</p>
            <p className="artist7-section">Artista</p>

          </div>
          <div className="artist8">
            <p className="artist8-name">Gracie Abrams</p>
            <p className="artist8-section">Artista</p>

          </div>
          <div className="artist9">
            <p className="artist9-name">Lady Gaga</p>
            <p className="artist9-section">Artista</p>

          </div>
          <div className="artist10">
            <p className="artist10-name">Beyoncé</p>
            <p className="artist10-section">Artista</p>

          </div>
        </section>

      </main>
    </>
  )
}

export default App
