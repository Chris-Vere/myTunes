import './App.css';

function App() {
  return (
    <main className="outer-wrap">
      <aside className="sidebar">
        <nav className="library-nav">
          <button className="btn btn-text btn-library-nav --selected">Artists</button>
          <button className="btn btn-text btn-library-nav">Albums</button>
          <button className="btn btn-text btn-library-nav">Songs</button>
        </nav>
      </aside>
      <div className="right-panel">
        <section className="player">

        </section>
        <div className="row">
          <div className="col artists-list" style={{width: '25%'}}>
            <ul className="artist-list">
              <li className="artist-list-item">AC-DC</li>
              <li className="artist-list-item -selected">The Acacia Strain</li>
              <li className="artist-list-item">Aesop Rock</li>
              <li className="artist-list-item">Alice In Chains</li>
            </ul>
          </div>
          <div className="col" style={{flex: 1}}>
            <section className="albums-panel">
              <header className="artist-header">
                <div className="panel-line">
                  <h2 className="artist-heading">Alice In Chains</h2>
                  <button className="btn btn-circle"></button>
                </div>
                <p className="genre">Alternative</p>
                <p>12 songs, 1:07:16</p>
              </header>
              <div className="album-grid">
                <div className="album-grid-item">
                  <div className="album-artwork"></div>
                  <h3 className="album-title">The Devil Put Dinosaurs Here</h3>
                  <p className="album-date">2013</p>
                </div>
                <div className="album-grid-item">
                  <div className="album-artwork"></div>
                  <h3 className="album-title">Black Gives Way to Blue</h3>
                  <p className="album-date">2009</p>
                </div>
                <div className="album-grid-item">
                  <div className="album-artwork"></div>
                  <h3 className="album-title">MTV Unplugged (Live)</h3>
                  <p className="album-date">1996</p>
                </div>
                <div className="album-grid-item">
                  <div className="album-artwork"></div>
                  <h3 className="album-title">Alice In Chains</h3>
                  <p className="album-date">1995</p>
                </div>
                <div className="track-well">
                  <ol className="track-list">
                    <li className="track-list-item">Hollow <time>5:41</time></li>
                    <li className="track-list-item -selected">Pretty Done <time>4:36</time></li>
                    <li className="track-list-item">Stone <time>4:32</time></li>
                    <li className="track-list-item">Voices <time>5:43</time></li>
                    <li className="track-list-item">The Devil Put Dinosaurs Here <time>6:39</time></li>
                    <li className="track-list-item">Lab Monkey <time>5:58</time></li>
                    <li className="track-list-item">Low Ceiling <time>5:15</time></li>
                    <li className="track-list-item">Breath on a Window <time>5:20</time></li>
                    <li className="track-list-item">Scalpel <time>5:21</time></li>
                    <li className="track-list-item">Phantom Limb <time>7:08</time></li>
                    <li className="track-list-item">Hung on a Hook <time>5:35</time></li>
                    <li className="track-list-item">Choke <time>5:44</time></li>
                  </ol>
                </div>
                <div className="album-grid-item">
                  <div className="album-artwork"></div>
                  <h3 className="album-title">Jar of Flies - EP</h3>
                  <p className="album-date">1994</p>
                </div>
                <div className="album-grid-item">
                  <div className="album-artwork"></div>
                  <h3 className="album-title">Dirt</h3>
                  <p className="album-date">1992</p>
                </div>
                <div className="album-grid-item">
                  <div className="album-artwork"></div>
                  <h3 className="album-title">Facelift</h3>
                  <p className="album-date">1990</p>
                </div>
              </div>
            </section>
          </div>
        </div>
        
      </div>
    </main>
  );
}

export default App;
