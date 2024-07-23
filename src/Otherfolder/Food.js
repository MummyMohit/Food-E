import React, { useState } from 'react';
import Quiz from './Quiz';
import Result from './Result';
import Java from './java';
import JavaScript from './javascript';

import Breadcrumbs from './Breadcrumb';
import { CCard, CCardBody, CCol, CRow, CCardTitle } from '@coreui/react';

const questions = [
  {
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'Berlin', isCorrect: false },
      { answerText: 'Madrid', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Rome', isCorrect: false }
    ]
  },
  {
    questionText: 'Who is the CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false }
    ]
  },
  {
    questionText: 'What is the purpose of an IP address?',
    answerOptions: [
      { answerText: 'To identify devices on a network', isCorrect: true },
      { answerText: 'To encrypt data', isCorrect: false },
      { answerText: 'To store user preferences', isCorrect: false },
      { answerText: 'To connect to a printer', isCorrect: false }
    ]
  }
  // Add more questions as needed
];

const Food = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [visibleSection, setVisibleSection] = useState('general');

  const handleVisibleSection = (section) => {
    setVisibleSection(section);
    setCurrentQuestion(0); // Reset current question index when changing section
    setAnswers(Array(questions.length).fill(null)); // Reset answers when changing section
    setShowResult(false); // Reset showResult when changing section
  };

  const handleAnswerButtonClick = (index, isCorrect) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = { index, isCorrect };
    setAnswers(newAnswers);
  };

  const handleNextButtonClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const handlePreviousButtonClick = () => {
    const prevQuestion = currentQuestion - 1;
    if (prevQuestion >= 0) {
      setCurrentQuestion(prevQuestion);
    }
  };

  const correctAnswersCount = answers.filter((answer) => answer && answer.isCorrect).length;
  const incorrectAnswersCount = answers.filter((answer) => answer && !answer.isCorrect).length;

  const breadcrumbPath = {

    general: [
      { label: 'Home', path: '/' },
      { label: 'General Questions', path: '/general' }
    ],
    javascript: [
      { label: 'Home', path: '/' },
      { label: 'JavaScript', path: '/javascript' }
    ],
    java: [
      { label: 'Home', path: '/' },
      { label: 'Java', path: '/java' }
    ]
    
  };

  return (
    <div>
      <Breadcrumbs path={breadcrumbPath[visibleSection]} />
      <CRow>
        <CCol md={4} className="mt-3">
          <CCard onClick={() => handleVisibleSection('general')} style={{ backgroundColor: 'lightblue', cursor: 'pointer' }}>
            <CCardBody>
              <CCardTitle>General Questions</CCardTitle>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md={4} className="mt-3">
          <CCard onClick={() => handleVisibleSection('javascript')} style={{ backgroundColor: 'yellowgreen', cursor: 'pointer' }}>
            <CCardBody>
              <CCardTitle>JavaScript</CCardTitle>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md={4} className="mt-3">
          <CCard onClick={() => handleVisibleSection('java')} style={{ backgroundColor: 'thistle', cursor: 'pointer' }}>
            <CCardBody>
              <CCardTitle>Java</CCardTitle>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      {showResult ? (
        <Result correctAnswers={correctAnswersCount} incorrectAnswers={incorrectAnswersCount} totalQuestions={questions.length} />
      ) : (
        <>
          {visibleSection === 'general' && (
            <Quiz
              question={questions[currentQuestion]}
              currentAnswer={answers[currentQuestion]}
              handleAnswerButtonClick={handleAnswerButtonClick}
              handleNextButtonClick={handleNextButtonClick}
              handlePreviousButtonClick={handlePreviousButtonClick}
              isLastQuestion={currentQuestion === questions.length - 1}
              isFirstQuestion={currentQuestion === 0}
            />
          )}
          {visibleSection === 'java' && <Java />}
          {visibleSection === 'javascript' && <JavaScript />}
        </>
      )}
    </div>
  );
};

export default Food;

