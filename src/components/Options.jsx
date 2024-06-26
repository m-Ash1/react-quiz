import { useQuiz } from "../contexts/QuizContext";

/* eslint-disable react/prop-types */
function Options({ question }) {
  const { dispatch, answer } = useQuiz();
  return (
    <div className="options">
      {question.options.map((option, index) => {
        return (
          <button
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              answer !== null
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={index}
            disabled={answer !== null}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
