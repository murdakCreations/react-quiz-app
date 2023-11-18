import {db} from './firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function AddQuiz() {
    const submitQuiz = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'quizzes'), {
                question: "What's your name, baby girl?",
                choices: [ 'Baby Girl', 'Mikasa', 'Akame', 'Murdak' ],
                correct: 'Murdak'
            })
                .then(alert('success'))
                .catch((error) => alert(error));
            // onclose();
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div>
            <h1>This is where the quiz will be added.</h1>
            <button onClick={submitQuiz}>Create Quiz</button>
        </div>

    )
}