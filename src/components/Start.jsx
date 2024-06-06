import '../styles/Start.css';

export default function Start({ setIsGameOn, setQuery }) {
    function handleSubmit(e) {
        e.preventDefault();
        const newQuery = document.querySelector("#query").value;
        setQuery(newQuery)
        setIsGameOn(true);
    }
    return (
        <div className="main-container menu">
            <h2>Select your topic:</h2>
            <input type="text" id="query"/>
            <button onClick={(e) => { handleSubmit(e) }}>OK</button>
        </div>
    )
}
