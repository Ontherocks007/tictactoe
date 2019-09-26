import React, { Component } from 'react';
import Jugadores from './components/jugadores';
import Tablero from './components/tablero';
import Resultados from './components/resultados';


class App extends Component {
  constructor() {
    super();

    this.state = {
      player1: 'Player 1',
      player2: 'Player 2'
    }
//Aca estoy haciendo que la funcion acceda al objeto THIS
    this.onChangePlayer1 = this.onChangePlayer1.bind(this);
    this.onChangePlayer2 = this.onChangePlayer2.bind(this);
  }

  onChangePlayer1(e) {
    this.setState({
      player1: e.target.value
    })
  }

  onChangePlayer2(e) {
    this.setState({
      player2: e.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1> Juego Tic Tac Toe</h1>
          </div>
          <Jugadores player1={this.state.player1} player2={this.state.player2} onChangePlayer1={this.onChangePlayer1} onChangePlayer2={this.onChangePlayer2}/>
          <Tablero />
          <Resultados />
        </div>
      </div>
    )
  }
}

export default App;
