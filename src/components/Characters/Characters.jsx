import './Characters.scss'

const CharacterList = () => {
    return (
        <main className="characters">
            <div className="characters__card">
                <img className="characters__image" src="" alt="character"/>
                <h3 className="characters__name">name</h3>
                <h5 className="characters__age">age</h5>
                <h5 className="characters__short-description">short description</h5>
                <p className="characters__long-description">long description</p>
            </div>
        </main>
    )
}

export default CharacterList;