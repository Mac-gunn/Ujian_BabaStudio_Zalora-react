import React, {Component} from 'react';
import '../App.css';
import '../style/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { render } from '@testing-library/react';
import { directive } from '@babel/types';
import {BrowserRouter as Router,Link} from "react-router-dom";
import Header from './Header';
import Slider from './Slider';
import Content from './content';
import Footer from './footer';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;


class App extends Component {
  render(){ 
    return(
      <Router>
          <div id="wrapper">
            <Header/><br/>
            <Slider/><br/>
            <Content/><br/>
            <Footer/>

          </div>
           
      </Router>
    );
    }
}

export default App;
