import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderNew.module.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Avatar } from '@material-ui/core';

/* const demoContent = [
  {id: '1', status: 'free', order: null},
  {id: '2', status: 'thinking', order: null},
  {id: '3', status: 'ordered', order: 123},
  {id: '4', status: 'prepared', order: 234},
  {id: '5', status: 'delivered', order: 345},
  {id: '6', status: 'paid', order: 456},
]; */

const OrderNew = () => (
  <div className={styles.root}>
    <Paper className={styles.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <Avatar>W</Avatar>  
        </Grid>    
      </Grid> 
    </Paper>
    <Paper className={styles.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <Avatar>W</Avatar>  
        </Grid>    
      </Grid> 
    </Paper>
  </div>
  
);
  
OrderNew.propTypes = {
  children: PropTypes.node,
};

export default OrderNew;