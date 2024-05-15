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
    const getCharactersApi = new CharactersApi('http://localhost:8080/');

    if (!id) {
      const fetchCharacters = async () => {

        try {
          const response = await getCharactersApi.getCharacters();
          setCharacters(response.data);

        } catch (error) {
          console.error("Only susuwatari here", error);
          setHasFetchError(true);
        }
      };
      fetchCharacters();

    } else {
      const fetchSelectedCharacter = async () => {
          try {
              const response = await getCharactersApi.getSelectedCharacter(id);
              setCharacters(response.data);
          } catch (error) {
              console.error("Only susuwatari here", error);
              setHasFetchError(true)
          }
      }
      fetchSelectedCharacter();
  } 
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