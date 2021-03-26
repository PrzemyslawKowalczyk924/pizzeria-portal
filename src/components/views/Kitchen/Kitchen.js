import React from 'react';
import styles from './Kitchen.module.scss';
import Paper from '@material-ui/core/Paper';
import { Table, TableCell, Typography, TableRow, TableBody } from '@material-ui/core';
import TableHead from '@material-ui/core/TableHead';

const Kitchen = () => {
  const demoOrder = [
    {
      id: 1,
      table: 1,
      order: 101,
      orderType: 'pizza',
      options: ['chesse', 'olives, red pepper'],
      amount: 1,
      status: 'done',
    },
    {
      id: 2,
      table: 3,
      order: 102,
      orderType: 'coffe',
      options: 'late',
      amount: 2,
      status: 'in progress',
    },
    {
      id: 3,
      table: 2,
      order: 103,
      orderType: 'doughnat',
      options: null,
      amount: 4,
      status: 'delivered',
    },
    {
      id: 4,
      table: 1,
      order: 104,
      orderType: 'pizza',
      options: ['corn', 'salami', 'green pepper'],
      amount: 3,
      status: 'in progress',
    },
  ];

  const handleChange = (event) => {
    event.target.setAttribute('disabled', true);
  };

  return(
    <Paper className={styles.component}>
      <Typography>
        <h2>Kitchen View</h2>   
      </Typography> 
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Table</TableCell>
            <TableCell>Order</TableCell>
            <TableCell>Order Type</TableCell>
            <TableCell>Options</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoOrder.map(row => (
            <TableRow key={row.table}>
              <TableCell component="th" scope="row">
                {row.table}
              </TableCell>
              <TableCell component="td">
                {row.order}
              </TableCell>
              <TableCell component="td">
                {row.orderType}
              </TableCell>
              <TableCell component="td">
                {row.options}
              </TableCell>
              <TableCell component="td">
                {row.amount}
              </TableCell>
              <TableCell component="td">
                {row.status}
              </TableCell>
            </TableRow>
          ))}  
        </TableBody>
        <TableBody>
          {demoOrder.map(row => (
            <TableRow key={row.order}>
            </TableRow>
          ))}
        </TableBody>
      </Table> 
    </Paper> 
  );
};
  
export default Kitchen;