import React from 'react';
//import PropTypes from 'prop-types';
import styles from './EventsId.module.scss';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TableRow from '@material-ui/core/TableRow';

const EventsId = () => {
  
  const demoContent = {
    date: '2021-02-10',
    hour: '12:00',
    duration: '3',
    id: '111',
    table: '1',
    people: '5',
    starter: ['water',', ', 'bread'],
    phone: '123123123' ,
    email: '123@gmail.com',
    address: 'New Jearsy 26-600',
    name: 'Jon Doe',
  };

  return (
    <Grid container component='div' className={styles.component}>
      <CssBaseline />
      <Typography>EventsId View</Typography>
      <Grid item xs={12} className={styles.box}>
        <Paper className={styles.paper} elevation={6}>
          <Typography variant="h5" className={styles.title}>Event Details</Typography>
          <Grid container>
            <Grid item xs={12} sm={6} className={styles.boxOrder}>
              <Typography variant="subtitle1" className={styles.title}>
                Products list
              </Typography>
              <ListItem>
                <ListItemText
                  className={styles.list}
                  primary={
                    <div>
                      <Typography variant='body1' component='span'>Date: </Typography>
                      <Typography variant='body1' component='span' color='secondary'>{demoContent.date}</Typography>
                    </div>
                  }
                />
                <ListItemText
                  className={styles.list}
                  primary={
                    <div>
                      <Typography variant='body1' component='span'>People: </Typography>
                      <Typography variant='body1' component='span' color='secondary'>{demoContent.people}</Typography>
                    </div>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  className={styles.list}
                  primary={
                    <div>
                      <Typography variant='body1' component='span'>Hour: </Typography>
                      <Typography variant='body1' component='span' color='secondary'>{demoContent.hour}</Typography>
                    </div>
                  }
                />
                <ListItemText
                  className={styles.list}
                  primary={
                    <div>
                      <Typography variant='body1' component='span'>Starter: </Typography>
                      <Typography variant='body1' component='span' color='secondary'>{demoContent.starter}</Typography>
                    </div>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  className={styles.list}
                  primary={
                    <div>
                      <Typography variant='body1' component='span'>Duration: </Typography>
                      <Typography variant='body1' component='span' color='secondary'>{demoContent.duration}</Typography>
                    </div>
                  }
                />
                <ListItemText
                  className={styles.list}
                  primary={
                    <div>
                      <Typography variant='body1' component='span'>Table: </Typography>
                      <Typography variant='body1' component='span' color='secondary'>{demoContent.table}</Typography>
                    </div>
                  }
                />
              </ListItem>
            </Grid>
            <Grid item xs={12} sm={6} className={styles.boxOrder}>
              <Typography variant="subtitle1" className={styles.title}>
                Datasheet
              </Typography>
              <ListItem>
                <ListItemText
                  className={styles.list}
                  primary={
                    <div>
                      <Typography variant='body1' component='span'>Phone: </Typography>
                      <Typography variant='body1' component='span' color='secondary'>{demoContent.Phone}</Typography>
                    </div>
                  }
                />
                <ListItemText
                  className={styles.list}
                  primary={
                    <div>
                      <Typography variant='body1' component='span'>Address: </Typography>
                      <Typography variant='body1' component='span' color='secondary'>{demoContent.address}</Typography>
                    </div>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  className={styles.list}
                  primary={
                    <div>
                      <Typography variant='body1' component='span'>E-m@il: </Typography>
                      <Typography variant='body1' component='span' color='secondary'>{demoContent.email}</Typography>
                    </div>
                  }
                />
                <ListItemText
                  className={styles.list}
                  primary={
                    <div>
                      <Typography variant='body1' component='span'>Name: </Typography>
                      <Typography variant='body1' component='span' color='secondary'>{demoContent.name}</Typography>
                    </div>
                  }
                />
              </ListItem>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};
  
/* EventsId.propTypes = {
  children: PropTypes.node,
}; */

export default EventsId;