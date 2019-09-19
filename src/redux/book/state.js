import moment from 'moment';

const BookState = {
	id: 0,
	title: '',
	author: '',
	date: moment(new Date()).format('DD/MM/YYYY')
}

export default BookState;