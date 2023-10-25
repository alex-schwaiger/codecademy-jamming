import { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

const App = () => {
  const [plalistName, setPlaylistName] = useState('New Playlist');

  const [searchResult, setSearchResults] = useState([
    {
      name: 'HAPPY',
      artist: 'NF',
      album: 'HOPE',
      id: 'HAPPY',
      isSelectedToPlaylist: false,
    },
    {
      id: 'MOTTO',
      name: 'MOTTO',
      artist: 'NF',
      album: 'HOPE',
      isSelectedToPlaylist: false,
    },
    {
      id: 'aksdjfl',
      name: 'sdfads',
      artist: 'NF',
      album: 'HOPE',
      isSelectedToPlaylist: false,
    },
    {
      id: 'MOowiuerTTO',
      name: 'aslkdjflsdjOTTO',
      artist: 'NF',
      album: 'HOPE',
      isSelectedToPlaylist: false,
    },
  ]);

  const [playListTracks, setPlaylistTracks] = useState([
    {
      id: 'MOTTO',
      name: 'MOTTO',
      artist: 'NF',
      album: 'HOPE',
      isSelectedToPlaylist: true,
    },
  ]);

  const addTrack = (track) => {
    if (!track.id) {
      console.error('Track does not have an id property');
      return;
    }
    if (playListTracks.some((tracks) => tracks.id === track.id)) return;
    track.isSelectedToPlaylist = true;
    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
  };

  const removeTrack = (track) => {
    track.isSelectedToPlaylist = false;
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id),
    );
  };

  return (
    <div>
      <Header />
      <main className='container mx-auto'>
        <section className='py-14'>
          <Search btnContent='Submit' btnType='Submit' />
          <section className='grid gap-44 pt-14 md:grid-cols-2'>
            <SearchResults results={searchResult} addTrack={addTrack} />
            <Playlist
              setPlaylistName={setPlaylistName}
              defaultPlaylistName={plalistName}
              playlistTracks={playListTracks}
              removeTrack={removeTrack}
            />
          </section>
        </section>
      </main>
    </div>
  );
};

export default App;
