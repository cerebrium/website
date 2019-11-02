import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {
  render () {
    return (
      <Router>
        <nav><Link to='/' >Home</Link> | <Link to='/About' >About</Link> | <Link to='/Recruitment' >Recruitment</Link> | <Link to='/Testimonials' >Favorite Food</Link> | <Link to='/about' >About</Link> | </nav>
      </Router>
    )
  }
}

export default App;
