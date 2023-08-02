//////////////////////////////////////////////////////////////////////////
//																		//
//								PHONE CHECKER							//
//																		//
//////////////////////////////////////////////////////////////////////////

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')
const phoneRegExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
	if(phoneRegExp.test(phoneInput.value)){
		phoneResult.innerHTML = 'Correct phone!'
		phoneResult.style.color = 'green'
		phoneResult.style.textShadow = '0 0 10px green'
	} else {
		phoneResult.innerHTML = 'Incorrect phone!'
		phoneResult.style.color = 'red'
		phoneResult.style.textShadow = '0 0 10px red'
	}
}

//////////////////////////////////////////////////////////////////////////
//																		//
//								TAB SLIDER								//
//																		//
//////////////////////////////////////////////////////////////////////////

const tabContent = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')
let nextTab = 0

const hideTabContent = () => {
	tabContent.forEach(item => item.style.display = 'none')
	tabs.forEach(item => item.classList.remove('tab_content_item_active'))
}

const showTabContent = (index = 0) => {
	tabContent[index].style.display = 'block'
	tabs[index].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()

tabsParent.onclick = event => {
	const targetElement = event.target
	if(!targetElement.classList.contains('.tab_content_item')){
		tabs.forEach((tab, tabIndex) => {
			if(targetElement === tab){
				nextTab = tabIndex
				hideTabContent()
				showTabContent(tabIndex)
			}
		})
	}
}

const tabInterval = setInterval(() => {
	hideTabContent()
	showTabContent(nextTab)
	nextTab >= tabs.length - 1 ?  nextTab = 0 : nextTab++ 
}, 3000)


//////////////////////////////////////////////////////////////////////////
//																		//
//								CONVERTOR								//
//																		//
//////////////////////////////////////////////////////////////////////////

const currencies = ['tng',
					'lkr',
					'yen',
					'rub',
					'som',
					'awg',
					'usd',
					'eur',
					'gbp',
					'bhd'
				]

async function convertorRequest(){
	try {
		const response = await fetch('../data/convertor.json')
		const data = await response.json()
		
		for(const element of currencies){
			console.log(`.${element}`);
			const input = document.querySelector(`.${element}`)
			input.oninput = () => {
				const elementsCurren = {},
					elementsInput = {}
				for(let allElement of currencies){
					elementsCurren[allElement] = data[allElement]
					elementsInput[allElement] = document.querySelector(`.${allElement}`)
				}

				const inputValue = elementsInput[element].value
				const currValue = elementsCurren[element]
				delete elementsInput[element]
				delete elementsCurren[element]
				
				for (const сurr in elementsCurren) {
					input.value !== '' ? elementsInput[сurr].value = (inputValue * currValue / elementsCurren[сurr]).toFixed(2) : elementsInput[сurr].value = ''
				}
			}
		}
	} catch(error) {
		console.warn('ERROR:', error.stack)
	}
}
convertorRequest()

//////////////////////////////////////////////////////////////////////////
//																		//
//								CARD SWICHER							//
//																		//
//////////////////////////////////////////////////////////////////////////

const card = document.querySelector('.card')
const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')
const border = document.querySelector('.card')

let count = 1

const fetchCardById = async (id = 1) => {
	try{
		const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
		const data = await response.json()
		const color = String(data.completed === true ? 'lime':'red')
			card.innerHTML = `
				<p>${data.title}</p>
				<p style="color: ${color}; text-shadow: 0 0 10px ${color}">${data.completed}</p>
				<span>${data.id}</span>
			`

			border.style.border = `2px solid ${data.completed === true ? 'lime':'red'}`
			border.style.boxShadow = `0 0 15px ${data.completed === true ? 'lime':'red'}`
	} catch(errorName) {
		console.error("ERROR:", errorName);
	}
}

btnNext.onclick = () => {
	count >= 200 ?  count = 1 : count++
	fetchCardById(count)
}
btnPrev.onclick = () => {
	count <= 1 ? count = 200 : count--
	fetchCardById(count)
}

fetchCardById(count)


// HW-6 (part 2)
fetch('https://jsonplaceholder.typicode.com/posts')
	.then(response => response.json())
	.then(data => console.log(data))

//////////////////////////////////////////////////////////////////////////
//																		//
//								WHEATHER API							//
//																		//
//////////////////////////////////////////////////////////////////////////

const searchCity = document.querySelector('.searchCity')
const cityTemp = document.querySelector('.cityTemp')
const cityName = document.querySelector('.cityName')

const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather'
const apiKey = 'e417df62e04d3b1b111abeab19cea714'


searchCity.oninput = async() => {
    const response = await fetch(`${BASE_URL}?q=${searchCity.value}&appid=${apiKey}`)
    const data = await response.json()
    cityName.innerHTML = data?.name || '...'
	cityTemp.innerHTML = data?.main?.temp ? `${Math.round(data?.main?.temp - 274)}&deg;C` : '...'
}

async function test(){
	const response = await fetch('https://ipinfo.io?token=d4f19f73332858')
	const data = await response.json()
	const response2 = await fetch(`${BASE_URL}?q=${data.city}&appid=${apiKey}`)
    const data2 = await response2.json()
    cityName.innerHTML = data2?.name || '...'
	cityTemp.innerHTML = data2?.main?.temp ? `${Math.round(data2?.main?.temp - 274)}&deg;C` : '...'
}
test()
