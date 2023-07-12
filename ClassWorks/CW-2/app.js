//////////////////////////////////////////////////////////////////
//																//
//					setTimeout(function, time)					//
//																//
//////////////////////////////////////////////////////////////////

//				Асинхронный
setTimeout(() => {
	return console.log(3)
}, 2000)

const logger1 = setTimeout(() => {
	return console.log(4)
}, 3000)

const logger2 = () => {
	return console.log(2)
}
setTimeout(logger2, 0)

//				Cинхронный
console.log(1);			


//////////////////////////////////////////////////////////////////
//																//
//					setInterval(function, time)					//
//																//
//////////////////////////////////////////////////////////////////

const interval = setInterval(() => {
	console.log(5);
}, 4000)

setTimeout(() => {
	clearInterval(interval)
}, 8000)

//				двойная Асинхронность
const button = document.querySelector('button')
button.addEventListener('click', () => {
	setTimeout(() => {
		console.log('You click me 5 second ago')
	}, 5000)
})


//////////////////////////////////////////////////////////////////
//																//
//					HOF - high ordered function					//
//																//
//////////////////////////////////////////////////////////////////

//	функция высшего порядка
const subject = prompt('Technology?').trim()
const doHomeWork = (finish, subject) => {
	if(subject === ''){
		alert('ERROR')
		return
	}else{
		alert(`Starting my ${subject} homework!`)
	}
	return finish()
}

const alertFinish = () => {
	return alert('Finish my homework!')
}
doHomeWork(alertFinish, subject)