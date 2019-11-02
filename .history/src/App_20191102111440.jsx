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
        <nav><Link to='/' >Home</Link> | <Link to='/about' >About</Link> | <Link to='/recruitment' >Recruitment</Link> | <Link to='/testimonials' >Testimonials</Link> | <Link to='/policies' >Policies</Link> | <Link to='/contact'>Contact</Link></nav>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/recruitment' component={Recruitment}/>
        <Route exact path='/testimonials' component={Home}/>
        <Route exact path='/policies' component={Home}/>
        <Route exact path='/contact' component={Home}/>


      </Router>
    )
  }
}

export default App;
