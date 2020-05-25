import React, { Component } from 'react'
import { gameDetailsGet } from '../../constants/constant.js';
import { listGamesGet2 } from '../../constants/constant.js';
import InfoAdicional from './infoAdicional.js';

export default class GameDetails extends Component {

    state = {

        name : '' ,
        description : '' ,
        lista : []

    }

    componentDidMount() {

        this.getData();
        this.getScreenshot();

    }

    getData = async () => {

        const  game_id = window.location.pathname.split('/') [3];

        const res = await fetch (gameDetailsGet(game_id));
        const {name, description} = await res.json();
        this.setState({name : name, description : description});


    } 

    getScreenshot = async () => {

        const id_game = window.location.pathname.split('/') [3];
        
        console.log(listGamesGet2(id_game));
        const res2 = await fetch(listGamesGet2(id_game));
        const {results} = await res2.json();
        //this.setState({lista : results});

        console.log(results)
    }
    
    botonPrueba() {

        console.log("Boton funciona");
        console.log(this.state.lista);
        
    }

    render() {


        return (
            <div>
                <h1>
                    {this.state.name}
                </h1>

                <p>
                    {this.state.description}
                </p>

                <button onClick = {this.botonPrueba}>
                    Probar Array
                </button>


                {/* <div>
                    {
                        this.state.lista.map(juego => {

                            return  <div>
                                        <img className = 'img-bg' src = {juego.background_image}></img>
                                    </div>

                                //SOLUCION2:
                                // <InfoAdicional
                                //         imagen = {juego.background_image}
                                // />
                            
                        })
                    }
                </div> */}
            </div>
        )
    }
}
