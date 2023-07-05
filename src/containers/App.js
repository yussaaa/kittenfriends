import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import CardList from "../components/CardList";
// import { kittens } from './robots';
import SearchBox from "../components/searchBox";

import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

import { setSearchField } from "../actions";
import { connect } from "react-redux";

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

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      kittens: [],
      // searchfield: "",
    };
    // console.log('Constructor')
  }

  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value });
  //   // searchfield = event.target.value

  //   console.log({ event });
  // };

  componentDidMount() {
    // console.log("componentDidMount")
    // console.log(this.props.store);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ kittens: users });
      });
  }

  render() {
    const { kittens } = this.state;
    const { searchField, onSearchChange } = this.props;

    const filteredKittens = kittens.filter((kitten) => {
      return kitten.name
        .toLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });

    // console.log('Render')

    return !kittens.length ? (
      <h1 className="f1">Loading ...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Kitten Friends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList kittens={filteredKittens} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
