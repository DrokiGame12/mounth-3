//////////////////////////////////////////////////////////////////////////
//																		//
//							Home Work 1 (part 1)						//
//																		//
//////////////////////////////////////////////////////////////////////////

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')
const gmailRegExp = /^[\w\.]{0,}\@gmail\.com$/

gmailButton.addEventListener('click', () => {
	if(gmailRegExp.test(gmailInput.value)){
		gmailResult.innerHTML = 'Correct emeil!'
		gmailResult.style.color = 'green'
	} else {
		gmailResult.innerHTML = 'Incorrect emeil!'
		gmailResult.style.color = 'red'
	}
})



//////////////////////////////////////////////////////////////////////////
//																		//
//							Home Work 1 (part 2)						//
//																		//
//////////////////////////////////////////////////////////////////////////

const childBlock = document.querySelector('.child_block')
let maxPos = 446,	modeNum = 2
let posX = 0, 		posY = 0
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
	childBlock.style.left = `${posX}px`
	childBlock.style.top = `${posY}px`
}, 10)

////				мгновенно (версия 2)
// function moveBlock(leftIndent, MaxLeftIndent){
// 	leftIndent++
// 	childBlock.style.left = `${leftIndent}px`
// 	if(leftIndent <= MaxLeftIndent){
// 		moveBlock(MaxLeftIndent)
// 	}
// }
//moveBlock(0, 445)



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
			minNum.innerHTML = numTime(min)
			secNum.innerHTML = numTime(sec)
			mlSecNum.innerHTML = numTime(mlSec)
		}, 10)
		//	говорит что таймер включен
		timerIsWork = true
	}
})

//	Если цифра больше 10 и является "00"
//	Если цифра меньше 10 и не является "00", то перед ней ставится "0" (example: 07)
function numTime(time){
	return time >= 10 && !!String(time) ? time:`0${time}`
}

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

const userRequest = new XMLHttpRequest()
userRequest.open('GET', '../data/users.json')
userRequest.setRequestHeader('Content-type', 'application/json')
userRequest.send()
userRequest.addEventListener('load', () => {
	const userData = JSON.parse(userRequest.response)
	console.log(userData);
	userData.forEach(user => {
		const usersBlock = document.querySelector('#users')
		const newUser = document.createElement('div')
		newUser.innerHTML = `
			<div class="json_block_users_user">
				<img src="${user.img !== undefined ? user.img : "https://freesvg.org/img/abstract-user-flat-4.png"}" alt="" class="json_block_users_user_img">
				<span class="json_block_users_user_name">${user.name}</span>
				<span class="json_block_users_user_age">${user.age !== undefined ? user.age : "???"}</span>
			</div>`
		usersBlock.append(newUser)
	})
})

// const text = new XMLHttpRequest()
// userRequest.open('GET', '../data/text.json')
// userRequest.setRequestHeader('Content-type', 'application/json')
// userRequest.send()
// userRequest.addEventListener('load', () => {
// 	const textData = JSON.parse(userRequest.response)
// 	console.log(textData.text);
// })