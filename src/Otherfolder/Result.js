// src/Result.js

import React from 'react';
import {CCard,CCardBody,CCol,CRow} from '@coreui/react'
const Result = ({ correctAnswers, incorrectAnswers, totalQuestions }) => {
  const resultStyle = {
    textAlign: 'center'
  };

  return (
    <div>
      <CRow style={{marginLeft:"100px"}}>
        <CCol md={6} className="mt-4">
      <CCard style={{width:"273px",height:"193px",marginLeft:"268px",paddingLeft:"74px",paddingTop:"11px"}}>
      <h1>Result</h1>
      <p>
        You scored {correctAnswers} out of {totalQuestions}
      </p>
      <p>
        Correct Answers: {correctAnswers}
      </p>
      <p>
        Incorrect Answers: {incorrectAnswers}
      </p>
      </CCard>
      </CCol>
      </CRow>
    </div>
  );
};

export default Result;

