//////////////////////////////////////////////////////////////////////////
//																		//
//						    HCB - Hell CallBack				            //
//																		//
//////////////////////////////////////////////////////////////////////////

setTimeout(() => {
    setTimeout(() => {
        setTimeout(() => {
            setTimeout(() => {
                setTimeout(() => {
                    setTimeout(() => {
                        setTimeout(() => {
                            setTimeout(() => {
                                setTimeout(() => {
                                    setTimeout(() => {}, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)

//////////////////////////////////////////////////////////////////////////
//																		//
//							promise - обещание							//
//																		//
//////////////////////////////////////////////////////////////////////////

const requestPromise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		const product = {
			name: 'iphone',
			price: '$2000'
		}
		console.log(product, '1 step');
		resolve(product)
		reject()
	}, 1000)
})

const resolveData = (product) => {
	setTimeout(() => {
		product.name = 'samsung'
		console.log(product, '2 step');
	}, 1000)
}

const rejectData = () => {
	console.log('ERROR Promise is not resolved!');
}

requestPromise1.then(resolveData, rejectData)



const requestPromise2 = new Promise((resolve) => {
	setTimeout(() => {
		console.warn('START')
		const product = {
			name: 'iphone',
			price: '$2000'
		}
		console.log(product, '1 step');
		resolve(product)
	}, 3000)
})

requestPromise2.then(product => {
	return new Promise(resolve => {
		setTimeout(() => {
			product.price = '$4000'
			console.log(product, '2 step');
			resolve(product)
		}, 1000)
	})
}).then(product => {
	setTimeout(() => {
		product.soldOut = true
		console.log(product, '3 step');
	}, 1000)
}).catch(() => {
	return console.error('ERROR')
}).finally(() => {
	setTimeout(() =>{
		return console.warn('FINNALY')
	}, 2000)
})


//////////////////////////////////////////////////////////////////////////
//																		//
//									fetch								//
//																		//
//////////////////////////////////////////////////////////////////////////


const url = 'https://jsonplaceholder.typicode.com/todos'				// API - Application Programming Interface
fetch(url)
	.then(response => response.json())
	.then(data => console.log(data))
