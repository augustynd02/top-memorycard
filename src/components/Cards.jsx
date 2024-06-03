import '../styles/Cards.css'

function createCards(imagesData, handleClick) {
    const cards = [];
    imagesData.forEach(data => {
        cards.push(
            <div className="card" key={data.id} id={data.id} onClick={() => {handleClick(data)}}>
                <img src={data.URL} alt=""/>
            </div>
        )
    })
    return cards;
}

function randomizeData(imagesData) {
    const arr = new Array(imagesData.length).fill(null);
    for(let i = 0; i < imagesData.length; i++) {
        let placed = false;
        while(!placed) {
            let randomNum = Math.floor(Math.random() * 12);
            if(arr[randomNum] === null) {
                arr[randomNum] = imagesData[i]
                placed = true;
            }
        }
    }
    return arr;
}

export default function Cards({imagesData, handleClick}) {
    const randomizedData = randomizeData(imagesData);
    const cards = createCards(randomizedData, handleClick)
    return (
        <div className="cards">
            {cards}
        </div>
    )
}
