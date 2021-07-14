import React from 'react'

const GameScreen = ({winnerInfo}) => {

    /* Verifie si il y a 1 seul ou plusieur Type sur ce pokémon */
    const type = () => {
       return winnerInfo.typetwo ? winnerInfo.type + ' et ' + winnerInfo.typetwo : winnerInfo.type 
    } 
    const nom = winnerInfo.nom

    return (
        <div>
            <h1> { nom } </h1>
            <img src={winnerInfo.sprite} alt="" />
            <p> Taille : {winnerInfo.taille} m </p>
            <p> Poid : {winnerInfo.poid} kg </p>
            <p> Types : {type()} </p>

        </div>
    )
}

export default GameScreen