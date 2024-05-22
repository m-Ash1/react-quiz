import { useQuiz } from "../contexts/QuizContext";

/* eslint-disable react/prop-types */
function NextButton() {
  const { questions, index, answer, dispatch } = useQuiz();
  if (answer === null) return null;
  if (index < questions.length - 1) {
    return (
      <div>
        <button
          onClick={() => dispatch({ type: "nextQuestion" })}
          className="btn btn-ui"
        >
          Next
        </button>
      </div>
    );
  }
  if (index === questions.length - 1) {
    return (
      <div>
        <button
          onClick={() => dispatch({ type: "finishQuiz" })}
          className="btn btn-ui"
        >
          Finish
        </button>
      </div>
    );
  }
}

export default NextButton;
