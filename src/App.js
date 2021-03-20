import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import BookingsId from './components/views/BookingsId/BookingsId';
import BookingsNew from './components/views/BookingsNew/BookingsNew';
import Dashboard from './components/views/Dashboard/Dashboard';
import EventsId from './components/views/EventsId/EventsId';
import EventsNew from './components/views/EventsNew/EventsNew';
import Kitchen from './components/views/Kitchen/Kitchen';
import Login from './components/views/Login/Login';
import OrderId from './components/views/OrderId/OrderId';
import OrderNew from './components/views/OrderNew/OrderNew';
import Table from './components/views/Table/Table';
import Waiter from './components/views/Waiter/Waiter';

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
          <Route exact path={`${process.env.PUBLIC_URL + `/login`}`} component={Login} /> 
          <Route exact path={`${process.env.PUBLIC_URL + `/table`}`} component={Table} />
          <Route exact path={`${process.env.PUBLIC_URL + `/table/bookings/:id`}`} component={BookingsId} />
          <Route exact path={`${process.env.PUBLIC_URL + `/table/bookings/:new`}`} component={BookingsNew} />
          <Route exact path={`${process.env.PUBLIC_URL + `/table/events/:id`}`} component={EventsId} />
          <Route exact path={`${process.env.PUBLIC_URL + `/table/events/:new`}`} component={EventsNew} />
          <Route exact path={`${process.env.PUBLIC_URL + `/waiter`}`} component={Waiter} />
          <Route exact path={`${process.env.PUBLIC_URL + `/waiter/order/:id`}`} component={OrderId} />
          <Route exact path={`${process.env.PUBLIC_URL + `/waiter/order/:new`}`} component={OrderNew} />
          <Route exact path={`${process.env.PUBLIC_URL + `/kitchen`}`} component={Kitchen} /> 
        </Switch> 
      </MainLayout>
    </BrowserRouter>    
  );
}

export default App;
