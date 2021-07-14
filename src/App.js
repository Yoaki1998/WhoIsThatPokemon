import './App.css';
import Button from './Components/Button';
import GameScreen from './Components/GameScreen';
import Score from './Components/Score';
import React, { Component } from 'react'

class App extends Component {

  state = {
    pokeChoice: [],
    winner: {},
    winnerInfo: {},
    score:0
  }

  /*Récupère les information du pokémon gagnant et les sauvegarde dans le state*/ 
  getWinnerInfo = (winner) => {
    fetch(winner.url)
      .then(response => response.json())
      .then((data) => { 
        const winnerInfo = {
          nom: data.forms[0].name,
          sprite: data.sprites.front_default,
          type: data.types[0].type.name,
          taille: data.height/10.0,
          poid: data.weight/10.0,
        }
        /* Regle le bug du double type (Cannot find property type of Undefined) */
        if (data.types[1]) winnerInfo['typetwo'] = data.types[1].type.name
        
        this.setState({winnerInfo})
      })
  }

  /* Récupère les donnée de l'API et les sauvegarde dans le state*/
  pokeapi = () => {
    const randomizeAll = () => Math.floor(Math.random() * (150 - 0 + 1)) + 0
    const randomize = () => Math.floor(Math.random() * (2 - 0 + 1)) + 0    
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then((data) => { 
        const pokeall = data.results
        const pokeChoice = []
        for (let i = 0 ; i < 3;) {
          let rand = randomizeAll()
          /* Evite d'avoir deux fois le meme nom de pokémon */
          if (pokeChoice.indexOf(rand) === -1) {
            i++
            pokeChoice.push(pokeall[rand])
          }
        }
        const winner = pokeChoice[randomize()]
        this.getWinnerInfo(winner)
        this.setState({pokeChoice})
        this.setState({winner})
      })

  }

  reavel = () => {

  }

  winOrLose = (name) => {
    if (this.state.winner.name === name) {
      let score = this.state.score
      score += 1
      this.setState({score})
      this.reavel()
      this.pokeapi()
    } else {
      let score = this.state.score
      score -= 1
      this.setState({score})
      this.reavel()
      this.pokeapi()
    }
  }

  componentDidMount () {
    this.pokeapi()
   
  }

  render () {   
    return (
      <React.Fragment>
        <div className = "navbar">
          <h1 className="main">WHO IS THAT POKEMON ?</h1>
          <h1 className ="sec">WITP?</h1>
        </div>
        <div className = "container">
          <Score
          score = {this.state.score}></Score>
          <GameScreen
            winnerInfo = {this.state.winnerInfo}>
          </GameScreen>
          {/*Itere pour crée les boutons avec le choix des pokémons*/}
          {this.state.pokeChoice.map((obj, id) => <Button winOrLose = {this.winOrLose} key = { id } name ={obj.name} ></Button>)}
        </div>
      </React.Fragment>
    )
  }
}

export default App;
