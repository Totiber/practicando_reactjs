
const base_url  = 'https://api.rawg.io/api';

const listGames = 'games';
const cors_anywhere = 'https://cors-anywhere.herokuapp.com/';
const gameSeries = 'game-series'; // https://api.rawg.io/api/games/%7Bgame_pk%7D/game-series
const screenshots = 'screenshots'; // https://api.rawg.io/api/games/%7Bgame_pk%7D/screenshots
const stores = 'stores';  // https://api.rawg.io/api/games/%7Bgame_pk%7D/stores
const trailers = 'movies'; // https://api.rawg.io/api/games/%7Bid%7D/movies
const suggested = 'suggested'; // https://api.rawg.io/api/games/%7Bid%7D/suggested
const genres = 'genres'; // https://api.rawg.io/api/genres
const platforms = 'platforms' // https://api.rawg.io/api/platforms
// details of game https://api.rawg.io/api/games/%7Bid%7D


// Query parameters
const search = 'search';


export const listGamesGet = () => `${base_url}/${listGames}`;
export const screenshotsGet = (idGame) => `${base_url}/${listGames}/${idGame}/${screenshots}`;
export const gameDetailsGet = (idGame) => `${base_url}/${listGames}/${idGame}`;
export const searchGet = (name) => `${base_url}/${listGames}?${search}=${name}`;
