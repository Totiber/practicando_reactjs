import React from 'react';
import { render } from 'react-dom';
import { listGamesGet, searchGet} from '../../constants/constant.js';
import Game from '../game/game.js';
import { Link } from 'react-router-dom';
import GameSearch from '../searchForm/gameSearch.js';

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
    
    getConsulta = async (name) => {

        const respuesta = await fetch(searchGet(name));
        const {results} = await respuesta.json();
        this.setState({listaJuegos : results});

        console.log(results);

    }

    render(){
        return  <div>

                <GameSearch
                
                            buscar = {this.getConsulta}

                />
            
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