import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import QuizStart from './QuizStart';
import AddQuiz from './AddQuiz';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <QuizStart />
    <AddQuiz />
  </React.StrictMode>
);
