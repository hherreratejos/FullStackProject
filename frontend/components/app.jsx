import React from "react";
import GreetingContainer from './greeting/greeting_container'
import ListingShowContainer from "./listing/listing_show_container";
// import { AuthRoute } from "../util/rout_util";
import { Route, Switch } from 'react-router-dom'
import ListingIndexContainer from './listing/listing_index_container'
import Modal from './modals/modal'

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
      <Route exact path="/" component={ListingIndexContainer} />
    </Switch>
  </div>
);

export default App;