import { Outlet } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import NowPlayingProvider from './context/NowPlayingContext';
import AudioContextProvider from './context/AudioContext';
import './App.css';

function App() {
  return (
    <AudioContextProvider>
      <NowPlayingProvider>
        <MainLayout>
          <Outlet />
        </MainLayout>
      </NowPlayingProvider>
    </AudioContextProvider>
  );
}

export default App;
