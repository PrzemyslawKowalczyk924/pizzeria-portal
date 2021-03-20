import React from 'react';
import PropTypes from 'prop-types';
import styles from './EventsId.module.scss';

const EventsId = () => (
  <div className={styles.component}> 
    <h2>EventsId View</h2>   
  </div>
);
  
EventsId.propTypes = {
  children: PropTypes.node,
};

export default EventsId;