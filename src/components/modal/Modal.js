import React, { useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormControl, makeStyles } from '@material-ui/core';
import './Modal.css';


const useStyles = makeStyles(theme => ({
	form: {
		display: 'flex',
		flexDirection: 'column',
		margin: 'auto',
		width: 'fit-content',
		paddingBottom: 50
	},
	formControl: {
		marginTop: theme.spacing(2),
		minWidth: 120,
	}
}));


export default function FormDialog(props) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	useEffect(() => {
		setOpen(props.open)
	}, [props.open])

	return (
		<Dialog 
			open={open} 
			aria-labelledby="form-dialog-title" 
			fullWidth={true}
			maxWidth={'sm'}>
			<DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
				<DialogContent>
				
				<form className={classes.form} noValidate>
					<FormControl className={classes.formControl}>
						{
							props.content
						}
					</FormControl>
				</form>
					
				</DialogContent>
				<DialogActions>
					{
						props.buttons
					}
				</DialogActions>
			</Dialog>
	);
}