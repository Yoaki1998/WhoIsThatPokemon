import './App.css';


import React, { Component } from 'react'

class App extends Component {

  state = {
    pokeChoice: [],
    winner: {},
    winnerInfo: {}
  }

  getWinnerInfo = (winner) => {
    fetch(winner.url)
      .then(response => response.json())
      .then((data) => { 
        console.log(data)
        const winnerInfo = {
          nom: data.forms[0].name,
          sprite: data.sprites.front_default,
          types: data.types,
          taille: data.height/10.0,
          poid: data.weight/10.0,
        }
        console.log(winnerInfo)
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
        
      </div>
    )
  }
}

export default App;
