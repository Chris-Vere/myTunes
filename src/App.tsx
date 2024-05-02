import { Outlet } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Row from './components/layout/Row/Row';
import './App.css';
import NowPlayingProvider from './context/NowPlayingContext';
import Player from './components/features/Player/Player';

function App() {
  return (
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
  );
}

export default App;
