import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import CodeChallenge1 from './components/CodeChallenge1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Code Challenge Time!</h1>
      </header>
      <Nav />
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/codeChallenge1" component={CodeChallenge1} />
      </main>
    </div>
  );
}

export default App;
