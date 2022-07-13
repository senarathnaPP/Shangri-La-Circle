
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ClientHome from './Home/clientHome';
import ClientLogin from './Login/clientLogin';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ClientBooking from './ClientBooking/clientBooking';
import ViewClientBooking from './ViewClientBooking/viewBooking';
import ClientUpdate from './EditClient/clientUpdate';

import StandardRoom from './StandardRoom/standardRoom';
import DeluxeRoom from './DeluxeRoom/deluxeRoom';
import VipRoom from './VIPRoom/vipRoom';

import register from './Login/register';
import SimpleMap from './Login/SimpleMap';
import PaymentGateWay from './Login/PaymentGateWay';
import emailService from './services/emailService';

import mailer from './contactUs/mailer';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/home' component={ClientHome} />
          <Route path='/bookings/:id' component={ClientBooking} />
          <Route path='/standardRoom' component={StandardRoom} />
          <Route path='/deluxeRoom' component={DeluxeRoom} />
          <Route path='/vipRoom' component={VipRoom} />
          <Route path='/viewBookings' component={ViewClientBooking} />
          <Route path='/edit/:id' component={ClientUpdate} />
          <Route path='/login' component={ClientLogin} />

          {/* Client register routes */}
          <Route path='/JoinNow' component={register} />
          <Route path='/maps' exact component={SimpleMap} />
          <Route path='/payement' exact component={PaymentGateWay} />
          <Route path='/email' exact component={emailService} />
          <Route path="/contactUs" exact component={mailer} />

          <Redirect to='/home' />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
