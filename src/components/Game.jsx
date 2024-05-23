import Scoreboard from './Scoreboard';
import Cards from './Cards';
import { useState } from 'react';

import '../styles/Game.css'

export default function Game() {
    const [score, setScore] = useState(0);
    const [highscore, setHighscore] = useState(0);

    return (
        <div className="game-container">
            <Scoreboard score={score} highscore={highscore}/>
            <Cards></Cards>
        </div>
    )
}
