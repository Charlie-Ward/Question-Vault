import React, { useState, useEffect } from 'react';
import sanityClient from './sanity';
import './App.css';

const App = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "question"]`)
      .then((data) => {
        // Shuffle the questions array
        const shuffledQuestions = data.sort(() => 0.5 - Math.random());
        // Get the first five questions
        const selectedQuestions = shuffledQuestions.slice(0, 5);
        setQuestions(selectedQuestions);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <h1>Random Questions</h1>
      {questions.map((question) => (
        <div key={question._id}>
          <h3>{question.question}</h3>
          <ul>
            {question.options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default App;
