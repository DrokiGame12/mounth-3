//////////////////////////////////////////////////////////////////
//																//
//						Home Work 1 (part 1)					//
//																//
//////////////////////////////////////////////////////////////////

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



//////////////////////////////////////////////////////////////////
//																//
//						Home Work 1 (part 2)					//
//																//
//////////////////////////////////////////////////////////////////

const childBlock = document.querySelector('.child_block')
const moveButton = document.querySelector('#move_button')

moveButton.addEventListener('click', () => {
	let left = 0
	moveButton.innerHTML = 'restart'
	setInterval(() => {
		if (left > 445){
			clearInterval(1)
		} else {
			left++
			return childBlock.style.left = `${left}px`
		}
	}, 10)
})

//				мгновенно (версия 2)
function moveBlock(leftIndent, MaxLeftIndent){
	leftIndent++
	childBlock.style.left = `${leftIndent}px`
	if(leftIndent <= MaxLeftIndent){
		moveBlock(MaxLeftIndent)
	}
}
//moveBlock(0, 445)