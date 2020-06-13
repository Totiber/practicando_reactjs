import React, { createContext, useState, useEffect } from 'react';
import { listGamesGet, gameDetailsGet, searchGet, screenshotsGet, suggestedGamesGet } from '../constants/constant';

export const GameContext = createContext();

const GameContextProvider = ({ children }) => {

// States centrales
    const [listaJuegos, setListaJuegos] = useState({ results: [] });
    const [detalleJuego, setDetalle] = useState({});
    const [screenshots, setScreenshots] = useState([]);




        useEffect(() => {
            getGamesList();
        }, []);


        const getGamesList = () => {
            
            fetch(listGamesGet()) 
                .then (res => res.json())
                .then (({ results }) => {
                    setListaJuegos({ results });
                })
                .catch((error) => {
                    console.error(error)
                })
        }

        const detalleGame = () => {

            const game_id = window.location.pathname.split('/') [3];

            fetch (gameDetailsGet(game_id))
                .then (res => res.json())
                .then (({ name, description, background_image }) => {
                    setDetalle({ name, description, background_image })
                })

        }

        const getScreenshot = () => {

            const id_game = window.location.pathname.split('/') [3];

            fetch(screenshotsGet(id_game))
                .then (res => res.json())
                .then (({ results }) => {
                    setScreenshots({ results })
                })
        }

        const buscarGet = (name) => {

            fetch(searchGet(name))
                .then (res => res.json())
                .then (({ results }) => {
                    setListaJuegos({ results })
                })
        }


    return (

        <GameContext.Provider value = {{
            listaJuegos,
            detalleJuego,
            detalleGame,
            screenshots,
            getScreenshot,
            buscarGet
        }}>
            {children}
        </GameContext.Provider>

    );
};

export default GameContextProvider;