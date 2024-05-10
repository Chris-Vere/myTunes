import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import ArtistLayout from "../layouts/ArtistsLayout";
import ArtistsPage from "../pages/Artists";
import ArtistPage from "../pages/Artist";
import SongsPage from "../pages/Songs";
import AlbumsPanel from "../components/features/AlbumsPanel/AlbumsPanel";
import AlbumsPage from "../pages/Albums";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<h1>Homepage</h1>} />
          <Route path="artists" element={<ArtistLayout />}>
            <Route index element={<ArtistsPage />} />
            <Route path=":artistId" element={<ArtistPage />} />
            <Route path=":artistId/albums/" element={<AlbumsPanel />} />
          </Route>
          <Route path="albums" element={<AlbumsPage />} />
          <Route path="songs" element={<SongsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
