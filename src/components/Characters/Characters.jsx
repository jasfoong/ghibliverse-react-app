import "./Characters.scss";
import haku from "../../assets/images/haku.jpeg";
import totoro from "../../assets/images/totoro.jpeg";
import jiji from "../../assets/images/jiji2.jpeg";
import calcifer from "../../assets/images/calcifer2.jpeg";
import shishigami from "../../assets/images/shishigami.jpeg";
import noface from "../../assets/images/noface2.jpeg";
import { Link } from "react-router-dom";

const images = {
  1: haku,
  2: shishigami,
  3: totoro,
  4: jiji,
  5: noface,
  6: calcifer
};


const CharacterList = ({ characters }) => {

  
  return (
    <main className="characters">
      {characters.map((characters) => {
        console.log(characters);
        const image = images[characters.id];
        return (
          <Link
            className="characters__link"
            to={`/characters/${characters.id}`}
            key={characters.id}>
            <div className="characters__card">
              <img className="characters__image" src={image} alt="character" />
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
