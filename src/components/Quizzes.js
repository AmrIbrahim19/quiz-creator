import React from "react";
import QuizCard from "./QuizCard";
import NewQuiz from "./NewQuiz";
import data from "../data.json";
import { useState, useEffect } from "react";

const Quizzes = () => {
  const [currentQuizzes, setCurrentQuizzes] = useState(data);
  const [quizSubmit, setQuizSubmit] = useState(false);
  const [questions, setQuestions] = useState([
    {
      description: null,
      title: null,
      url: null,
      questions: [{
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
      }],
    },
  ]);

  useEffect(() => {
    console.log(questions);
    questions[0].title !== null &&
      setCurrentQuizzes((prev) => [...prev, ...questions]);
    setQuestions([
      {
        description: null,
        title: null,
        url: null,
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
      },
    ]);
  }, [quizSubmit]);

  return (
    <div className="d-flex flex-column p-2 align-items-center">
      {currentQuizzes.map((data, idx) => {
        return (
          <QuizCard
            title={data.title}
            description={data.description}
            url={data.url}
            id={idx}
            currentQuizzes={currentQuizzes}
          />
        );
      })}
      <NewQuiz
        quizSubmit={quizSubmit}
        setQuizSubmit={setQuizSubmit}
        questions={questions}
        setQuestions={setQuestions}
      />
    </div>
  );
};

export default Quizzes;
