import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import App from './App.tsx';
import ArtistsPage from './pages/Artists.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ArtistsPage />} />
          <Route path=':artistId' element={<ArtistsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
