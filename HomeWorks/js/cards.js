const cardsList = document.querySelector('.cards_list')
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'
const IMG_URL = 'https://fakeimg.pl/'
const bgColor = '0ff',
    textColor = '000'

async function cardsRequest() {
    try{
        const response = await fetch(BASE_URL)  
        const data = await response.json()
        data.forEach(card => {
            let cardBlock = document.createElement('div')
            cardBlock.innerHTML = `
                <img src="${IMG_URL}/${500}x${100}/${bgColor}/${textColor}/?text=ID:%20${String(card.id).padStart(3, '0')}&font=museo" alt="">
                <h3>${card.title}</h3>
                <p>${card.body}</p>
            `
            cardsList.append(cardBlock)
            
        })
        cardsList.style.marginBottom = '0px'
    } catch(errorName) {
        console.warn('ERROR:' + errorName);
    }
    
}
cardsRequest()