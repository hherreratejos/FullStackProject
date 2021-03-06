import React from "react";
import GreetingContainer from './greeting/greeting_container'
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute } from "../util/rout_util";

const App = () => (
  <div>
    <header>
      <h1>BanrB</h1>
      <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={LogInFormContainer} />
    <AuthRoute path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;