import React, { Component } from 'react';
import Header from './Header';
import Slider from './Slider';
import Login from './Login';
import Sanat from './Sanat';
import '../App.css';
import About from './About';


import { connect } from 'react-redux';


class App extends Component {



  render() {

    return (
      <div>
<Header/>
<Slider/>
<Login/>
<About/>
<Sanat/>






      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state)
  return { car: state.car };
};

export default connect(mapStateToProps,null)(App);
