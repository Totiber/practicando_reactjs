import React, { Component } from 'react'
import './game.css';

export default class Game extends Component {
    render() {
        return (
            <div>
                <div>
                    <img className = 'img-bg' src = {this.props.backgroundImage} ></img>    
                    <h3>{this.props.name}</h3>
                </div>  
            </div>
        )
    }
}
