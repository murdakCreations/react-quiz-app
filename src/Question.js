import { useState } from "react"

export default function Question({ question, answer, choices, checkAnswer }) {
    const [shuffled, setShuffled] = useState([]);

    const submitAnswer = (e) => {
        checkAnswer(e.target.value, answer)
    }

    const shuffleChoices = () => {
        const random = getRndInteger(0,3);
        if(!(shuffled.includes(random)) && shuffled.length !== 4) {
            setShuffled(prevShuffle => {
                return [
                  ...prevShuffle,
                  random
                ]
            })
        }
        else {
            shuffled.length !== 4 && shuffleChoices()
        }
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }

    return (
        <>
            <h1>{question}</h1>
            {shuffleChoices()}
            {shuffled.map((index) => (
                <input type="button" onClick={submitAnswer} value={choices[index]}/>
            ))}
        </>
    )
}