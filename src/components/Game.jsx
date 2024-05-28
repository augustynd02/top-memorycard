import Scoreboard from './Scoreboard';
import Cards from './Cards';
import { useState, useEffect } from 'react';

import fetchImages from '../data/fetchImages.js';
import '../styles/Game.css'


export default function Game() {
    const [data, setData] = useState([]);
    const [score, setScore] = useState(0);
    const [highscore, setHighscore] = useState(0);

    function resetGame() {
        const dataCopy = data;
        dataCopy.map(data => data.clicked = false);
    }

    function handleClick(card) {
        if(card.clicked) {
            setScore(0);
            resetGame();
            return;
        }

        const newData = data;
        newData.map(element => {
            if(element.id === card.id) {
                element.clicked = true;
            }
        })
        if(highscore <= score) setHighscore(score + 1);
        setScore(score + 1);
        setData(newData)
    }

    useEffect(() => {
        const getImages = async () => {
            const images = await fetchImages();
            setData(images);
        }
        getImages();
    }, [])

    return (
        <div className="game-container">
            <Scoreboard score={score} highscore={highscore}/>
            <Cards imagesData={data} handleClick={handleClick}></Cards>
        </div>
    )
}
