import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
	margin: {
		margin: theme.spacing(1),
		width: 450
	},
}));


export default function Date(props) {
	const classes = useStyles();
	const [selectedDate, setSelectedDate] = React.useState(moment(props.value, 'DD/MM/YYYY'));

	function handleDateChange(date) {
		setSelectedDate(date);
		props.change(moment(date).format('DD/MM/YYYY'))
	}


	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<KeyboardDatePicker
				className={classes.margin}
				disableToolbar
				variant="inline"
			  format="dd/MM/yyyy"
				margin="normal"
				id="date-picker-inline"
				label="Date publish book"
				value={selectedDate}
				onChange={handleDateChange}
				KeyboardButtonProps={{
					'aria-label': 'change date',
				}}
			/>
			</MuiPickersUtilsProvider>
	)
}