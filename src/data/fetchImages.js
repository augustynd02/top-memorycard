const key = "40203754-d7ced5c5ef4a13f8786ccf699";

export default async function fetchImages(query) {
    const response = await fetch(`https://pixabay.com/api/?key=${key}&q=${query}&orientation=vertical&per_page=12`)
    const data = await response.json();
    const images = [];
    data.hits.forEach(hit => {
        images.push({
            id: hit.id,
            URL: hit.largeImageURL,
            clicked: false
        })
    })
    return images;
}
