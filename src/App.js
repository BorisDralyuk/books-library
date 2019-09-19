import React, { Component } from 'react';
import Table from './components/table/Table';
import compose from './utils/compose';
import withBooksService from './hoc/withBooksService';
import ModalBuilder from './components/modalBuilder/ModalBuilder';
import { connect } from 'react-redux';
import { setLibrary } from './redux/library/actions';
import {
  setId,
  setTitle,
  setAuthor,
  setDate,
  clearBook
} from './redux/book/actions';
import './App.css';


class App extends Component {

  state = {
    loading: false,
    openAddModal: false,
    openEditModal: false,
    openDeleteModal: false,
    selectedBook: {}
  }

  componentDidMount(){
    this.props.booksService.getAllBooks().then(res => {
        this.setState({
          loading: true
        })

        this.props.setLibrary(res)
    })
  }

  addBook = (e) => {
    this.setState({
      openAddModal: true,
      selectedBook: {...this.props.book }
    })
  }

  editBook = (e) => {
    const b = this.findBook(e);
    this.setState({
      openEditModal: true,
      selectedBook: b
    })

    this.props.setId(b.id)
    this.props.setTitle(b.title)
    this.props.setAuthor(b.author)
    this.props.setDate(b.date)
  }

  deleteBook = (e) => {
    const b = this.findBook(e);
    this.setState({
      openDeleteModal: true,
      selectedBook: b
    })
  }

  closeModal = () => {
    this.setState({
      openAddModal: false,
      openEditModal: false,
      openDeleteModal: false
    })
  }

  findBook = (id) => {
    return this.props.books.find(v => v.id === id)
  }

  render(){
    const { loading, openAddModal, openEditModal, openDeleteModal, selectedBook} = this.state;

    if (!loading) {
      return <div>Loading...</div>
    }

    return (
      <div className="App">
          <Table
            data={this.props.books}
            addBook={this.addBook}
            editBook={this.editBook}
            deleteBook={this.deleteBook}
          />
          {
            openAddModal
              ? <ModalBuilder
                mode='add'
                book={selectedBook}
                open={openAddModal}
                cancel={this.closeModal}
                save={this.closeModal}
              />
              : null
          }


          {
            openEditModal
              ?
              <ModalBuilder
                mode='edit'
                book={selectedBook}
                open={openEditModal}
                cancel={this.closeModal}
                save={this.closeModal}
              />
              : null
          }

          {
            openDeleteModal
              ?
              <ModalBuilder
                mode='delete'
                book={selectedBook}
                open={openDeleteModal}
                cancel={this.closeModal}
                save={this.closeModal}
              />
              : null
          }
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    book: state.book,
    books: state.library.books
  }
}

const mapDispatchToProps = {
  setId,
  setTitle,
  setAuthor,
  setDate,
  clearBook,
  setLibrary
}


export default compose(
  withBooksService(),
  connect(mapStateToProps, mapDispatchToProps)
)(App)
