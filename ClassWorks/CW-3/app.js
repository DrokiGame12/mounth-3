//////////////////////////////////////////////////////////////////////////
//																		//
//							Преобретение классов						//
//																		//
//////////////////////////////////////////////////////////////////////////

// const wrapper = document.querySelector('.btn-block')
// const buttons = document.querySelectorAll('button')

// //	псевдоМассив - не исходит от 'Array'
// buttons[0].classList.add('red')
// buttons[0].classList.remove('red')

// // event - полная информация про событии (ex: 'Click')

// buttons.forEach(button => {
// 	button.addEventListener('click', event => {
// 		if(event.target.classList.contains('red')){
// 			event.target.classList.remove('red')
// 		} else {
// 			event.target.classList.add('red')
// 		}
// 	})
// })

// const newButton = document.createElement('button')
// wrapper.append(newButton)


//////////////////////////////////////////////////////////////////////////
//																		//
//							Делегирование событий						//
//																		//
//////////////////////////////////////////////////////////////////////////

//	Регистрация событий - 
const wrapper = document.querySelector('.btn-block')
const buttons = document.querySelectorAll('button')

wrapper.onclick = (event) => {
	const targetElement = event.target
	if(targetElement.tagName.toLowerCase === 'button'){
		targetElement.onclick = () => {
			if(event.target.classList.contains('red')){
				event.target.classList.remove('red')
			} else {
				event.target.classList.add('red')
			}
		}
	}
}

const newButton = document.createElement('button')
wrapper.append(newButton)