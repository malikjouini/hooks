import './App.css';
import {Card} from './components/Card';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

function App(props) {
  return (
    <div className="App">
      <Filter/>
      <MovieList Card={Card}/>
    </div>
  );
}

export default App;
