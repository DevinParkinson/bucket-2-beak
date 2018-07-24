import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import About from './About';
import StartPlan from './StartPlan'
import PaymentSuccess from './PaymentSuccess';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/startplan' component={StartPlan} />
            <Route exact path='/payment_success' component={PaymentSuccess} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
