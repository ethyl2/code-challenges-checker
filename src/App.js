import React from 'react';
import './App.css';
import CodeText from './components/ChallengeExplanation1';
import InputForm from './components/InputForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Code Challenge Time!</h1>
      </header>
      <main>
        <CodeText />
        <h2>
          After creating your algorithm in your favorite IDE,
          <br /> submit the output that you get using the following inputs:
        </h2>
        <InputForm />
      </main>
    </div>
  );
}

export default App;
