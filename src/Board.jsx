import React from 'react';
import Cell from './Cell';

export default class Board extends React.Component {

    render() {
        let tablero = this.props.values.map((row,x) => {
            return <div>{row.map((cell,y) => <Cell value={cell} cellClick = { () => {this.props.appClick(x,y)} }/>)}</div>
          });
        return (
          tablero
        );
    }
}
