import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Anniversary, Add, List } from 'pages';
import Header from 'components/Header'

class App extends Component {
  render() {
    return (
    <div>
      <Header/>
      <Route path="/Anniversary" component={Anniversary}/>
      <Route path="/Add" component={Add}/>
      <Route path="/List" component={List}/>
    </div>
    )
  }
}

export default App;