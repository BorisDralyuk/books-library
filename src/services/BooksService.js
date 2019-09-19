export default class BooksService {
	_apiBase = 'http://localhost:3001';

	getResources = async(url) => {
		const res = await fetch(`${this._apiBase}${url}`);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}`);
		}
		return await res.json();
	}

	getAllBooks = async() => {
	  const res = await this.getResources('/books');
		return res;
	}
}
