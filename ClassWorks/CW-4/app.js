//////////////////////////////////////////////////////////////////////////
//																		//
//						JSON - JavaScript Object Notation				//
//																		//
//////////////////////////////////////////////////////////////////////////

//JSON - текстовый обект

const obj = {
    name: 'John',
    age: 42
}

const json = JSON.stringify(obj)
console.log(json);

const newObj = JSON.parse(json)
console.log(newObj);

console.log('')
//////////////////////////////////////////////////////////////////////////
//																		//
//							XHR - XML Http Request						//
//																		//
//////////////////////////////////////////////////////////////////////////

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
	const request = new XMLHttpRequest()							// 1. создание запроса
	request.open('GET', 'items.json')								// 2. объявление метода запроса и указывания пути
	request.setRequestHeader('Content-type', 'application/json')	// 3. указывание загаловка
	request.send()													// 4. отправка запроса
	request.addEventListener('load', () => {						// 5. обработка запроса
		const data = JSON.parse(request.response)
		document.querySelector('.name').innerHTML = data.name
		document.querySelector('.age').innerHTML = data.age
	})
})