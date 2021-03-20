import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './OrderId.module.scss';

const OrderId = () => (
  <div className={styles.component}> 
    <h2>OrderId View</h2>   
    <Link to={`${process.env.PUBLIC_URL}/table`} activeClassName='active'>table</Link>
  </div>
);

OrderId.propTypes = {
  children: PropTypes.node,
};

export default OrderId;