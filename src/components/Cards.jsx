import '../styles/Cards.css'

function createCards(imagesData) {
    const cards = [];
    imagesData.forEach(data => {
        cards.push(
            <div className="card" key={data.id}>
                <img src={data.URL} alt=""/>
            </div>
        )
    })
    return cards;
}

export default function Cards({imagesData}) {
    const cards = createCards(imagesData)
    return (
        <div className="cards">
            {cards}
        </div>
    )
}
