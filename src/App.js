import React from 'react';
import './App.css';
import Header from './Header';
import Board from './Board';

const PLAYERX = "Turno del jugador 1 - X";
const PLAYER0 = "Turno del jugador 2 - 0";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      turn: PLAYERX,
      values: [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-']
      ],
      moves: 0
    };

    this.appClick = this.appClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  render() {

    return (
      <div className="App">
        <Header
          turn={this.state.turn}
        />
        <div>
        <Board
          values={this.state.values} appClick = {this.appClick}
        />
        </div>
        <p>Contador de movimientos: {this.state.moves}</p>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }

    appClick(x,y) {
   
      let copyValues = JSON.parse(JSON.stringify(this.state.values));
   
      copyValues[x][y] = this.state.turn === PLAYERX ? "X" : "0";
    
      let turn = this.state.turn === PLAYERX ? PLAYER0: PLAYERX;
    
      let moves = this.state.moves + 1;

      this.setState({
        turn: turn,
        values: copyValues,
        moves: moves
      });

    }

    reset(){
      this.setState({
        turn: PLAYERX,
        values: [
          ['-', '-', '-'],
          ['-', '-', '-'],
          ['-', '-', '-']
        ],
        moves: 0
      });
    }

}
