import React, {useState} from 'react';
import {fetchQuizQuestions} from "./API";
import QuestionCard from './components/QuestionCard';
//types
import { QuestionState, Difficulty} from "./API"

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}


const TOTAL_QUESTIONS = 10; //Fixed value, but easy to change from here.

function App() {
  const [loading, setloading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

console.log(questions);

  async function startTrivia(){
    setloading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

      //resetting everything for a new game.
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);

    setloading(false);
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
      {/* <QuestionCard 
      questionNumber={number + 1}
      totalQuestions={TOTAL_QUESTIONS}
      question={questions[number].question}
      answers={questions[number].answers}
      userAnswer={userAnswers ? userAnswers[number] : undefined}
      callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>Next Question</button>

    </div>
  );
}

export default App;
