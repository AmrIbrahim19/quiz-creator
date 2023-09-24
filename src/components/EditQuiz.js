import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { useState } from "react";



const EditQuiz = ({id, title, description, url, currentQuizzes}) => {
console.log(currentQuizzes);
// const [tempQuizz, setTempQuiz] = useState([
//     {
//         description: description,
//         title: title,
//         url: url,
//         questions: {
//           text: currentQuizzes[id].questions.text,
//           feedbackFalse: null,
//           feedbackTrue: null,
//           answers: [
//             {
//               isTrue: null,
//               text: null,
//             },
//             {
//               isTrue: null,
//               text: null,
//             },
//             {
//               isTrue: null,
//               text: null,
//             },
//           ],
//         },
//       }
// ])


console.log(title)

    return(
        <div id={id}>
        <button
        type="button"
        className="btn"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdropEdit"
      >
        <FontAwesomeIcon
          icon={faPenToSquare}
          style={{ cursor: "pointer" }}
        />
      </button>
      <div
        className="modal fade"
        id="staticBackdropEdit"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Edit QUIZ
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form>
              <div className="modal-body">
                <div className="mb-3">
                  <input
                    value={title}
                    type="text"
                    className="form-control"
                    // onChange={(e) => {
                    //   tempQuizz.title = e.target.value;
                    //   setTempQuiz(tempQuizz);
                    // }}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    aria-describedby="description"
                    // onChange={(e) => {
                    //     console.log(tempQuizz);
                    //     tempQuizz.description = e.target.value;
                    //     setTempQuiz(tempQuizz);
                    //   }}
                  />
                </div>

                {/* {questions.map((data, idx) => {
                  return (
                    <NewQuestion
                      id={idx}
                      questionNumber={idx}
                      qAndA={questions}
                      data={data}
                      setQandA={setQuestions}
                    />
                  );
                })} */}
                <div className="mb-3">
                  <input
                    placeholder="ADD YOUTUBE URL"
                    type="text"
                    className="form-control"
                    // onChange={(e) => {
                    //   questions[0].url = e.target.value;
                    //   setQuestions(questions);
                    // }}
                  />
                </div>
                {/* <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAddQuestion}
                >
                  ADD QUESTION
                </button> */}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" data-bs-dismiss="modal"  className="btn btn-primary">
                  Add Quiz
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}

export default EditQuiz