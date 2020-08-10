import React from 'react';
import QuestionCard from './components/QuestionCard';

function App() {
  async function startTrivia(){

  }

  function checkAnswer(e: React.MouseEvent<HTMLButtonElement>){

  }

  function nextQuestion(){

  }

  return (
    <div className="App">
      <h1>Welcome to QuizNo</h1>
      <button className="start" onClick={startTrivia}>Start</button>
      <p className="score">Score:</p>
      <p>Loading...</p>
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>Next Question</button>
      
    </div>
  );
}

export default App;
