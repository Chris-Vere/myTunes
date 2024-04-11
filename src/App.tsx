import './App.css';
import AlbumsPanel from './components/features/AlbumsPanel/AlbumsPanel';
import ArtistsListColumn from './components/features/ArtistList/ArtistsListColumn';
import Col from './components/layout/Col/Col';
import Layout from './components/layout/Layout';
import Row from './components/layout/Row/Row';

function App() {
  return (
    <Layout>
      <div className="right-panel">
        <section className="player">
        </section>
        <Row>
          <ArtistsListColumn />
          <Col style={{flex: 1}}>
            <AlbumsPanel />
          </Col>
        </Row>
      </div>
    </Layout>
  );
}

export default App;
