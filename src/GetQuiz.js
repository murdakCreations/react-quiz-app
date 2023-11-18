import {useState, useEffect} from 'react'
import {collection, query, onSnapshot} from "firebase/firestore"
import {db} from './firebase'

export default function Choices() {
    const [quiz, setQuiz] = useState([])

    useEffect(() => {
        const q = query(collection(db, 'quizzes'))
        onSnapshot(q, (querySnapshot) => {
          setQuiz(querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          })))
        })
      },[])
      

    return (
        <div>
            {quiz.map(({data}) => (
                <>
                    <h1>{data.question}</h1>
                    {!!data.choices && data.choices.map((choice)=>(
                        <button>{choice}</button>
                    ))}
                </>
            ))}
        </div>
    )
}