import './HomePage.scss';
import Header from '../components/Header/Header'
import Characters from '../components/Characters/Characters'
import CharactersApi from '../classes/characters-api'

function HomePage() {

// const videosApi = new VideosApi(serverURL);
  return (
    <>
      <Header />
      <Characters />
    </>
  );
}

export default HomePage;