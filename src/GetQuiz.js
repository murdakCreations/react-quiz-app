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
            if (answer == correctAns) {
                console.log('Correct!');
            }
        }

    return (
        quiz.map(({data}) => (
            <Question 
                question={data.question} 
                answer={data.correct}
                choices={data.choices}
                checkAnswer={checkAnswer}
            />
        ))
    )
}