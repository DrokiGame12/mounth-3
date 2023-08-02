//////////////////////////////////////////////////////////////////
//																//
//								await							//
//																//
//////////////////////////////////////////////////////////////////

async function summSyns() {
	const  summ = await (1 + 2)
	console.log(summ)
}

console.log(1);
summSyns()
console.log(2);


//////////////////////////////////////////////////////////////////
//																//
//								fetch							//
//																//
//////////////////////////////////////////////////////////////////

const data = {
	name: 'Akel',
	age: 14
}

fetch('https://jsonplaceholder.typicode.com/todos', {
	method: 'PUST',
    headers: {'Content-Type': 'application/json'},
	body: JSON.stringify(data)
})
	.then(response => response.json())
	.then(data => console.log(data))

getData()

