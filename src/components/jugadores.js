import React from 'react';


const Jugadores = (props) => {
    return (
        <div className="col-md-12">
            <h1>Formulario jugadores</h1>
            <form>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Player 1" value={props.player1} onChange={props.onChangePlayer1}/>
                        <div style={{width: '100px', height: '100px', fontSize: '50px'}} onClick={() => props.onClickCurrentUser('X')}>
                            X
                        </div>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Player 2" value={props.player2} onChange={props.onChangePlayer2}/>
                        <div style={{width: '100px', height: '100px', fontSize: '50px'}} onClick={() => props.onClickCurrentUser('O')}>
                            O
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Jugadores;

