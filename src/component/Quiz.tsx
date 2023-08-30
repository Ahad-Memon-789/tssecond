import { useState } from "react";
import { Quizapp } from "../Data/Quizapp";
import QuizResult from "../component/QuizResult";

function Quiz() {
  const [currentQuestion, SetCurrentQuestion] = useState(0);
  const [Score, setScore] = useState(0);
  const [Selectedoption, setSelectedoption] = useState(0);
  const [showResult, setshowResult] = useState(false);

  const ChangeQuestion = () => {
    UpdateScore();
    if (currentQuestion < Quizapp.length - 1) {
      SetCurrentQuestion(currentQuestion + 1);
      setSelectedoption(0);
    } else {
      setshowResult(true);
    }
  };
  const UpdateScore = () => {
    if (Selectedoption === Quizapp[currentQuestion].answer) {
      setScore(Score + 1);
    }
  };
  return (
    <>
      <div className="App">
        <h1>You Are Start For Quiz</h1>
        <div className="container">
          {showResult ? (
            <QuizResult score={Score} totalScore={Quizapp.length} />
          ) : (
            <div>
              <div className="que">
                <span id="question-number">{currentQuestion + 1}. </span>
                <span id="question-txt">
                  {Quizapp[currentQuestion].question}
                </span>
              </div>
              <div className="option">
                {Quizapp[currentQuestion].options.map((option, i) => {
                  return (
                    <button
                      className={`option-button ${
                        Selectedoption == i + 1 ? "checked" : null
                      }`}
                      key={i}
                      onClick={() => {
                        setSelectedoption(i + 1);
                      }}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              <button className="btn" onClick={ChangeQuestion}>
                NEXT
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Quiz;
