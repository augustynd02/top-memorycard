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

export default function Cards({imagesData, handleClick}) {
    const cards = createCards(imagesData, handleClick)
    return (
        <div className="cards">
            {cards}
        </div>
    )
}
