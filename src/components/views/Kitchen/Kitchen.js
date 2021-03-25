import React from 'react';
import styles from './Kitchen.module.scss';
import Paper from '@material-ui/core/Paper';

const Kitchen = () => (
  <Paper className={styles.component} elevation={9}>
    <div className={styles.component}> 
      <h2>Kitchen View</h2>   
    </div>
  </Paper>  
);
  
export default Kitchen;