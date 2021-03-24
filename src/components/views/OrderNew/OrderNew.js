import React, {setState} from 'react';
import PropTypes from 'prop-types';
import styles from './OrderNew.module.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//import Button from '@material-ui/core/Button';
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
import MenuItem from '@material-ui/core/MenuItem';

const NativeSelects = () => {
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
};

const OrderNew = (handleChange, state) => (
  <div className={styles.root}>
    <Paper className={styles.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <Avatar><AirlineSeatLegroomNormalIcon/></Avatar>  
        </Grid>
        <Grid container item justify="center" alignContent="center" xs={4}>
          <Typography>Table number</Typography>  
        </Grid>
        <Grid container item justify="center" xs={4}>
          <FormControl className={styles.resizer}>
            <InputLabel className={styles.tableNumber} id='choose-table'>Number</InputLabel>
            <NativeSelect
              className={styles.tableNumber}
              value={state.age}
              onChange={handleChange}
              inputProps={{
                name: 'age',
                id: 'age-native-helper',
              }}
            >
              <option aria-label="None" value="" />
              <option value={10}>1</option>
              <option value={20}>2</option>
              <option value={30}>3</option>
            </NativeSelect>
          </FormControl>
        </Grid>  
      </Grid> 
    </Paper>
    <Paper className={styles.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <Avatar><MenuBookIcon/></Avatar>  
        </Grid>
        <Grid container item justify="center" alignContent="center" xs={4}>
          <Typography>Product Menu</Typography>
        </Grid>
        <Grid container item justify="center" xs={4}>
          <FormControl className={styles.resizer}>
            <InputLabel className={styles.tableNumber} id='choose-table'>Select</InputLabel>
            <NativeSelect
              className={styles.tableNumber}
              value={state.age}
              onChange={handleChange}
              inputProps={{
                name: 'age',
                id: 'age-native-helper',
              }}
            >
              <option aria-label="None" value="" />
              <option value={10}>DOUGHNUT</option>
              <option value={20}>BREAKFAST</option>
              <option value={30}>PIZZA</option>
              <option value={40}>SALAD</option>
            </NativeSelect>
          </FormControl>
        </Grid>      
      </Grid> 
    </Paper>
    <Paper className={styles.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <Avatar><ListIcon/></Avatar>  
        </Grid>  
        <Grid item xs>
          <Typography>Product Options
            <FormControl>
              <InputLabel id='choose-table'>Chose</InputLabel>
              <Select
                labelId='tables'
                id='table'
              >
                <MenuItem value={1}>Table1</MenuItem>
                <MenuItem value={2}>Table2</MenuItem>
                <MenuItem value={3}>Table3</MenuItem>
              </Select>  
            </FormControl>
          </Typography>
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
        <Grid item>
          <Paper elevation={3}>3,00$</Paper>
        </Grid>    
      </Grid> 
    </Paper>
  </div>
  
);
  
OrderNew.propTypes = {
  children: PropTypes.node,
};

export default OrderNew;