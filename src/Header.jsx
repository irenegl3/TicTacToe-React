import React from 'react';

export default class Header extends React.Component {

    render() {
        return (
            <header>
                <h1>Tic Tac Toe</h1>
                <h2>{this.props.turn}</h2>
            </header>
        );
    }
}
