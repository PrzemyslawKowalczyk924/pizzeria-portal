import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookingsNew.module.scss';

const BookingsNew = () => (
  <div className={styles.component}> 
    <h2>BookingsNew View</h2>
  </div>
);
  
BookingsNew.propTypes = {
  children: PropTypes.node,
};

export default BookingsNew;