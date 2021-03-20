import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderId.module.scss';

const OrderId = () => (
  <div className={styles.component}> 
    <h2>OrderId View</h2>   
  </div>
);
  
OrderId.propTypes = {
  children: PropTypes.node,
};

export default OrderId;