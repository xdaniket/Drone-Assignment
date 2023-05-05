import { useContext } from "react";
import { createNewContext } from "../context/userProfileContext";

function QuestionDrone() {
  const { userDetails, setUserDetails } = useContext(createNewContext);
  const handleAnswerChange = (e, questionId) => {
    const updatedQuestions = userDetails.questions.map((question) => {
      if (question.id === questionId) {
        return {
          ...question,
          answer: e.target.value,
        };
      } else {
        return question;
      }
    });

    setUserDetails({
      ...userDetails,
      questions: updatedQuestions,
    });
  };
  return (
    <div>
      {userDetails.questions.map((item) => {
        return (
          <>
            <div
              key={item.id}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="">{item.title}</label>
              <input
                type="text"
                value={item.answer}
                onChange={(e) => handleAnswerChange(e, item.id)}
              />
            </div>
          </>
        );
      })}
    </div>
  );
}

export default QuestionDrone;
