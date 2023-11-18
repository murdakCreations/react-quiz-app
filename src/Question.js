import { useEffect } from "react"

export default function Question({ question, answer, choices, checkAnswer }) {
    const submitAnswer = (e) => {
        checkAnswer(e.target.value, answer)
    }
    return (
        <>
            <h1>{question}</h1>
            {choices.map((choice) => (
                <input type="button" onClick={submitAnswer} value={choice}/>
            ))}
        </>
    )
}