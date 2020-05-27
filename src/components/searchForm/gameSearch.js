import React, { Component } from 'react'

export default class GameSearch extends Component {


    state = {

        value : ''

    }

    handleChange = (event) => {

        this.setState({value : event.target.value});

    }

    handleSubmit = (event) => {

        console.log(this.state.value)

        //utiliza parametro y envia el valor de estado
        this.props.buscar(this.state.value.trim());

        event.preventDefault();
    }
    

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <div>
                    <input type = 'text' placeholder = 'Nombre del juego' onChange = {this.handleChange}></input>
                    <input type = 'submit' value = 'Buscar'></input>
                </div>
            </form>
        )
    }
}
