import React, { Component } from 'react';
import {Route,Link,BrowserRouter} from "react-router-dom";
import About from './About';
import Menu from './Menu';
import Contact from './Contact';
import Logo from '../images/logo.png';
import '../css/styles.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="app">
            <div className="logo">
              <img src={Logo} width="80px" alt="" height="80px"/>
            </div>
            <div className="link">
              <Link  className="to" to='/'><h4>About us</h4></Link>
              <Link className="to" to='menu'><h4>Menu</h4></Link>
              <Link  className="to" to='/contact'><h4>Contact</h4></Link>
             </div>
          </div>
          <div >
             <Route exact path = '/' component={About}/>
             <Route exact path = '/menu' component={Menu}/>
             <Route exact path = '/contact' component={Contact}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
