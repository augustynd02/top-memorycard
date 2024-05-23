import '../styles/Scoreboard.css'

export default function Scoreboard({score, highscore}) {
    return (
        <div className="scoreboard">
            <div id="score">Current score: {score}</div>
            <div id="highscore">Highscore: {highscore}</div>
        </div>
    )
}
