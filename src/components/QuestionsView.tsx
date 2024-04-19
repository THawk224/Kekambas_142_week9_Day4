import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Question {
  id: number;
  question: string;
}

/**
 * Component to display all quiz questions.
 */
const QuestionsView: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('https://cae-bookstore.herokuapp.com/question/all');
        setQuestions(response.data['questions']);
      } catch (error) {
        console.error('Failed to fetch questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div>
      <h1>All Questions</h1>
      {questions.length > 0 ? (
        <ul>
          {questions.map(question => (
            <li key={question.id}>{question.question}</li>
          ))}
        </ul>
      ) : (
        <p>No questions found.</p>
      )}
    </div>
  );
};

export default QuestionsView;
