import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Anniversary, Add, List } from 'pages';
import Header from './Header';

const MainComponent = () => (
    <BrowserRouter>
        <Header/>
        <Route path="/Main/Anniversary" component={Anniversary}/>
        <Route path="/Main/Add" component={Add}/>
        <Route path="/Main/List" component={List}/>
    </BrowserRouter>
);

export default MainComponent;