import React from "react";
import GreetingContainer from './greeting/greeting_container'
import ListingShowContainer from "./listing/listing_show_container";
import { Route, Switch } from 'react-router-dom'
import ListingIndexContainer from './listing/listing_index_container'
import Modal from './modals/modal'
import BookingIndexContainer from './booking/booking_index_container'
import BookingShowContainer from './booking/booking_show_container'
import BookingEditContainer from "./booking/booking_edit_container";
import ConfirmationContainer from "./booking/confirmation_container";

const App = () => (
  <div>
    <Modal/>
    <div className="header">
      <header>
        <div className="header-bar">
          <a className='barnb' href="/">BarnB</a>
          <div className='greeting'>
            <GreetingContainer />
          </div>
        </div>
      </header>
    </div>
    <Switch>
      <Route exact path='/listings/:id' component={ListingShowContainer}/>
      <Route exact path='/booking/delete/:bookingId' component={ConfirmationContainer}/>
      <Route exact path='/bookings/:userId' component={BookingIndexContainer}/>
      <Route exact path='/listings/booking/:bookingId' component={BookingShowContainer}/>
      <Route exact path='/bookings/:bookingId/edit' component={BookingEditContainer}/>
      <Route exact path="/" component={ListingIndexContainer} />
    </Switch>
  </div>
);

export default App;