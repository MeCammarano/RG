import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { List } from './components/List'
import { ListReplace } from './components/Listreplace';
import './App.css';

const reload = () => window.location.reload();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/list" exact component={List}></Route>
          <Route path="/listreplace" exact component={ListReplace}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
