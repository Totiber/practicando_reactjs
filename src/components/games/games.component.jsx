import React from 'react';
import { render } from 'react-dom';
import { listGamesGet} from '../../constants/constant.js';
import Game from '../game/game.js';
import { Link } from 'react-router-dom';

class Games extends React.Component{

    state = {

        listaJuegos : []

    }
    componentDidMount() {
        this.getData();
    } 

    getData = async () => {

        const response = await fetch(listGamesGet());
        const {results} = await response.json();
        this.setState({listaJuegos : results});


    }
    // Boton para probar si funciona la consulta
    
    botonConsola = () => {

        console.log(this.state.listaJuegos)

    }

    render(){
        return  <div>
                   <ul>
                       {
                           this.state.listaJuegos.map(juego => {
                               
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
    }
}
export default Games;