import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Table.module.scss';

const Table = () => (
  <div className={styles.component}> 
    <h2>Table View</h2>
    <Link to={`${process.env.PUBLIC_URL}/table/bookings/:id`} activeClassName='active'>bookings:id</Link>   
    <Link to={`${process.env.PUBLIC_URL}/table/bookings/:new`} activeClassName='active'>bookings:new</Link>   
    <Link to={`${process.env.PUBLIC_URL}/table/events/:id`} activeClassName='active'>event:id</Link>   
    <Link to={`${process.env.PUBLIC_URL}/table/events/:new`} activeClassName='active'>events:new</Link>   
  </div>
);
  
Table.propTypes = {
  children: PropTypes.node,
};

export default Table;