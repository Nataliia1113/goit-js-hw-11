
const KEY = '42770823-dcf8f8c65a8a1b4479734e1b0';
const BASE_URI = 'https://pixabay.com/api/';
const CARD = 'cards'

const LINK = `${BASE_URI}?key=${KEY}&q=${CARD}`;

export function getImages(cards){
    let truthCards = cards;  
    if(cards.includes(" ")){
      truthCards = cards.split(" ").join("+");
    }

    return fetch(LINK)
    .then(response => {
        if(!response.ok){
            throw new Error('Images error!')
        }
        return response.json()
    })
    .catch(error => {
        alert(error)
    })
}
