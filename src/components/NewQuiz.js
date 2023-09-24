import React, { useEffect } from "react";
import { useState } from "react";
import NewQuestion from "./NewQuestion";

const NewQuiz = ({ questions, setQuestions, quizSubmit, setQuizSubmit }) => {

  const handleAddQuestion = () => {
    let newQuestion = {
      questions: {
        text: null,
        feedbackFalse: null,
        feedbackTrue: null,
        answers: [
          {
            isTrue: false,
            text: null,
          },
          {
            isTrue: false,
            text: null,
          },
          {
            isTrue: false,
            text: null,
          },
        ],
      },
    };

    setQuestions([...questions, newQuestion]);
  };

  const handleAddQuiz = (e) => {
     e.preventDefault();
     setQuizSubmit(!quizSubmit);
        
  }

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary mt-5"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdropAdd"
      >
        Add New Quiz
      </button>

      <div
        className="modal fade"
        id="staticBackdropAdd"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                NEW QUIZ
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
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                      questions[0].title = e.target.value;
                      setQuestions(questions);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    aria-describedby="description"
                    onChange={(e) =>
                      setQuestions(
                        (prev) => [...prev],
                        (questions[0].description = e.target.value)
                      )
                    }
                  />
                </div>

                {questions.map((data, idx) => {
                  return (
                    <NewQuestion
                      id={idx}
                      questionNumber={idx}
                      qAndA={questions}
                      data={data}
                      setQandA={setQuestions}
                    />
                  );
                })}
                <div className="mb-3">
                  <input
                    placeholder="ADD YOUTUBE URL"
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                      questions[0].url = e.target.value;
                      setQuestions(questions);
                    }}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAddQuestion}
                >
                  ADD QUESTION
                </button>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" data-bs-dismiss="modal" onClick={handleAddQuiz} className="btn btn-primary">
                  Add Quiz
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewQuiz;
