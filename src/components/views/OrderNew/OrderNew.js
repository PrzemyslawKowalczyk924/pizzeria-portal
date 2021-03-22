import React, {setState} from 'react';
import PropTypes from 'prop-types';
import styles from './OrderNew.module.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Avatar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import AirlineSeatLegroomNormalIcon from '@material-ui/icons/AirlineSeatLegroomNormal';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ListIcon from '@material-ui/icons/List';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';


/* const demoContent = [
  {id: '1', status: 'free', order: null},
  {id: '2', status: 'thinking', order: null},
  {id: '3', status: 'ordered', order: 123},
  {id: '4', status: 'prepared', order: 234},
  {id: '5', status: 'delivered', order: 345},
  {id: '6', status: 'paid', order: 456},
]; */
const NativeSelects = () => {
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

const message = 'Lorem ipsum';
const NativeSelects =() => {
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
};

const OrderNew = () => (
  <div className={styles.root}>
    <Paper className={styles.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <Avatar><AirlineSeatLegroomNormalIcon/></Avatar>  
        </Grid>
        <Grid item xs>
          <Typography>Table number
            <FormControl>
              <InputLabel id='choose-table'>Choose table</InputLabel>
              <Select
              native
              value={state.age}
              onChange={handleChange}
              inputProps={{
                name: 'age',
                id: 'age-native-simple',
              }}>
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>  
          </Typography>
        </Grid>    
      </Grid> 
    </Paper>
    <Paper className={styles.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <Avatar><MenuBookIcon/></Avatar>  
        </Grid>
        <Grid item xs>
          <Typography>Product Menu</Typography>
        </Grid>    
      </Grid> 
    </Paper>
    <Paper className={styles.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <Avatar><ListIcon/></Avatar>  
        </Grid>  
        <Grid item xs>
          <Typography>Product Options</Typography>
        </Grid>  
      </Grid> 
    </Paper>
    <Paper className={styles.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <Avatar><RestaurantMenuIcon/></Avatar>  
        </Grid>  
        <Grid item xs>
          <Typography>Ordered stuff</Typography>
        </Grid>  
      </Grid> 
    </Paper>
    <Paper className={styles.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <Avatar><AttachMoneyIcon/></Avatar>  
        </Grid>
        <Grid item xs>
          <Typography>Price</Typography>
        </Grid>    
      </Grid> 
    </Paper>
  </div>
  
);
  
OrderNew.propTypes = {
  children: PropTypes.node,
};

export default OrderNew;