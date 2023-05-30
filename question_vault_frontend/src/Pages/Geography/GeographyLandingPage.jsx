import React from "react";
import "../LandingPage.css";

const GeographyPage = () => {
  return (
    <div className="geography-page">
    <h1 className="geography-page-title">Geography - GCSE</h1>
      <div className="geography-page-content">
        <div className="geography-page-buttons">
          <button className="button">
            <a href="/geography/questions" className="links">Random Questions</a>
          </button>
          <button className="button">
            <a href="/geography/flashcards" className="links">Flashcards</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeographyPage;
