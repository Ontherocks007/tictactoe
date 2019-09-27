import React, { Component } from 'react';
import Jugadores from './components/jugadores';
import Tablero from './components/tablero';
import Resultados from './components/resultados';
import "./App.css";


class App extends Component {
  constructor() {
    super();

    this.state = {
      player1: 'Player 1',
      player2: 'Player 2',
      currentUser: '',
      jugadas: [0,0,0,0,0,0,0,0]
    }
    //Aca estoy haciendo que la funcion acceda al objeto THIS
    this.onChangePlayer1 = this.onChangePlayer1.bind(this);
    this.onChangePlayer2 = this.onChangePlayer2.bind(this);
    this.onClickCurrentUser = this.onClickCurrentUser.bind(this);
    this.onClickPosicionTablero = this.onClickPosicionTablero.bind(this);
    //this.onClickwinningCombination = this.onClickwinningCombination.bind(this);
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

  onClickCurrentUser(valor) {
    this.setState({
      currentUser: valor
    })
  }

  onClickPosicionTablero(e) {
    //alert(e.target.id);
    if (this.state.currentUser == 'X') {
      document.getElementById(e.target.id).innerHTML = this.state.currentUser;
      let arr = this.state.jugadas;
      arr[e.target.id] = 1;
      this.setState({
        jugadas: arr,
        currentUser: 'O'
      })
    } else if (this.state.currentUser == 'O') {
      document.getElementById(e.target.id).innerHTML = this.state.currentUser;
      let arr = this.state.jugadas;
      arr[e.target.id] = 0;
      this.setState({
        jugadas: arr,
        currentUser: 'X'
      })
    }
    const winningCombinations = [
      [1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1],

      [1, 0, 0, 1, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 0, 0, 1, 0],
      [0, 0, 1, 0, 0, 1, 0, 0, 1],

      [1, 0, 0, 0, 1, 0, 0, 0, 1],
      [0, 0, 1, 0, 1, 0, 1, 0, 0]
    ];
  }




  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Juego Tic Tac Toe</h1>
          </div>

          {
            // LAs llaves{} validan al current user para iniciar el juego.
            this.state.currentUser != '' ? '' :
              <Jugadores player1={this.state.player1}
                player2={this.state.player2}
                onChangePlayer1={this.onChangePlayer1}
                onChangePlayer2={this.onChangePlayer2}
                onClickCurrentUser={this.onClickCurrentUser} />
          }

          <Tablero
            currentUser={this.state.currentUser} onClickPosicionTablero={this.onClickPosicionTablero} />

        
            
          <Resultados />
        </div>
      </div>
    )
  }
}

export default App;
