import React, { useState, useEffect } from 'react';
import sanityClient from '../../sanity';
import '../Questions.css';

const Geogrpahy = () => {
  const [questions, setQuestions] = useState([]);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = () => {
    sanityClient
      .fetch(`*[_type == "geography"]`)
      .then((data) => {
        // Shuffle the questions array
        const shuffledQuestions = data.sort(() => 0.5 - Math.random());
        // Get the first five questions
        const selectedQuestions = shuffledQuestions.slice(0, 5);
        setQuestions(selectedQuestions);
      })
      .catch(console.error);
  };

  const handleShowAnswers = () => {
    setShowAnswers((prevShowAnswers) => !prevShowAnswers);
  };

  const handleRefreshQuestions = () => {
    setShowAnswers(false);
    fetchQuestions();
  };

  return (
    <div className="App">
      <div className="buttons">
        <button onClick={handleShowAnswers}>Show Answers</button>
        <button onClick={handleRefreshQuestions}>Refresh Questions</button>
      </div>
      <h1>Random Questions</h1>
      {questions.map((question) => (
        <div key={question._id}>
          <h3>{question.question}</h3>
          {showAnswers && <p className="answer">Answer: {question.answer}</p>}
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

export default Geogrpahy;