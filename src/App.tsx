import { Outlet } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Row from './components/layout/Row/Row';
import './App.css';

function App() {
  return (
    <Layout>
      <div className="right-panel">
        <section className="player">
        </section>
        <Row>
          <Outlet />
        </Row>
      </div>
    </Layout>
  );
}

export default App;
