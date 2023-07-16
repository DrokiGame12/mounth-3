//////////////////////////////////////////////////////////////////////////////////
//																				//
//										MODAL									//
//																				//
//////////////////////////////////////////////////////////////////////////////////

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModalButton = document.querySelector('.modal_dialog_content_close')

const openModal = () => {
	modal.style.display = 'block'
	document.body.style.overflow = 'hidden'
}

const closeModal = () => {
	modal.style.display = 'none'
	document.body.style.overflow = ''
}

const scrollOpenModal = () => {
	const windowBottomPos = window.innerHeight + window.scrollY
	const bodyHeight = document.body.offsetHeight
    if (windowBottomPos === bodyHeight) {
		openModal()
		document.removeEventListener('scroll', scrollOpenModal)
    }
}

modalTrigger.onclick = () => openModal()
closeModalButton.onclick = () => closeModal()
modal.onclick = (event) => {
	event.target === modal && closeModal() 
}
document.addEventListener('scroll', scrollOpenModal)

setTimeout(() => openModal(), 10000)