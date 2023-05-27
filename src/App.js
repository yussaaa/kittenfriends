import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import CardList from './CardList';
// import { kittens } from './robots';
import SearchBox from './searchBox'

import './App.css'
import Scroll from './Scroll'


// const state = {
//   kittens: kittens,
//   searchfield: ''
// }

// const App = () => {
//   return (
//     <div className='tc'>
//       <h1 >Kitten Friends</h1>
//       <SearchBox />
//       <CardList kittens={kittens} />
//     </div>
//   )
// }

class App extends Component {
  constructor() {
    super()
    this.state = {
      kittens: [],
      searchfield: ''
    }
    console.log('Constructor')
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    // this.state.searchfield = event.target.value

    console.log({ event });
  }

  componentDidMount() {
    console.log("componentDidMount")
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { this.setState({ kittens: users }) })

  }


  render() {

    const filteredKittens = this.state.kittens.filter(kitten => {
      return kitten.name.toLowerCase().includes(
        this.state.searchfield.toLocaleLowerCase()
      );
    });

    console.log('Render')

    if (this.state.kittens.length === 0) {
      return <h1 className='f1'>Loading ...</h1>
    }
    else {
      return (
        <div className='tc'>
          <h1 className='f1'>Kitten Friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList kittens={filteredKittens} />
          </Scroll>


        </div>
      )
    }

  }
}

export default App;
