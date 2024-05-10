import { Outlet } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Row from './components/layout/Row/Row';
import './App.css';
import NowPlayingProvider from './context/NowPlayingContext';
import Player from './components/features/Player/Player';
import AudioContextProvider from './context/AudioContext';

function App() {
  return (
    <AudioContextProvider>
      <NowPlayingProvider>
        <Layout>
          <div className="flex flex-col grow">
            <Player />
            <Row>
              <Outlet />
            </Row>
          </div>
        </Layout>
      </NowPlayingProvider>
    </AudioContextProvider>
  );
}

export default App;
