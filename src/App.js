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
        if (data.types[1]) winnerInfo['typetwo'] = data.types[1].type.name
        this.setState({winnerInfo})
      })
  }

  pokeapi = () => {
    const randomizeAll = () => Math.floor(Math.random() * (150 - 0 + 1)) + 0
    const randomize = () => Math.floor(Math.random() * (2 - 0 + 1)) + 0    
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then((data) => { 
        const pokeall = data.results
        const pokeChoice = []
        for (let i = 0 ; i < 3; i++) {
          pokeChoice.push(pokeall[randomizeAll()])
        }
        const winner = pokeChoice[randomize()]
        this.getWinnerInfo(winner)
        this.setState({pokeChoice})
        this.setState({winner})
      })

  }

  componentDidMount () {
    this.pokeapi()
   
  }

  render () {   
    return (
      <div>
        <Score></Score>
        <GameScreen
        winnerInfo = {this.state.winnerInfo}>
        </GameScreen>
        {this.state.pokeChoice.map(obj => <Button key = {obj.name} name ={obj.name} ></Button>)}
      </div>
    )
  }
}

export default App;
