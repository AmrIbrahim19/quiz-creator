import EditQuiz from "./EditQuiz";

const QuizCard = ({ title, description, url, id, currentQuizzes }) => {
  return (
    <div className="card mt-5" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {title}
          <EditQuiz
            id={id}
            title={title}
            description={description}
            url={url}
            currentQuizzes={currentQuizzes}
          />
        </h5>
        <p className="card-text">{description}</p>
        <a href={url} className="btn btn-primary">
          YouTube
        </a>
      </div>
    </div>
  );
};

export default QuizCard;
