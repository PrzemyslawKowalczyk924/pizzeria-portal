import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Table.module.scss';
import Paper from '@material-ui/core/Paper';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const Tables = () => (
  <Paper className={styles.component} elevation={9}>
    <ButtonGroup>
      <Button
        component={Link}
        to={`${process.env.PUBLIC_URL}/table/bookings/new`}
      >
        {` `}
        New reservation
      </Button>
      <Button
        component={Link}
        to={`${process.env.PUBLIC_URL}/table/events/new`}
      >
        {' '}
        New event
      </Button>
    </ButtonGroup>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker 
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="dd/MM/yyyy"
          /* value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }} */
        />
      </Grid>
    </MuiPickersUtilsProvider>
    <div className={styles.component}> 
      <h2>Table View</h2>
      <Link to={`${process.env.PUBLIC_URL}/table/bookings/:id`} activeclassname='active'>bookings:id</Link>   
      <Link to={`${process.env.PUBLIC_URL}/table/events/:id`} activeclassname='active'>event:id</Link>   
    </div>
  </Paper>  
);
  
Table.propTypes = {
  children: PropTypes.node,
};

export default Tables;