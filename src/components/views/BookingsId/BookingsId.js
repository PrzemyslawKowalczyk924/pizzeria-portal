import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './BookingsId.module.scss';

const BookingsId = () => (
  <div className={styles.component}> 
    <h2>BookingsId View</h2>
    <Link to={`${process.env.PUBLIC_URL}/waiter`} activeclassname='active'>waiter</Link>
  </div>
);
  
BookingsId.propTypes = {
  children: PropTypes.node,
};

export default BookingsId;