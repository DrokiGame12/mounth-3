//////////////////////////////////////////////////////////////////////////
//																		//
//							Home Work 1 (part 1)						//
//																		//
//////////////////////////////////////////////////////////////////////////

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')
const gmailComRegExp = /^\w{1,}[\w\.]{0,}\w{1,}\@gmail\.com$/
const gmailRuRegExp = /^\w{1,}[\w\.]{0,}\w{1,}\@mail\.ru$/
gmailButton.addEventListener('click', () => {
	if(gmailComRegExp.test(gmailInput.value) || gmailRuRegExp.test(gmailInput.value)){
		gmailResult.innerHTML = 'Correct emeil!'
		gmailResult.style.color = 'green'
		gmailResult.style.textShadow = '0 0 20px green'
	} else {
		gmailResult.innerHTML = 'Incorrect emeil!'
		gmailResult.style.color = 'red'
		gmailResult.style.textShadow ='0 0 20px red'
	}
})



//////////////////////////////////////////////////////////////////////////
//																		//
//							Home Work 1 (part 2)						//
//																		//
//////////////////////////////////////////////////////////////////////////

const childBlock = document.querySelector('.block_child')
let maxPos = 446,	modeNum = 2
let posX = 0, 		posY = 0
let rotate = 0
let posBorder = maxPos
const blockMove = setInterval(() => {
	if(posX !== posBorder){
		posX += modeNum 
	} else if(posY !== posBorder){
		posY += modeNum
	} else {
		modeNum = -modeNum
		posBorder === maxPos ? posBorder = 0 : posBorder = maxPos
	}
	rotate >= 360 ? rotate = 0 : rotate += 2

	childBlock.style.left = `${posX}px`
	childBlock.style.top = `${posY}px`
	childBlock.style.transform = `rotate(-${rotate}deg)`
}, 10)

//////////////////////////////////////////////////////////////////////////
//																		//
//								Home Work 2								//
//																		//
//////////////////////////////////////////////////////////////////////////

//	Кнопки
const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const resetButton = document.querySelector('#reset')
//	Время, то что видит пользователь
const minNum = document.querySelector('#minutes')
const secNum = document.querySelector('#seconds')
const mlSecNum = document.querySelector('#ml-seconds')
//	Время, то что видит программа
let mlSec = Number(mlSecNum.innerHTML)
let sec = Number(secNum.innerHTML)
let min = Number(minNum.innerHTML)
//	Проверяет работает ли таймер
let timerIsWork = false

/*	При нажатии на кнопку "старт":
	=> запускается стрелочная функция
	=> проверяет работает ли таймер:
		=> да	=>	запускает таймер
		=> нет	=>	ничего
*/
startButton.addEventListener('click', () => {
	if(!timerIsWork){
		const timer = setInterval(() => {
			//	Считает время
			mlSec++
			if(mlSec === 100){
				mlSec = 0
				sec++
			}
			if(sec === 60){
				sec = 0
				min++
			}
			//		Упрощение кода	
			stopButton.addEventListener('click', () => stopTimer(timer))
			resetButton.addEventListener('click', () => resetTimer(timer))
			//	Показывает пользователю, 
			// в конце т.к. при нажатии на кнопку "ресет" он сбрасывает значения
			minNum.innerHTML = String(min).padStart(2, '0')
			secNum.innerHTML = String(sec).padStart(2, '0')
			mlSecNum.innerHTML = String(mlSec).padStart(2, '0')
		}, 10)
		//	говорит что таймер включен
		timerIsWork = true
	}
})

//	При нажатии на кнопку "стоп":
//	=> говорит что таймер выключен
//	=> останавливает таймер
function stopTimer(timer){
	timerIsWork = false
	clearInterval(timer)
}

//	При нажатии на кнопку "ресет":
//	=> сбрасывает время 
//	=> говорит что таймер выключен
//	=> остонавливает таймер 
function resetTimer(timer){
	mlSecNum.innerHTML = '00'
	secNum.innerHTML = '00'
	minNum.innerHTML = '00'
	mlSec = 0
	sec = 0
	min = 0

	timerIsWork = false
	clearInterval(timer)
}

//////////////////////////////////////////////////////////////////////////
//																		//
//								Home Work 3								//
//																		//
//////////////////////////////////////////////////////////////////////////

//// XMLHttpRequest
// const userRequest = new XMLHttpRequest()
// userRequest.open('GET', '../data/users.json')
// userRequest.setRequestHeader('Content-type', 'application/json')
// userRequest.send()
// userRequest.addEventListener('load', () => {
// 	const userData = JSON.parse(userRequest.response)
// 	console.log(userData);
// 	userData.forEach(user => {
// 		const usersBlock = document.querySelector('#users')
// 		const newUser = document.createElement('div')
// 		newUser.innerHTML = `
// 			<div class="json_block_users_user">
// 				<img src="${user.img !== undefined ? user.img : "https://freesvg.org/img/abstract-user-flat-4.png"}" alt="" class="json_block_users_user_img">
// 				<span class="json_block_users_user_name">${user.name}</span>
// 				<span class="json_block_users_user_age">${user.age !== undefined ? user.age : "???"}</span>
// 			</div>`
// 		usersBlock.append(newUser)
// 	})
// })

const usersBlock = document.querySelector('#users')
async function userRequest() {
	try {
        const response = await fetch('../data/users.json')
        const usersData = await response.json()
        usersData.forEach(userData => {
			const user = document.createElement('div')
			user.innerHTML = `
				<div class="json_block_users_user">
					<img src="${userData.img !== undefined ? userData.img : "https://freesvg.org/img/abstract-user-flat-4.png"}" alt="" class="json_block_users_user_img">
					<span class="json_block_users_user_name">${userData.name}</span>
					<span class="json_block_users_user_age">${userData.age !== undefined ? userData.age : "???"}</span>
				</div>`
			usersBlock.append(user)
		})
    } catch(errorName) {
		
		console.error('ERROR: ' + errorName)
	}
}
userRequest()
