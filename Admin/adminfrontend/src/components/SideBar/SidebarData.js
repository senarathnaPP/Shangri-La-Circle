import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import Domain from '@material-ui/icons/Domain'
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import PaymentIcon from '@material-ui/icons/Payment';
import NotificationsIcon from '@material-ui/icons/Notifications';

export const  SidebarData =  [
    {
        title: "Dashboard",
        icon:  <DashboardIcon/>,
        link: "/home" 
    },

    {
        title: "Room Management",
        icon:  <RoomServiceIcon/>,
        link: "/view/rooms" 
    },

    {
        title: "Hotel Management",
        icon:  <Domain/>,
        link: "/hotelManagement" 
    },

    {
        title: "Payments",
        icon:  < PaymentIcon/>,
        link: "/payment" 
    },

    {
        title: "Reservations",
        icon:  <NotificationsIcon/>,
        link: "/reservations" 
    }
    

    

]
    