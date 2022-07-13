import React, { Component, useState, useEffect } from 'react';
import './clientNavbar.css';

import { MdSupervisorAccount } from "react-icons/md";

function ClientNavbar() {

    const [logStatus, setLoginStatus] = useState(false);
    const [loguser, setLogUser] = useState("");


    useEffect(() => {
        console.log("sessionStorage.getItem('LogStatus')",
            sessionStorage.getItem('LogStatus'));

        const logStatus = sessionStorage.getItem('LogStatus') == 'true' ? true : false
        const logUser = sessionStorage.getItem('Loguser')
        console.log("zzz", logStatus)
        setLoginStatus(logStatus)
        setLogUser(logUser)




    });

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
                <div className='navTopic'>
                    <div className='image'>
                        <MdSupervisorAccount />
                    </div>

                    <a className="navbar-brand light" href="#">Client Navbar</a>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className='main'>
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/bookings">Bookings</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/viewBookings">View Booking</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contactUs">Contact Us</a>
                            </li>

                            {logStatus ?
                                <><p style={{ "marginTop": "8px" }}>{loguser}</p>

                                    <li>
                                    <a className="nav-link" href="/login">Log Out</a>

                                    </li>

                                </>


                                :

                                <li className="nav-item">
                                    <a className="nav-link" href="/login">Login</a>
                                </li>

                            }
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}
export default ClientNavbar;