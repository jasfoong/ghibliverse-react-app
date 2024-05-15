import "./Characters.scss";
import haku from "../../assets/images/haku.jpeg";
import { Link } from "react-router-dom";

const CharacterList = ({ characters }) => {
  return (
    <main className="characters">
      {characters.map((characters) => {
        return (
          <Link
            className="characters__link"
            to={`/characters/${characters.id}`}
            key={characters.id}>
            <div className="characters__card">
              <img className="characters__image" src={haku} alt="character" />
              <h3 className="characters__name">{characters.name}</h3>
              <h5 className="characters__age">{characters.age}</h5>
              <h5 className="characters__species">{characters.species}</h5>
              <h5 className="characters__movie">{characters.movie}</h5>
              <h5 className="characters__powers">{characters.powers}</h5>
              <h5 className="characters__description">{characters.description}</h5>
              <p className="characters__extended-description">
                {characters.extendedDescription}
              </p>
            </div>
          </Link>
        );
      })}
    </main>
  );
};

export default CharacterList;
