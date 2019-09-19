import { createStore, combineReducers } from 'redux';
import BookReducer from './book/reducer';
import LibraryReducer from './library/reducer';


const store = createStore(combineReducers({
	book: BookReducer,
	library: LibraryReducer
}));

export default store;