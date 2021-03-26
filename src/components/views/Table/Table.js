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

const demoAvailability = [
  {
    hour: '12:00',
    tables: [
      { id: '1', status: 'null' },
      { id: '2', status: 'booked' },
      { id: '3', status: 'event' },
      { id: '4', status: 'event' },
      { id: '5', status: 'null' },
      { id: '6', status: 'null' },
    ],
  },
  {
    hour: '12:30',
    tables: [
      { id: '1', status: 'null' },
      { id: '2', status: 'null' },
      { id: '3', status: 'event' },
      { id: '4', status: 'event' },
      { id: '5', status: 'null' },
      { id: '6', status: 'null' },
    ],
  },
  {
    hour: '13:00',
    tables: [
      { id: '1', status: 'booked' },
      { id: '2', status: 'booked' },
      { id: '3', status: 'event' },
      { id: '4', status: 'event' },
      { id: '5', status: 'null' },
      { id: '6', status: 'booked' },
    ],
  },
];

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
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          /* value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }} */
        />
      </Grid>
    </MuiPickersUtilsProvider>

    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Hour</TableCell>
          <TableCell>Table 1</TableCell>
          <TableCell>Table 2</TableCell>
          <TableCell>Table 3</TableCell>
          <TableCell>Table 4</TableCell>
          <TableCell>Table 5</TableCell>
          <TableCell>Table 6</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoAvailability.map((row) => (
          <TableRow key={row.hour}>
            <TableCell component="th" scope="row">
              {row.hour}
            </TableCell>
            {row.tables.map((table) => (
              <TableCell key={table.id} component="th" scope="row">
                {/*  {renderActions(table.status)} */}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table> 
  </Paper>  
);
  
Table.propTypes = {
  children: PropTypes.node,
};

export default Tables;
/* 
<Link to={`${process.env.PUBLIC_URL}/table/bookings/:id`} activeclassname='active'>bookings:id</Link>   
<Link to={`${process.env.PUBLIC_URL}/table/events/:id`} activeclassname='active'>event:id</Link>  */