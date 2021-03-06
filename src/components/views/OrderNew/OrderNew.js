import React from 'react';
import styles from './OrderNew.module.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Avatar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import AirlineSeatLegroomNormalIcon from '@material-ui/icons/AirlineSeatLegroomNormal';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import MenuItem from '@material-ui/core/MenuItem';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Pizza'),
  createData('', 'Olives', 'Red peppers', 'Green peppers'),
  createData('', 'Fresh basil', 'Salami', 'Mushrooms'),
];
const rowSecond = [
  createData('Tomato', '', 'Chesse', '', '45$'),
];

const OrderNew = () => (
  <div className={styles.root}>
    <Paper className={styles.paper}>
      <Grid container spacing={6}>
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
        <Grid container item justify="center" alignContent="center" xs={9}>
          <Typography>Product Menu:</Typography>
        </Grid> 
      </Grid> 
    </Paper>
    <Paper className={styles.paper}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={styles.heading}>Doughnut</Typography>
        </AccordionSummary>
        <AccordionDetails className={`${styles.wrap} ${styles.border}`}>
          <Grid container item alignItems="flex-start">
            <FormControl>
              <TextField
                id="outlined-number"
                label="Amount of doughnuts"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              /> 
            </FormControl>
            <Grid item className={styles.priceWrapper}>
              <Paper elevation={3}>3,00$</Paper>
            </Grid>
          </Grid> 
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={styles.heading}>Breakfast</Typography>
        </AccordionSummary>
        <AccordionDetails className={`${styles.wrap} ${styles.border}`} >
          <Grid container item alignItems="flex-start" spacing={2}>
            <Grid item xs>
              <FormControl className={styles.formBox}>
                <InputLabel id='choose-pizza-souce'>Choose coffe</InputLabel>
                <Select
                  labelId='caffee'
                  id='caffee'
                >
                  <MenuItem value={1}>Latte</MenuItem>
                  <MenuItem value={2}>Cappucino</MenuItem>
                  <MenuItem value={3}>Espresso</MenuItem>
                  <MenuItem value={4}>Macchiato</MenuItem>
                </Select>
              </FormControl>
            </Grid>  
          </Grid>  
          <Grid container item alignItems="flex-start">
            <FormControl>
              <TextField
                id="outlined-number"
                label="Amount of coffe's"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              /> 
            </FormControl>
            <Grid item className={styles.priceWrapper}>
              <Paper elevation={3}>3,00$</Paper>
            </Grid>  
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={styles.heading}>Pizza</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid item xs={12} className={styles.border}>
            <Grid container>
              <Grid item xs={12} sm={7}>
                <div>
                  <FormLabel>Pizza toppings</FormLabel>
                </div>
                <FormControl>
                  <FormControlLabel
                    control={<Checkbox color='primary' name='olives' />}
                    label='Olives'
                    className={styles.checkbox}
                  />
                  <FormControlLabel
                    control={<Checkbox color='primary' name='redPeppers' />}
                    label='Red peppers'
                    className={styles.checkbox}
                  />
                  <FormControlLabel
                    control={<Checkbox color='primary' name='greenPeppers' />}
                    label='Green peppers'
                    className={styles.checkbox}
                  />
                </FormControl>
                <FormControl>
                  <FormControlLabel
                    control={<Checkbox color='primary' name='mushromms' />}
                    label='Mushrooms'
                    className={styles.checkbox}
                  />
                  <FormControlLabel
                    control={<Checkbox color='primary' name='basil' />}
                    label='Fresh basil'
                    className={styles.checkbox}
                  />
                  <FormControlLabel
                    control={<Checkbox color='primary' name='salami' />}
                    label='Salami'
                    className={styles.checkbox}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={5}>
                <div className={styles.gridBox}>
                  <FormControl className={styles.formBox}>
                    <InputLabel id='choose-pizza-souce'>Choose pizza souce</InputLabel>
                    <Select
                      labelId='pizzaSouce'
                      id='pizzaSouce'
                    >
                      <MenuItem value={1}>Tomato</MenuItem>
                      <MenuItem value={2}>Sour creme</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={styles.gridBox}>
                  <FormControl className={styles.formBox}>
                    <InputLabel id='choose-pizza-crust'>Choose pizza crust</InputLabel>
                    <Select
                      labelId='pizzaCrust'
                      id='pizzaCrust'
                    >
                      <MenuItem value={1}>Standard</MenuItem>
                      <MenuItem value={2}>Thin</MenuItem>
                      <MenuItem value={3}>Thick</MenuItem>
                      <MenuItem value={4}>Cheese</MenuItem>
                      <MenuItem value={5}>Wholewheat</MenuItem>
                      <MenuItem value={6}>With extra gluten</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={styles.gridBox}>
                  <TextField
                    className={styles.textField}
                    variant='outlined'
                    fullWidth
                    margin='normal'
                    id='amountPizza'
                    label='Amount of pizza'
                    name='amountPizza'
                    autoFocus
                    size='small'
                    type='number'
                    inputProps={{min:0, max:9}}
                  />
                  <Grid container item xs={3} className={styles.priceWrapper}>
                    <Paper elevation={3}>3,00$</Paper>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={styles.heading}>Salad</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid item xs={12} className={styles.border}>
            <Grid container>
              <Grid item xs={12} sm={7}>
                <div>
                  <FormLabel>Salad ingredients</FormLabel>
                </div>
                <FormControl>
                  <FormControlLabel
                    control={<Checkbox color='primary' name='cucumber' />}
                    label='Cucumber'
                    className={styles.checkbox}
                  />
                  <FormControlLabel
                    control={<Checkbox color='primary' name='tomatos' />}
                    label='Tomatos'
                    className={styles.checkbox}
                  />
                  <FormControlLabel
                    control={<Checkbox color='primary' name='olives' />}
                    label='Olives'
                    className={styles.checkbox}
                  />
                </FormControl>
                <FormControl>
                  <FormControlLabel
                    control={<Checkbox color='primary' name='feta' />}
                    label='Feta'
                    className={styles.checkbox}
                  />
                  <FormControlLabel
                    control={<Checkbox color='primary' name='cheese' />}
                    label='Cheese'
                    className={styles.checkbox}
                  />
                  <FormControlLabel
                    control={<Checkbox color='primary' name='herbs' />}
                    label='Herbs'
                    className={styles.checkbox}
                  />
                  <FormControlLabel
                    control={<Checkbox color='primary' name='pepper' />}
                    label='Pepper'
                    className={styles.checkbox}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={5}>
                <div className={styles.gridBox}>
                  <TextField
                    className={styles.textField}
                    variant='outlined'
                    fullWidth
                    margin='normal'
                    id='amountSalad'
                    label='Amount of salad'
                    name='amountSalad'
                    autoFocus
                    size='small'
                    type='number'
                    inputProps={{min:0, max:9}}
                  />
                </div>
                <Grid container item xs={3} className={styles.priceWrapper}>
                  <Paper elevation={3}>3,00$</Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Paper>
    <Paper className={styles.paper}>
      <Accordion>
        <AccordionSummary>
          <Grid container spacing={2}>
            <Grid item>
              <Avatar><RestaurantMenuIcon/></Avatar>  
            </Grid>  
            <Grid item xs>
              <Typography>Ordered stuff</Typography>
            </Grid>  
          </Grid> 
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table className={styles.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center">Ingredients</TableCell>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.calories}</TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                    <TableCell align="center">{row.carbs}</TableCell>
                    <TableCell align="center">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableHead>
                <TableRow>
                  <TableCell>Souce</TableCell>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center">Crust</TableCell>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowSecond.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.calories}</TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                    <TableCell align="center">{row.carbs}</TableCell>
                    <TableCell align="center">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
    </Paper>
    <Paper className={styles.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <Avatar><AttachMoneyIcon/></Avatar>  
        </Grid>
        <Grid item xs={8}>
          <Typography>Total price</Typography>
        </Grid>
        <Grid item >
          <Paper elevation={3}>3,00$</Paper>
        </Grid>
      </Grid> 
    </Paper>
    <div className={styles.button}>
      <Button
        variant='contained'
        color='primary'
        size='large'
      >
        Send new order
      </Button>
    </div>    
  </div>
);
  
export default OrderNew;