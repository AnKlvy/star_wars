import swCharacters from "../../data/characters.json";
import swPlanets from "../../data/planets.json";
import swStarships from "../../data/starships.json";

export const Content = () => {
    return(
        <>
        {swCharacters.map((character)=>(
            <div className="item-list-layout">
              <div>
                <p> name: {character.name}</p>
                <p> genger: {character.gender}</p>
                <p> birthday: {character.birth_year}</p>
              </div>
              <div className="item-image-layout">
              <button className="favorite-button"
              >I am your fan!!!!!</button> 
              <img 
                className="item-image"
                src={character.url}
                alt=""
                />
              </div>
            </div>
          ))}
          </>
    )
}