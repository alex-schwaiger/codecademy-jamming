import Header from './components/Header';
import Search from './components/Search';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import { PlaylistContextComponent } from './context/userContext';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main className='container mx-auto px-8'>
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
      <Footer />
    </>
  );
};

export default App;
