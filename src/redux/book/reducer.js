import BookState from "./state";
import moment from 'moment';
import {  SET_ID,
	        SET_TITLE,
					SET_AUTHOR,
					SET_DATE,
					CLEAR_BOOK } from "./actions";
import { validTitle, validAuthor } from "../../utils/validators";
					


const BookReducer = (state = BookState, actions) => {
	switch(actions.type){
		case SET_ID: {
			return { ...state, id: actions.payload }
		} 
		case SET_TITLE: {
			let title = ''
		
			if (actions.payload !== '')
					title = actions.payload[0].toUpperCase() + actions.payload.slice(1)

			const avalidText = title.replace(validTitle, '')
			return { ...state, title: avalidText  }
		} 
		case SET_AUTHOR: {
			const avalidText = actions.payload.replace(validAuthor, '')
			return { ...state, author: avalidText }
		} 
		case SET_DATE: {
			return { ...state, date: actions.payload }
		} 
		case CLEAR_BOOK: {
			return {
								id: 0,
								title: '',
								author: '',
								date: moment(new Date()).format('DD/MM/YYYY')
							}
		}
		default: return state;
	}
}

export default BookReducer;