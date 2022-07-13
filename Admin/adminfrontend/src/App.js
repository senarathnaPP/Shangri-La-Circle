
import './App.css';
import './components/SideBar/SideBar.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Login from './components/Login/login';
import Home from './components/Home/home';
import SideBar from './components/SideBar/Sidebar';
import RoomManagement from './pages/RoomManagement';
import TaxiManagement from './pages/TaxiManagement';
import Payment from './pages/Payment';
import Notification from './pages/Notification';
import HotelManagement from './pages/HotelManagement';
import hotelDetails from './pages/hotelDetails';
import createHotels from './pages/createHotels';
import editHotels from './pages/editHotels';
import reservationDetails from './pages/reservationDetails';
import createRooms from './pages/createRoom';
import ViewRooms from './pages/ViewRooms';
import editRooms from './pages/updateRooms';

function App() {
  return (
    
    <div>
    
      <Router>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/reservations' exact component={RoomManagement} />
          <Route path='/reservations/:id' exact component={reservationDetails}/>
          <Route path='/taxiManagement' exact component={TaxiManagement} />
          <Route path='/payment' exact component={Payment} />
          <Route path='/notification' exact component={Notification} />
          <Route path='/hotelManagement' exact component={HotelManagement}/>
          <Route path='/hotels/:id' exact component={hotelDetails}/>
          <Route path='/add/hotels' exact component = {createHotels}/>
          <Route path='/edit/hotels/:id' exact component={editHotels}/>
          <Route path='/add/rooms' exact component = {createRooms}/>
          <Route path='/view/rooms' exact component = {ViewRooms}/>
          <Route path='/edit/rooms/:id' exact component = {editRooms}/> 

          <Redirect to='/login'/>
        </Switch>

        

      </Router>

    </div>

    


  );
}

export default App;
