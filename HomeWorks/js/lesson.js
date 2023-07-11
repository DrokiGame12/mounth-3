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