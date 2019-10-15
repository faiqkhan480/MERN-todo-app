import React from 'react';
import './App.css';
import List  from './components/list'
import { Jumbotron, Container } from 'reactstrap';
import View from './UI-view'

function App() {
  return (
    <div className="body">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <List/>
            {/*<View/>*/}

    </div>
  );
}

export default App;
