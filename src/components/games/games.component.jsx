import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import Game from '../game/game.js';
import { Link } from 'react-router-dom';
import GameSearch from '../searchForm/gameSearch.js';





const Games = () => {
    
    const { listaJuegos } = useContext(GameContext);
    const { buscarGet } = useContext(GameContext);




    return  ( 
    <       div>

         <GameSearch
                    buscar = {buscarGet}
        />
     
       
            <ul>
               {
                   listaJuegos.results.map(juego => {
                       
                       return (
                           
                        <Link key = {juego.id} to = {'/game/details/' + juego.id }>
                            <Game 
                                    name = {juego.name} 
                                    backgroundImage = {juego.background_image}
                            />
                        </Link>
                       )
                   })
               }
           </ul> 
        </div>

)


}


       
export default Games;