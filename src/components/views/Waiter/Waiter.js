import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';

const Waiter = () => (
  <div className={styles.component}> 
    <h2>Waiter View</h2>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/:id`} activeClassName='active'>order:id</Link>   
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/:new`} activeClassName='active'>order:new</Link>   
  </div>
);
  
Waiter.propTypes = {
  children: PropTypes.node,
};
  
export default Waiter;