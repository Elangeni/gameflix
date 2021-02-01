import React from 'react';
import { SearchImage, Card, Display } from "./ResultElements";



    const Games = ({ games }) => {

      

      return (
        <div>
          <center><h1>Popular Games</h1></center>

          <Display className='col-lg-3'>
          {games.map((game) => (
              <Card>
                <SearchImage src={game.background_image} alt={game.name}/>
                <h5 class="card-title">{game.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Released on: {game.released}</h6>
                <p class="card-text">Rating: {game.rating}</p>
              </Card>
          ))}
          </Display>
          

        </div>
      )
    };

    export default Games