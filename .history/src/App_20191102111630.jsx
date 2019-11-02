import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import About from './Routes/About'
import Recruitment from './Routes/Recruitment'
import About from './Routes/About'
import About from './Routes/About'
import About from './Routes/About'
import About from './Routes/About'

class App extends React.Component {
  render () {
    return (
      <Router>
        <nav><Link to='/' >Home</Link> | <Link to='/about' >About</Link> | <Link to='/recruitment' >Recruitment</Link> | <Link to='/testimonials' >Testimonials</Link> | <Link to='/policies' >Policies</Link> | <Link to='/contact'>Contact</Link></nav>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/recruitment' component={Recruitment}/>
        <Route exact path='/testimonials' component={Testimonials}/>
        <Route exact path='/policies' component={Policies}/>
        <Route exact path='/contact' component={Contact}/>


      </Router>
    )
  }
}

export default App;
