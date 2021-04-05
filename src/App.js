import React, { useState } from 'react';
import './App.css';
import { Card } from './components/Card';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const App = (props) => {
  const [state, setState] = useState({
    Card: Card,
    searchfield: ''
  })
  const onSearchChange = (e) => {
    setState({ searchfield: e.target.value })
  }
  const { searchfield } = state;
  const filteredMovies = Card.filter(movie => {
    return movie.Name.toLowerCase().includes(searchfield.toLowerCase());
  })
  return (
    <div className="App">
      <Filter searchChange={onSearchChange} />
      <MovieList Card={filteredMovies} />
    </div>
  )
}

export default App;
