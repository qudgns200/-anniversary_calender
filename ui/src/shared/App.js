import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Anniversary, Add, Delete, Modify } from 'pages';
import Header from 'components/Header'

class App extends Component {
  render() {
    return (
    <div>
      <Header/>
      <Route path="/Anniversary" component={Anniversary}/>
      <Route path="/Add" component={Add}/>
      <Route path="/Delete" component={Delete}/>
      <Route path="/Modify" component={Modify}/>
    </div>
    )
  }
}

export default App;