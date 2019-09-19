import LibraryState from "./state";
import { SET_LIBRARY, ADD_BOOK, EDIT_BOOK, DELETE_BOOK } from "./actions";


const LibraryReducer = (state = LibraryState, actions) => {
	switch (actions.type) {
		case SET_LIBRARY: {
			return { ...state, books: actions.payload };
		}
		case ADD_BOOK: {
			const idNext = state.books[state.books.length - 1].id + 1
			const newBook = { ...actions.payload, id: idNext}
			const b = [...state.books, newBook];
			return { ...state, books: b };
		}
		case EDIT_BOOK: {
			return {
				...state, books: state.books.map(v => {
					if (v.id === actions.payload.id) {
						return { ...actions.payload }
					}
					return { ...v }
				})
			};
		}
		case DELETE_BOOK: {
			const index = state.books.indexOf(actions.payload);
			if(index !== -1){
				const before = state.books.slice(0, index)
				const after = state.books.slice(index + 1, state.books.length)
				return   {...state, books: [...before, ...after]}
			}

			return { ...state };
		}
		default: return state;
	}
}

export default LibraryReducer;