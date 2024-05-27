import Scoreboard from './Scoreboard';
import Cards from './Cards';
import { useState, useEffect } from 'react';

import fetchImages from '../data/fetchImages.js';
import '../styles/Game.css'

export default function Game() {
    const [imagesData, setImagesData] = useState([]);
    const [score, setScore] = useState(0);
    const [highscore, setHighscore] = useState(0);

    useEffect(() => {
        const getImages = async () => {
            const images = await fetchImages();
            setImagesData(images);
        }
        getImages();
    }, [])

    return (
        <div className="game-container">
            <Scoreboard score={score} highscore={highscore}/>
            <Cards imagesData={imagesData}></Cards>
        </div>
    )
}
