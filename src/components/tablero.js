import React from 'react';

// <Jugada valor={props.currentUser} />

const Tablero = (props) => {
    return (
        <div className="col-md-12">
            <h1><u>Tablero</u></h1>
            <div id="main">
		<div className="casilla" id="0" onClick={props.onClickPosicionTablero}></div>
		<div className="casilla" id="1" onClick={props.onClickPosicionTablero}></div>
		<div className="casilla" id="2" onClick={props.onClickPosicionTablero}></div>
		<div className="casilla" id="3" onClick={props.onClickPosicionTablero}></div>
		<div className="casilla" id="4" onClick={props.onClickPosicionTablero}></div>
		<div className="casilla" id="5" onClick={props.onClickPosicionTablero}></div>
		<div className="casilla" id="6" onClick={props.onClickPosicionTablero}></div>
		<div className="casilla" id="7" onClick={props.onClickPosicionTablero}></div>
		<div className="casilla" id="8" onClick={props.onClickPosicionTablero}></div>
	</div>
        </div>
    )
}

export default Tablero;