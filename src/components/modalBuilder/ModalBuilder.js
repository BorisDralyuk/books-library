import React, { Component } from 'react';
import Modal from '../modal/Modal';
import { validatorTitle, validatorAuthor } from '../../utils/validators';
import Input from '../../controls/input/Input';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import {
	setTitle,
	setAuthor,
	setDate,
	clearBook
} from '../../redux/book/actions';
import { editBook, addBook, deleteBook } from '../../redux/library/actions';
import Date from '../../controls/date/Date';


class ModalBuilder extends Component {

	state = {
		edit: {
			inputs: [
				{
					placeholder: 'title book',
					value: this.props.book.title,
					validator: validatorTitle,
					change: this.props.setTitle
				},
				{
					placeholder: 'author book',
					value: this.props.book.author,
					validator: validatorAuthor,
					change: this.props.setAuthor
				}
			]
		},
		delete: {
			text: 'Do you really want to delete the book?'
		}

	}

	createInputs = () => {
		if(this.props.mode === 'delete'){
			return <React.Fragment>
				<h3 style={{ color: 'red' }}>{this.state.delete.text}</h3>
				<h2>{this.props.book.title}</h2>
			</React.Fragment>
		}

		return this.state.edit.inputs.map((v,index) => {
			return <Input key={index}
				placeholder={v.placeholder}
				value={v.value}
				validator={v.validator}
				change={v.change}
			/>
		})
	}

	createDate = () => {
		if (this.props.mode !== 'delete')
			return <Date
				value={this.props.book.date}
				change={this.changeDate} />
	}


	actionsCheck = () => {
		if (this.props.mode === 'edit')
			return ((this.props.selectedBook.title === this.props.book.title)
					&& (this.props.selectedBook.author === this.props.book.author)
					&& (this.props.selectedBook.date === this.props.book.date))
				  || (this.props.selectedBook.title === '')
				  || (this.props.selectedBook.author === '')

		if (this.props.mode === 'add')
			return (this.props.selectedBook.title === '')
				|| (this.props.selectedBook.author === '')
					
		return false
	}

	titleButtonSave = () => {
		if (this.props.mode === 'delete')
			return 'Delete'

		return 'Save'
	}

	changeDate = (e) => {
		this.props.setDate(e)
	}

	cancelModal = () => {
		this.props.clearBook();
		this.props.cancel()
	}

	saveModal = () => {
		if (this.props.mode === 'edit')
			this.props.editBook(this.props.selectedBook)

		if (this.props.mode === 'add')
			this.props.addBook(this.props.selectedBook)

		if (this.props.mode === 'delete')
			this.props.deleteBook(this.props.book)


		this.props.clearBook();
		this.props.save()
	}
	

	render() {
		return (

			<Modal
				content={
					<React.Fragment>
						{ this.createInputs() }
						{ this.createDate() }
					</React.Fragment>
				}
				buttons={
					<React.Fragment>
						<Button
							onClick={this.cancelModal}
							color="secondary">
							Cancel
          	</Button>
						<Button
							disabled={this.actionsCheck()}
							onClick={this.saveModal}
							color="primary">{
								this.titleButtonSave()
							}
          	</Button>
					</React.Fragment>
				}
				title="Edit book"
				open={this.props.open}
			/>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		selectedBook: state.book
	}
}

const mapDispatchToProps = {
	setTitle,
	setAuthor,
	setDate,
	clearBook,
	editBook,
	addBook,
	deleteBook
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalBuilder)
