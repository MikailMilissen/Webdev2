import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './components/Navigation';
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Pokemon from './components/Projects/Pokemon'
import Detail from './components/Projects/PokemonDetail'


function App() {
  return (
    <Router>
      
      <Navigation/>
      <Route path='/' exact component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/projects' exact component={Projects}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/projects/pokemon' exact component={Pokemon}/>
      <Route path='/projects/pokemon:id' component={Detail}/>
    </Router>
  );
}

const Home = () => {
  return(
  <div>
    <h1>Home Page</h1>
  </div>
  )
};

export default App;
