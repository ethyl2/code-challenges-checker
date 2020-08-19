import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import CodeChallenge1 from './components/CodeChallenge1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Code Challenge Time!</h1>
      </header>
      <Nav />
      <main>
        <Route>
          <Route path="/codeChallenge1" component={CodeChallenge1} />
        </Route>
      </main>
    </div>
  );
}

export default App;
