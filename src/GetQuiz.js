import {useState, useEffect} from 'react';
import {collection, query, onSnapshot} from "firebase/firestore";
import {db} from './firebase';
import Question from './Question';
import Score from './Score';

export default function Choices() {
    const [quiz, setQuiz] = useState([]);
    const [nextQ, setNextQ] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const q = query(collection(db, 'quizzes'));
        onSnapshot(q, (querySnapshot) => {
            setQuiz(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })));
        });
    },[])

    const checkAnswer = (answer, correctAns) => {
        if (answer === correctAns) {
            let point = score + 1;
            setScore(point);
            console.log('Correct!');
        }
        else {
            console.log('Incorrect!');
        }
        let num = nextQ + 1;
        setNextQ(num)
    }

    return (
        <>
            {!!quiz[nextQ] && <Question 
                question={quiz[nextQ].data.question} 
                answer={quiz[nextQ].data.correct}
                choices={quiz[nextQ].data.choices}
                checkAnswer={checkAnswer}
            />}
            {!quiz[nextQ] && (nextQ > 0) && <Score score={score} outOf={quiz.length} />}
        </>
    )
}