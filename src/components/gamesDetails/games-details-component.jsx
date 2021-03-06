import React, { useContext, useEffect } from 'react';
import { GameContext } from '../../context/GameContext';


const GameDetails = () => {

    const { detalleJuego, detalleGame, screenshots, getScreenshot, doneScreenshots } = useContext(GameContext);

    useEffect(() => {
        detalleGame();
        getScreenshot();
    }, [])


        return (
            <div>
                <img src = {detalleJuego.background_image} className = 'img-bg'></img>
                <h1>
                    {detalleJuego.name}
                </h1>

                <p>
                    {detalleJuego.description}
                </p>
        

                <div>
                    {
                        doneScreenshots === true ?
                            screenshots.map(juego => {

                                return  <div key = {juego.id}>
                                            <img className = 'img-bg' src = {juego.image}></img>
                                        </div>
                            })
                        
                        :   <div>
                                Cargando... 
                            </div>
                    }
                </div>
            </div>
        )
    
}

export default GameDetails;