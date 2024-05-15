import './Characters.scss'
import haku from '../../assets/images/haku.jpeg'
import { Link } from 'react-router-dom'

const CharacterList = () => {
    return (
        <main className="characters">
            {/* <Link className="characters__link" to={`/characters/${character.id}`} key={character.id}> */}
                <div className="characters__card">
                    <img className="characters__image" src={haku} alt="character"/>
                    <h3 className="characters__name">name</h3>
                    <h5 className="characters__age">age</h5>
                    <h5 className="characters__species">species</h5>
                    <h5 className="characters__movie">movie</h5>
                    <h5 className="characters__powers">special powers</h5>
                    <h5 className="characters__description">description</h5>
                    <p className="characters__extended-description">extended-description</p>
                </div>
            {/* </Link> */}
        </main>
    )
}

export default CharacterList;