import React from "react";
import GreetingContainer from './greeting/greeting_container'
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute } from "../util/rout_util";
import { Route, Switch } from 'react-router-dom'
import ListingIndexContainer from './search/listing_index_container'

const App = () => (
  <div>
    <div className="header">
      <header>
        <h1>BanrB</h1>
        <GreetingContainer />
        <Switch>
          <AuthRoute path="/login" component={LogInFormContainer} />
          <AuthRoute path="/signup" component={SignUpFormContainer} />
        </Switch>
      </header>
    </div>
    <div className="listings">
      <Route path="/" component={ListingIndexContainer} />
    </div>
  </div>
);

export default App;