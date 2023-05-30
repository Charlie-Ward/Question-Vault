import React, { useState, useEffect } from 'react';
import sanityClient from '../../sanity';
import '../Flashcards.css';

const Flashcards = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    fetchFlashcards();
    document.title = "QV - Geography Flashcards";
  }, []);

  // Fetch flashcards from the database and shuffle the order
  const fetchFlashcards = () => {
    sanityClient
      .fetch(`*[_type == "geographyflashcard"]`)
      .then((data) => {
        // Shuffle the flashcards array
        const shuffledFlashcards = data.sort(() => 0.5 - Math.random());
        setFlashcards(shuffledFlashcards);
      })
      .catch(console.error);
  };
  
  // Show the answer
  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  // Move to the next flashcard
  const handleNextCard = () => {
    setShowAnswer(false);
    setCurrentCardIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex < flashcards.length ? nextIndex : 0;
    });
  };

  return (
    <div className="flashcards-container">
      <h4><a href='/geography' className='back'>&lt;- Back to geography</a></h4>
      <h1 className='heading'>Geography Flashcards</h1>
      {flashcards.length > 0 && (
        <div className="flashcard">
          <h3 className="flashcard-question">
            {flashcards[currentCardIndex].question}
          </h3>
          {showAnswer && (
            <p className="flashcard-answer">
              Answer: {flashcards[currentCardIndex].answer}
            </p>
          )}
          <div className="flashcard-buttons">
            <button onClick={handleShowAnswer}>Show Answer</button>
            <button onClick={handleNextCard}>Next Card</button>
          </div>
        </div>
      )}
      {flashcards.length === 0 && <p>No flashcards available.</p>}
    </div>
  );
};

export default Flashcards;
