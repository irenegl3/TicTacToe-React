import React from 'react';

export default class Cell extends React.Component {

    render() {
        return (
            <button onClick={this.props.cellClick}>{this.props.value}</button>
        );
    }
}
