import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import Table from './components/views/Table/Table';
import BookingsId from './components/views/BookingsId/BookingsId';
import BookingsNew from './components/views/BookingsNew/BookingsNew';
import EventsId from './components/views/EventsId/EventsId';
import EventsNew from './components/views/EventsNew/EventsNew';
import Waiter from './components/views/Waiter/WaiterContainer';
import OrderId from './components/views/OrderId/OrderId';
import OrderNew from './components/views/OrderNew/OrderNew';
import { StylesProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import store from './redux/store';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2B4C6F',
    },
    /* secondary: {
      main: '#11cb5f',
    }, */
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={'/panel'}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
                <Route exact path={`${process.env.PUBLIC_URL + `/login`}`} component={Login} /> 
                <Route exact path={`${process.env.PUBLIC_URL + `/table`}`} component={Table} />
                <Route exact path={`${process.env.PUBLIC_URL + `/table/bookings/new`}`} component={BookingsNew} />
                <Route exact path={`${process.env.PUBLIC_URL + `/table/bookings/:id`}`} component={BookingsId} />
                <Route exact path={`${process.env.PUBLIC_URL + `/table/events/new`}`} component={EventsNew} />
                <Route exact path={`${process.env.PUBLIC_URL + `/table/events/:id`}`} component={EventsId} />
                <Route exact path={`${process.env.PUBLIC_URL + `/waiter`}`} component={Waiter} />
                <Route exact path={`${process.env.PUBLIC_URL + `/waiter/order/new`}`} component={OrderNew} />
                <Route exact path={`${process.env.PUBLIC_URL + `/waiter/order/:id`}`} component={OrderId} />
                <Route exact path={`${process.env.PUBLIC_URL + `/kitchen`}`} component={Kitchen} /> 
              </Switch> 
            </MainLayout>
          </ThemeProvider>  
        </StylesProvider>
      </BrowserRouter>
    </Provider>
        
  );
}

export default App;
