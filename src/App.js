import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Games from './components/games/games.component.jsx';
import GameDetails from './components/gamesDetails/games-details-component.jsx';
import GameSearch from './components/searchForm/gameSearch';


const App = () => (
  
  <BrowserRouter>
      <Switch>

        
          <Route exact path = '/'>

              <Games/>
              

          </Route>
          <Route path = '/game/details/:game_id'>

              <GameDetails/>

          </Route>


      </Switch>
  </BrowserRouter>  

)

App.displayName = 'App';
export default App;