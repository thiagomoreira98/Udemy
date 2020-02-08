import React, { Component } from 'react';

export default class Contador extends Component {

  state = {
    numero: 0
  }

  incrementar = () => {
    this.setState({
      numero: this.state.numero + 1
    });
  }

  decrementar = () => {
    this.setState({
      numero: this.state.numero - 1
    });
  }

  render() {
    return (
      <div>
        <div>Numero: {this.state.numero}</div>
        <button onClick={this.incrementar}>Incrementar</button>
        <button onClick={this.decrementar}>Decrementar</button>
      </div>
    );
  }
}

// SOLUCAO 1
// constructor(props) {
//   super(props);
//   this.incrementar = this.incrementar.bind(this);
// }

// SOLUCAO 2
// <button onClick={() => this.incrementar()}>Incrementar</button>

// SOLUCAO 3
// incrementar = () => this.state.numero++;