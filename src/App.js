import { useState } from 'react';
import './App.css';
import GetQuiz from './GetQuiz';

function App() {
  const [nextPage, setNextPage] = useState('');

  const hideGetStartedBtn = (e) => {
    document.getElementById(e.target.id).style.display = 'none';
    setNextPage('question');
  }

  return (
    <div className="App">
      <button onClick={hideGetStartedBtn} id='start'>Get Started</button>
      {nextPage == 'question' && <GetQuiz />}
    </div>
  );
}

export default App;
