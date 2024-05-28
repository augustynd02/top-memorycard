import Scoreboard from './Scoreboard';
import Cards from './Cards';
import { useState, useEffect } from 'react';

import fetchImages from '../data/fetchImages.js';
import '../styles/Game.css'

function wasClicked(card) {
    return card.clicked;
}


export default function Game() {
    const [data, setData] = useState([]);
    const [score, setScore] = useState(0);
    const [highscore, setHighscore] = useState(0);

    function handleClick(card) {
        if(card.clicked) {
            console.log("game over");
            return;
        }
        console.log("clicked");
        const newData = data;
        newData.map(element => {
            if(element.id === card.id) {
                element.clicked = true;
            }
        })
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
