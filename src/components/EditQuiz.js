import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const EditQuiz = ({ id, title, description, url, currentQuizzes }) => {
  const [show, setShow] = useState(false);

  const handleModalShow = () => {
    setShow(true);
  }
  const handleClose = () => {
    setShow(false);
  }

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


  return (
    <div id={id}>
      <Button
        variant="primary"
        onClick={handleModalShow}
      >
        <FontAwesomeIcon icon={faPenToSquare} style={{ cursor: "pointer" }} />
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
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
          <button
            type="submit"
            data-bs-dismiss="modal"
            className="btn btn-primary"
          >
            Add Quiz
          </button>
        </div>
      </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditQuiz;
