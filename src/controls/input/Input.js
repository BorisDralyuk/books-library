import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Input.css'

const useStyles = makeStyles(theme => ({
	margin: {
		margin: theme.spacing(1),
		width: 450
	},
}));

const ValidationTextField = withStyles({
	root: {
		'& input:valid + fieldset': {
			borderColor: 'green',
			borderWidth: 2,
		},
		'& input:invalid + fieldset': {
			borderColor: 'red',
			borderWidth: 2,
		},
		'& input:valid:focus + fieldset': {
			borderLeftWidth: 6,
			padding: '4px !important',
		},
	},
})(TextField);


export default function Input(props) {
	const classes = useStyles();
	const [error, setError] = React.useState(false);
	const [errorMessage, setErrorMessage] = React.useState('');

	const handleChange = event => {
		const valid = props.validator(event);
		setError(valid.error)
		setErrorMessage(valid.errorMessage)
		props.change(event)
	};

	return (
			 <ValidationTextField
				className={classes.margin}
				label={props.placeholder}
				error={error}
				required
				defaultValue={props.value}
				helperText={errorMessage}
				id="validation-outlined-input"
				onChange={(e) => handleChange(e.target.value)}
				onTouchEnd={(e) => handleChange(e.target.value)}
			/>  
	)
}