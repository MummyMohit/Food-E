import React, { useState } from 'react';

const Java = () => {
  const questions = [
    {
      question: 'What is the size of int in Java?',
      options: [
        '8 bits',
        '16 bits',
        '32 bits',
        '64 bits'
      ],
      answer: 2
    },
    {
      question: 'Which of the following is not a Java keyword?',
      options: [
        'static',
        'Boolean',
        'void',
        'private'
      ],
      answer: 1
    },
    {
      question: 'Who is known as the father of Java Programming Language?',
      options: [
        'James Gosling',
        'M. P Java',
        'Charel Babbage',
        'Blais Pascal'
      ],
      answer: 0
    },
    {
      question: 'Which of these cannot be used for a variable name in Java?',
      options: [
        'identifier & keyword',
        'identifier',
        'keyword',
        'none of the mentioned'
      ],
      answer: 2
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <div>
          <h1>Your Score: {score}/{questions.length}</h1>
        </div>
      ) : (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <form onSubmit={handleSubmit}>
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index}>
                <label>
                  <input
                    type="radio"
                    value={index}
                    checked={selectedOption === index}
                    onChange={handleOptionChange}
                  />
                  {option}
                </label>
              </div>
            ))}
            <button type="submit" disabled={selectedOption === null}>Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Java;
