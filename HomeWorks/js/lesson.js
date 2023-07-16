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

