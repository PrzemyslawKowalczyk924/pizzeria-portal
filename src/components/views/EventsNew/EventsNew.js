import React from 'react';
import PropTypes from 'prop-types';
import styles from './EventsNew.module.scss';

const EventsNew = () => (
  <div className={styles.component}> 
    <h2>EventsNew View</h2>   
  </div>
);
  
EventsNew.propTypes = {
  children: PropTypes.node,
};

export default EventsNew;