import React, { Component } from 'react'

export default class InfoAdicional extends Component {
    render() {
        return (
            <div>
                <div>
                    <img className = 'img-bg' src = {this.props.imagen}></img>
                </div>
            </div>
        )
    }
}
