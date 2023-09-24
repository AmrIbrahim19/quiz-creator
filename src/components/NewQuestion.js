const NewQuestion = (props) => {
  console.log(props.qAndA);

  return (
    <div className="mb-3">
      <label className="form-label">Question {props.questionNumber + 1}</label>
      <input
        type="text"
        className="form-control"
        onChange={(e) => {
          props.qAndA[props.id].questions.text = e.target.value;

          props.setQandA(props.qAndA);
        }}
      />
      <div>
        <input
          style={{ width: "80%" }}
          type="text"
          className="form-control mt-2"
          placeholder="Set First Option"
          onChange={(e) =>
            props.setQandA(
              [...props.qAndA],
              (props.qAndA[props.id].questions.answers[0].text = e.target.value)
            )
          }
        />
        <input
          type="checkbox"
          className="form-check-input"
          onChange={(e) =>
            props.setQandA(
              [...props.qAndA],
              (props.qAndA[props.questionNumber].answers[0].isTrue = e.target
                .checked
                ? true
                : false)
            )
          }
        />
        <label className="form-check-label">Set correct</label>
      </div>
      <div>
        <input
          style={{ width: "80%" }}
          type="text"
          className="form-control mt-2"
          placeholder="Set Second Option"
          onChange={(e) =>
            props.setQandA(
              [...props.qAndA],
              (props.qAndA[props.questionNumber].questions.answers[1].text =
                e.target.value)
            )
          }
        />
        <input
          type="checkbox"
          className="form-check-input"
          onChange={(e) =>
            props.setQandA(
              [...props.qAndA],
              (props.qAndA[props.questionNumber].questions.answers[1].isTrue = e
                .target.checked
                ? true
                : false)
            )
          }
        />
        <label className="form-check-label">Set correct</label>
      </div>
      <div>
        <input
          style={{ width: "80%" }}
          type="text"
          className="form-control mt-2"
          id={props.questionNumber}
          placeholder="Set Third Option"
          onChange={(e) =>
            props.setQandA(
              [...props.qAndA],
              (props.qAndA[props.questionNumber].questions.answers[2].text =
                e.target.value)
            )
          }
        />
        <input
          type="checkbox"
          className="form-check-input"
          onChange={(e) =>
            props.setQandA(
              [...props.qAndA],
              (props.qAndA[props.questionNumber].questions.answers[2].isTrue = e
                .target.checked
                ? true
                : false)
            )
          }
        />
        <label className="form-check-label">Set correct</label>
      </div>
    </div>
  );
};

export default NewQuestion;
