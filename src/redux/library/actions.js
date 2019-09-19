const SET_LIBRARY = 'SET_LIBRARY';
const ADD_BOOK = 'ADD_BOOK';
const EDIT_BOOK = 'EDIT_BOOK';
const DELETE_BOOK = 'DELETE_BOOK';


const setLibrary = (payload) => {
	return {
		payload: payload,
		type: SET_LIBRARY
	}
}

const addBook = (payload) => {
	return {
		payload: payload,
		type: ADD_BOOK
	}
}

const editBook = (payload) => {
	return {
		payload: payload,
		type: EDIT_BOOK
	}
}

const deleteBook = (payload) => {
	return {
		payload: payload,
		type: DELETE_BOOK
	}
}

export {
	ADD_BOOK,
	SET_LIBRARY,
	EDIT_BOOK,
	DELETE_BOOK,
	setLibrary,
	addBook,
	editBook,
	deleteBook
}