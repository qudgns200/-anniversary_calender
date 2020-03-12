import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Anniversary, Add, List, Login, Join } from 'pages';
import Header from 'components/Header'

class App extends Component {
  render() {
    return (
    <div>
      <Header/>
      <Route exact path="/" component={Login}/>
      <Route path="/Login" component={Login}/>
      <Route path="/Join" component={Join}/>
      <Route path="/Anniversary" component={Anniversary}/>
      <Route path="/Add" component={Add}/>
      <Route path="/List" component={List}/>
    </div>
    )
  }
}

export default App;