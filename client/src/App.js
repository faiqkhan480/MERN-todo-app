import React from 'react';
import './App.css';
import List  from './list'
import { Jumbotron, Container } from 'reactstrap';


function App() {
  return (
    <div>
      <Container fluid className='jumbo'>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <List/>
      </Container>
    </div>
  );
}

export default App;
