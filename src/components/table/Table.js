import React, { PureComponent } from 'react';
import MaterialTable from 'material-table';
import './Table.css'

class Table extends PureComponent {

	render() {
		const styleHeaderColumn = {
			backgroundColor: '#039be5',
			fontSize: 20,
			color: '#FFF'
		};
	
		return (
			<MaterialTable
				title = "Books"
				columns = {[
					{ title: 'Title', field: 'title',
						headerStyle: styleHeaderColumn
				 },
					{
						title: 'Author', field: 'author',
						headerStyle: styleHeaderColumn },
					{
						title: 'Date', field: 'date',
						headerStyle: styleHeaderColumn
					}
				]}
				data = { this.props.data }
				actions = {[
					{
						icon: 'add',
						tooltip: 'Add Book',
						isFreeAction: true,
						onClick: (event) => this.props.addBook()
					},
					{
						icon: 'create',
						tooltip: 'Edit Book',
						onClick: (event, rowData) => this.props.editBook(rowData.id)
					},
					{
						icon: 'delete',
						tooltip: 'Delete Book',
						onClick: (event, rowData) => this.props.deleteBook(rowData.id)
					}
				]}
				options = {{
					actionsColumnIndex: -1,
					headerStyle: {
						...styleHeaderColumn,
						minWidth: 120
					}
				}}
			/>
		)
	}
}


export default Table