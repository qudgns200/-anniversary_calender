import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Login, Join } from 'pages';
import MainComponent from '../components/MainComponent'
import Section from '../components/Section'

class App extends Component {
  render() {
    return (
    <div>
      <Section/>
      <Route exact path="/" component={Login}/>
      <Route path="/Login" component={Login}/>
      <Route path="/Join" component={Join}/>
      <Route path="/Main" component={MainComponent}/>
    </div>
    )
  }
}

export default App;