import { Outlet } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Row from './components/layout/Row/Row';
import './App.css';
import NowPlayingProvider from './context/NowPlayingContext';

function App() {
  return (
    <NowPlayingProvider>
      <Layout>
        <div className="flex flex-col grow">
          <section className="h-20 bg-neutral-700">
            {/* player */}
          </section>
          <Row>
            <Outlet />
          </Row>
        </div>
      </Layout>
    </NowPlayingProvider>
  );
}

export default App;
