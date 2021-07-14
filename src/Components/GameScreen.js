import React from 'react'
import '../App.css'

const GameScreen = ({winnerInfo}) => {

    /* Verifie si il y a 1 seul ou plusieur Type sur ce pokémon */
    const type = () => {
       return winnerInfo.typetwo ? winnerInfo.type + ' et ' + winnerInfo.typetwo : winnerInfo.type 
    } 


    return (
        <div className = "Card">
            <img src={winnerInfo.sprite} alt="" />
            <p> HEIGHT : {winnerInfo.taille} M </p>
            <p> WEIGHT : {winnerInfo.poid} KG </p>
            <p> TYPE : {type()} </p>

        </div>
    )
}

export default GameScreen