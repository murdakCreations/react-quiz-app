import {useState, useEffect} from 'react';
import {collection, query, onSnapshot} from "firebase/firestore";
import {db} from './firebase';
import Question from './Question';

export default function Choices() {
    const [quiz, setQuiz] = useState([]);

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
            console.log('Correct!');
        }
        else {
            console.log('Incorrect!');
        }
    }

    return (
        <>
            {!!quiz[0] && <Question 
                question={quiz[0].data.question} 
                answer={quiz[0].data.correct}
                choices={quiz[0].data.choices}
                checkAnswer={checkAnswer}
            />}
        </>
    )
}