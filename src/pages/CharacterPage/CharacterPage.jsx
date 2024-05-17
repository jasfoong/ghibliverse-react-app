// import './CharacterPage.scss';
// import Header from '../../components/Header/Header'
// import CharactersApi from '../../classes/characters-api'
// import { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';


// function CharacterPage() {

//   const [selectedCharacters, setSelectedCharacters] = useState([]);
//   const [hasFetchError, setHasFetchError] = useState(false);
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchSelectedCharacter = async () => {
//       const getCharactersApi = new CharactersApi('http://localhost:8080/');
      
//         try {
//           const response = await getCharactersApi.getSelectedCharacter(id);
//           setSelectedCharacters(response.data);

//         } catch (error) {
//           console.error("Only susuwatari here", error);
//           setHasFetchError(true);
//         }
//       };
//       fetchSelectedCharacter();
//   }, [id])

//   if (hasFetchError === true) {
//     return (
//       <p>
//         I hate the Beatles. 
//       </p>
//     );
//   }

//   if (selectedCharacters === null) {
//     return <p>Loading👺👺👺</p>
//   }


// // const videosApi = new VideosApi(serverURL);
//   return (
//     <>
//       <Header />
//       <Link
//             className="characters__link"
//             to={`/characters/${selectedCharacters.id}`}
//             key={selectedCharacters.id}>
//             <div className="characters__card">
//               <img className="characters__image" src="" alt="character" />
//               <h3 className="characters__name">{selectedCharacters.name}</h3>
//               <h5 className="characters__age">{selectedCharacters.age}</h5>
//               <h5 className="characters__species">{selectedCharacters.species}</h5>
//               <h5 className="characters__movie">{selectedCharacters.movie}</h5>
//               <h5 className="characters__powers">{selectedCharacters.powers}</h5>
//               <h5 className="characters__description">{selectedCharacters.description}</h5>
//               <p className="characters__extended-description">
//                 {selectedCharacters.extendedDescription}
//               </p>
//             </div>
//           </Link>
//     </>
//   );
// }

// export default CharacterPage;