import './HomePage.scss';
import Header from '../components/Header/Header'
import Characters from '../components/Characters/Characters'
import CharactersApi from '../classes/characters-api'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function HomePage() {

  const [characters, setCharacters] = useState([]);
  const [hasFetchError, setHasFetchError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchCharacters = async () => {
      const getCharactersApi = new CharactersApi();

      try {
        const response = await getCharactersApi.getCharacters();
        setCharacters(response.data);

      } catch (error) {
        console.error("Only susuwatari here", error);
        setHasFetchError(true);
      }
    };
    fetchCharacters();
  }, [id])

  if (hasFetchError === true) {
    return (
      <p>
        I hate the Beatles. 
      </p>
    );
  }

  if (characters === null) {
    return <p>Loading👺👺👺</p>
  }


// const videosApi = new VideosApi(serverURL);
  return (
    <>
      <Header />
      <Characters 
      characters={characters}
      
      />
    </>
  );
}

export default HomePage;