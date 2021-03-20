import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Table.module.scss';

const Table = () => (
  <div className={styles.component}> 
    <h2>Table View</h2>
    <Link to={`${process.env.PUBLIC_URL}/table/booking/:id`} activeClassName='active'>booking</Link>   
    <Link to={`${process.env.PUBLIC_URL}/table/booking/:new`} activeClassName='active'>booking:new</Link>   
  </div>
);
  
Table.propTypes = {
  children: PropTypes.node,
};

export default Table;