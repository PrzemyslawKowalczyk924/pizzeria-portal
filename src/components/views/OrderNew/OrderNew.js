import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderNew.module.scss';

const OrderNew = () => (
  <div className={styles.component}> 
    <h2>OrderNew View</h2>   
  </div>
);
  
OrderNew.propTypes = {
  children: PropTypes.node,
};

export default OrderNew;