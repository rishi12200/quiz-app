import React from "react";
import quizImage from "/public/quiz-logo.png";

function Header() {
  return (
    <header>
      <img src={quizImage} alt="Quiz Logo" />
      <h1>React Quiz</h1>
    </header>
  );
}

export default Header;
