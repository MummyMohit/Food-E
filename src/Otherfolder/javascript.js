import React, { useState } from 'react';

const JavaScript = () => {
  const questions = [
    {
      question: 'What is the correct syntax to output "Hello World" in JavaScript?',
      options: [
        'print("Hello World")',
        'console.log("Hello World")',
        'echo("Hello World")',
        'document.write("Hello World")'
      ],
      answer: 1
    },
    {
      question: 'Which of the following is a JavaScript framework?',
      options: [
        'Laravel',
        'Django',
        'React',
        'Spring'
      ],
      answer: 2
    },
    {
      question: 'Which company developed JavaScript?',
      options: [
        'Netscape',
        'Mozilla',
        'Microsoft',
        'Apple'
      ],
      answer: 0
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

export default JavaScript;
