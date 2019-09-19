import React from 'react';
import { BooksServiceConsumer } from '../service-context/BooksServiceContext';

const withBooksService = () => (Wrapper) => {
	return (props) => {
		return (
			<BooksServiceConsumer>
				{
					(booksService) => {
						return <Wrapper {...props} booksService={booksService} />
					}
				}
			</BooksServiceConsumer>
		)
	}
}

export default withBooksService;