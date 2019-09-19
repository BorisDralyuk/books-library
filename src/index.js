import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BooksServiceProvider } from './service-context/BooksServiceContext';
import BooksService from './services/BooksService';
import { Provider } from 'react-redux';
import store from './redux/store';
import ErrorBoundry from './components/error-boundry/ErrorBoundry';

const booksService = new BooksService ()

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundry>
			<BooksServiceProvider value={booksService}>
					<App />
			</BooksServiceProvider>
		</ErrorBoundry>
	</Provider>
, document.getElementById('root'));

serviceWorker.unregister();
