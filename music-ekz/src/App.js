import logo from './logo.svg';
import './App.css';
import CreateMusicTrack from './CreateMusicTrack';
import ShowAllMusicTracks from './ShowAllMusicTracks';
import UpdateMusicTrack from './UpdateMusicTrack';

function App() {
  return (
    <div className="App">
      <CreateMusicTrack />
      <ShowAllMusicTracks/>
      <UpdateMusicTrack/>
    </div>
  );
}

export default App;
