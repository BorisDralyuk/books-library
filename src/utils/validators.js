const valid = {
	error: false,
	errorMessage: ''
}

const validTitle = /[^A-Za-z0-9\s]/g
const validAuthor = /[^A-Za-z\s]/g

const setValidObj = (errorMessage) => {
	return { error: true, errorMessage }
}

const validLettersTitle = (e) => {
	return (validTitle.test(e))
}

const validLettersAuthor = (e) => {
	return (validAuthor.test(e))
}

const validatorTitle = (e) => {
	if (e.length === 0) {
		return setValidObj('error title');
	}
	
	if(validLettersTitle(e)){
		return setValidObj('letters and numbers only');
	}

	return valid
}

const validatorAuthor = (e) => {
	if (e.length === 0) {
		return setValidObj('error author');
	}

	if (validLettersAuthor(e)) {
		return setValidObj('letters only');
	}
	return valid
}

export {
	validatorTitle,
	validatorAuthor,
	validTitle,
	validAuthor
}