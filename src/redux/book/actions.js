const SET_ID = 'SET_ID';
const SET_TITLE = 'SET_TITLE';
const SET_AUTHOR = 'SET_AUTHOR';
const SET_DATE = 'SET_DATE';
const CLEAR_BOOK = 'CLEAR_BOOK';


const setId = (payload) => {
	return {
		payload: payload,
		type: SET_ID
	}
}

const setTitle = (payload) => {
	return {
		payload: payload,
		type: SET_TITLE
	}
}

const setAuthor = (payload) => {
	return {
		payload: payload,
		type: SET_AUTHOR
	}
}

const setDate = (payload) => {
	return {
		payload: payload,
		type: SET_DATE
	}
}

const clearBook = () => {
	return {
		type: CLEAR_BOOK
	}
}

export {
	SET_ID,
	SET_TITLE,
	SET_AUTHOR,
	SET_DATE,
	CLEAR_BOOK,
	setId,
	setTitle,
	setAuthor,
	setDate,
	clearBook
}
