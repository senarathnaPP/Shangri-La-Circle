import React, { Component } from 'react';

import ClientNavbar from '../ClientNavbar/clientNavbar';
import './deluxeRoom.css';


import d1 from '../images/Delux rooms/d1.jpg';
import d2 from '../images/Delux rooms/d2.jpg';
import d3 from '../images/Delux rooms/d3.jpg';
import d4 from '../images/Delux rooms/d4.jpg';

function DeluxeRoom() {
    return (
        <div>
            <ClientNavbar />
            <h1>Standard Rooms</h1>
            <div className='mainDiv'>
                <div className='slide'>
                    <div id='slider'>
                        <figure>
                            <img src={d1} />
                            <img src={d2} />
                            <img src={d3} />
                            <img src={d4} />
                        </figure>
                    </div>
                </div>
                <div className='info'>
                    <h3>Deluxe Rooms</h3>
                    <p><span>Deluxe rooms, are modern decorated, can accommodate up to 2 persons, totally soundproofed and equipped with high tech comforts such as high speed internet access, USB ports , smart TV, room cleaning touch system and private hydromassage bathtub.</span></p>
                    <h2 id='h2Span'>Per Night <span>$167</span></h2>
                </div>
            </div>

        </div>
    )
}

export default DeluxeRoom;