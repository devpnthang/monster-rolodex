import React, { Component } from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list";
import { SearchBox } from './components/search-box/search-box';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      monsters: [
        {
          id: 1,
          name: "Dracula",
        },
        {
          id: 2,
          name: "Monster",
        },
      ],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState(() => ({ monsters: users })));
  }

  handleSearch = (searchField) => {
    this.setState(() => ({
      searchValue: searchField,
    }));
  };

  render() {
    const { monsters, searchValue } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return (
        monster.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1 ||
        monster.email.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
      );
    });

    return (
      <div className="App">
        <h1 className='monster-rolodex'>Monster Rolodex</h1>
        <SearchBox 
          placeHolder={'Search monster'}
          handleChange={e => this.handleSearch(e.target.value)}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
