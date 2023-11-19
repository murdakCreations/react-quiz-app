export default function Score({score, outOf}) {
    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <>
            <h3>Yey! Your Score is:</h3>
            <h1>{score}/{outOf}</h1>
            <button onClick={refreshPage}>Try Again</button>
        </>
    )
}