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
	} else {
		phoneResult.innerHTML = 'Incorrect phone!'
		phoneResult.style.color = 'red'
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

const convert = (element) => {
	const input = document.querySelector(`.${element}`)
	input.oninput = () => {
		const request = new XMLHttpRequest()
		request.open('GET', '../data/convertor.json')
		request.setRequestHeader('Content-type', 'application/json')
		request.send()
		request.onload = () => {
			const response = JSON.parse(request.response)
			
			//	убрать, появляется автоматически
			const som = response.som
			const usd = response.usd
			const eur = response.eur
			const gbp = response.gbp
			const somInput = document.querySelector('.som')
			const usdInput = document.querySelector('.usd')
			const eurInput = document.querySelector('.eur')
			const gbpInput = document.querySelector('.gbp')

			//	автоматизировать
			if(input.value === ''){
				somInput.value = ''
				usdInput.value = ''
				eurInput.value = ''
				gbpInput.value = ''
			} else if(element === 'som'){
				usdInput.value = (input.value * eval(`response.${element}`) / usd).toFixed(2)
				eurInput.value = (input.value * eval(`response.${element}`) / eur).toFixed(2)
				gbpInput.value = (input.value * eval(`response.${element}`) / gbp).toFixed(2)
			} else if(element === 'usd') {
				somInput.value = (input.value * eval(`response.${element}`) / som).toFixed(2)
				eurInput.value = (input.value * eval(`response.${element}`) / eur).toFixed(2)
				gbpInput.value = (input.value * eval(`response.${element}`) / gbp).toFixed(2)
			} else if(element === 'eur') {
				somInput.value = (input.value * eval(`response.${element}`) / som).toFixed(2)
				usdInput.value = (input.value * eval(`response.${element}`) / usd).toFixed(2)
				gbpInput.value = (input.value * eval(`response.${element}`) / gbp).toFixed(2)
			} else if(element === 'gbp') {
				somInput.value = (input.value * eval(`response.${element}`) / som).toFixed(2)
				usdInput.value = (input.value * eval(`response.${element}`) / usd).toFixed(2)
				eurInput.value = (input.value * eval(`response.${element}`) / eur).toFixed(2)
			}
		}
	}
}
// убрать
convert('som')
convert('usd')
convert('eur')
convert('gbp')
