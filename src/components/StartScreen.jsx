import { useQuiz } from "../contexts/QuizContext";

/* eslint-disable react/prop-types */
function StartScreen() {
  const { numberOfQuestions, dispatch } = useQuiz();
  return (
    <div className="start">
      <h2>Welcome to React Quiz</h2>
      <h3>{numberOfQuestions} Questions to test your react Mastery!</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "startQuiz" })}
      >
        Lets Start
      </button>
    </div>
  );
}

export default StartScreen;
