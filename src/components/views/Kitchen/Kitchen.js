import React from 'react';
import styles from './Kitchen.module.scss';
import Paper from '@material-ui/core/Paper';
import { Table, TableCell, Typography, TableRow } from '@material-ui/core';
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
    },
    {
      id: 2,
      table: 3,
      order: 102,
      orderType: 'coffe',
      options: 'late',
      amount: 2,
    },
    {
      id: 3,
      table: 2,
      order: 103,
      orderType: 'doughnat',
      options: null,
      amount: 4,
    },
    {
      id: 4,
      table: 1,
      order: 104,
      orderType: 'pizza',
      options: ['corn', 'salami', 'green pepper'],
      amount: 3,
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
      </Table> 
    </Paper> 
  );
};
  
export default Kitchen;