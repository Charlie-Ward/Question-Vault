import React from "react";
import { Link } from "react-router-dom";

const GeographyPage = () => {
  return (
    <div>
      <h1>Geography Landing Page</h1>
      <div>
        <button>
          <Link to="/geography/random-questions">Random Questions</Link>
        </button>
        <button>
          <Link to="/geography/flashcards">Flashcards</Link>
        </button>
      </div>
      <div>
        <label htmlFor="past-exam-papers">Past Exam Papers:</label>
        <select id="past-exam-papers">
          <option value="">Select an exam board</option>
          <option value="aqa">AQA</option>
          <option value="edexcel">Edexcel</option>
          <option value="eduqas">Eduqas</option>
        </select>
      </div>
    </div>
  );
};

export default GeographyPage;
