// src/Quiz.js

import React from 'react';
import { CCol, CRow, CCard, CCardBody, CForm, CFormInput, CButton, CCardTitle } from '@coreui/react';
const Quiz = ({
  question,
  currentAnswer,
  handleAnswerButtonClick,
  handleNextButtonClick,
  handlePreviousButtonClick,
  isLastQuestion,
  isFirstQuestion
}) => {
  const questionSectionStyle = {
    marginBottom: '20px'
  };

  const answerButtonStyle = {
    margin: '5px',
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer'
  };

  const navigationButtonStyle = {
    margin: '10px',
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer'
  };

  return (
    <div>
      <CCol md={8} className="mt-4 mb-2">
        <CCard>
          <CCardBody>
            <CCardTitle>{question.questionText}</CCardTitle>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md={8}>
        <CCard>
          {question.answerOptions.map((option, index) => (
            <button
              key={index}
              style={{
                ...answerButtonStyle,
                backgroundColor:
                  currentAnswer && currentAnswer.index === index ? (currentAnswer.isCorrect ? 'lightgreen' : 'lightcoral') : 'white'
              }}
              onClick={() => handleAnswerButtonClick(index, option.isCorrect)}
            >
              {option.answerText}
            </button>
          ))}
        </CCard>
      </CCol>
      <div>
        <button style={navigationButtonStyle} onClick={handlePreviousButtonClick} disabled={isFirstQuestion}>
          Previous
        </button>
        <button style={navigationButtonStyle} onClick={handleNextButtonClick}>
          {isLastQuestion ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
