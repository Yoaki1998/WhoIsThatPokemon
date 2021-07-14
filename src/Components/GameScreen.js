import React from 'react'

const GameScreen = ({winnerInfo}) => {

    /* Verifie si il y a 1 seul ou plusieur Type sur ce pokémon */
    const type = () => {
       return winnerInfo.typetwo ? winnerInfo.type + ' et ' + winnerInfo.typetwo : winnerInfo.type 
    } 

    return (
        <div>
            <h1> {winnerInfo.nom} </h1>
            <p> Taille : {winnerInfo.taille} m </p>
            <p> Poid : {winnerInfo.poid} kg </p>
            <p> {type()} </p>
        </div>
    )
}

export default GameScreen