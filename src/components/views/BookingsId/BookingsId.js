import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './BookingsId.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const BookingsId = () => {

  const demoContent = {
    date: '2021-02-10',
    hour: '12:00',
    duration: '3',
    id: '111',
    table: '1',
    people: '5',
    starter: ['water', 'bread'],
    phone: '123123123' ,
    email: '123@gmail.com',
  };

  return (
    <Paper className={styles.component}> 
      <Typography className={styles.header} variant="h4">
        Reservation number {demoContent.id}
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Hour</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Table</TableCell>
            <TableCell>People</TableCell>
            <TableCell>Starter</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>E-mail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              {demoContent.date}
            </TableCell>
            <TableCell component="td">
              {demoContent.hour}
            </TableCell>
            <TableCell component="td">
              {demoContent.duration}
            </TableCell>
            <TableCell component="td">
              {demoContent.table}
            </TableCell>
            <TableCell component="td">
              {demoContent.people}
            </TableCell>
            <TableCell component="td">
              {demoContent.starter}
            </TableCell>
            <TableCell component="td">
              {demoContent.phone}
            </TableCell>
            <TableCell component="td">
              {demoContent.email}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Link to={`${process.env.PUBLIC_URL}/waiter`} activeclassname='active'>waiter</Link>
    </Paper>
  );
};
  
BookingsId.propTypes = {
  children: PropTypes.node,
};

export default BookingsId;