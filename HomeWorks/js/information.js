const changeData = (titleData, bodyData, urlData) => {
	const blockTitle = document.querySelector('#dataTitle')
	const blockBody = document.querySelector('#dataBody')
	const block = document.querySelector('#content')
	blockBody.innerHTML = ''
	if(bodyData !== '' || bodyData === {}){
		for (const key in bodyData) {
			blockBody.innerHTML += `<p><b>${key}</b> - ${bodyData[key]}</p>`
		}
		block.style = ''
	} else {
		blockBody.innerHTML = `
			<div  class="error">
				<h5>ERROR 404</h5> - data is not found
			</div>
		`
		block.style.boxShadow = '0 0 20px red inset'
		block.style.border = '2px dotted red'
	}
	blockTitle.innerHTML = `
		<a href="${urlData}" target="_blank">
		 	${titleData}
		</a>
	`
}

const createMenu = (data) => {
	const jsMenu = document.querySelector('#menu')
	for (const title in data) {
		const titleBlock = document.createElement('div')
		titleBlock.classList.add('information_inner_menu_block')
		let datas = ``
		for (const blockTitle in data[title]) {
			if(blockTitle === title){
				continue
			} else {
				datas += `<span class="${title}Data" id="data">${blockTitle}</span>`
			}
		}
		titleBlock.innerHTML = `
			<h4 class="title" id="${title}Title">${title}</h4>
			<div class="information_inner_menu_block_titles" id="${title}Body">
				${datas}
			</div>
		`
		titleBlock.id = `${title}Block`
		jsMenu.append(titleBlock)
	}
}

const titlesPressed = (data) => {
	const subjectsTitle = document.querySelectorAll('.title')
	const subjectsBody = document.querySelectorAll('#data')
	subjectsTitle.forEach(subjectTitle => {
		const blockStyle = document.querySelector(`#${(subjectTitle.innerHTML)}Body`).style
		const subjectData = data[subjectTitle.innerHTML]
		subjectTitle.onclick = () => {
			const subjectDataTitle = subjectData[subjectTitle.innerHTML]
			blockStyle.display === 'none' || blockStyle.display === '' ? blockStyle.display = 'flex' : blockStyle.display = 'none'
			changeData(subjectTitle.innerHTML, subjectDataTitle.body, subjectData[subjectTitle.innerHTML].URL)
		}
		subjectsBody.forEach(subjectBody => {
			const subjectDataBody = subjectData[subjectBody.innerHTML]
			if(subjectDataBody !== undefined) {
				subjectBody.onclick = () => {
					changeData(subjectBody.innerHTML, subjectDataBody.body, subjectDataBody.URL)
				}
			}
		})
	})
}

const dataExport = async () => {
	try{
		const response = await fetch('../data/information.json')
		const data = await response.json()
		createMenu(data)
		titlesPressed(data)
	} catch(errorName) {
		console.error('ERROR: ' + errorName);
	}
}
dataExport()


const input = document.querySelector('#input')
input.oninput = () => {
	const titles = document.querySelectorAll('.title')
	const value = input.value.toLowerCase()
	titles.forEach(title => {
		const titleText = title.innerHTML.toLowerCase()
		const block = document.querySelector(`#${titleText}Block`)
		const datas = document.querySelectorAll(`.${titleText}Data`)
		let isTrue
		datas.forEach(data => {
			const dataText = data.innerHTML.toLowerCase()
			if(value === ''){
				block.style.display = 'block'
				data.style.display = 'block'
			} else if(dataText.includes(value)){
				block.style.display = 'block'
				data.style.display = 'block'
				isTrue = true
			} else {
				if(isTrue) {
					block.style.display = 'block'
					data.style.display = 'none'
				} else {
					if(titleText.includes(value)){
						block.style.display = 'block'
					} else {
						block.style.display = 'none'
					}
                    data.style.display = 'none'
				}
			}
		})
	})
	
}