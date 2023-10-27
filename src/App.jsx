import Header from './components/Header';
import Search from './components/Search';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import { PlaylistContextComponent } from './context/userContext';

const App = () => {
  return (
    <div>
      <Header />
      <main className='container mx-auto'>
        <section className='py-14'>
          <PlaylistContextComponent>
            <Search btnContent='Submit' btnType='Submit' />
            <section className='grid gap-44 pt-14 md:grid-cols-2'>
              <SearchResults />
              <Playlist />
            </section>
          </PlaylistContextComponent>
        </section>
      </main>
    </div>
  );
};

export default App;
