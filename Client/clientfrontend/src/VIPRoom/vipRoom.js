import React, { Component } from 'react';

import ClientNavbar from '../ClientNavbar/clientNavbar';
import './vipRoom.css';


import v1 from '../images/vip rooms/v1.jpg';
import v2 from '../images/vip rooms/v2.jpg';
import v3 from '../images/vip rooms/v3.jpg';
import v4 from '../images/vip rooms/v4.jpg';

function VipRoom() {
    return (
        <div>
            <ClientNavbar />
            <h1>Standard Rooms</h1>
            <div className='mainDiv'>
                <div className='slide'>
                    <div id='slider'>
                        <figure>
                            <img src={v3} />
                            <img src={v2} />
                            <img src={v1} />
                            <img src={v4} />
                        </figure>
                    </div>
                </div>
                <div className='info'>
                    <h3>VIP Rooms</h3>
                    <p><span>V.I.P. are getting extra facilities in all the hotels and also get a very carefully checked rooms. Usually Deputy house-keeper does this checking. All the V.I.P. gets absolutely the best treatment possible</span></p>
                    <h2 id='h2Span'>Per Night <span>$282</span></h2>
                </div>
            </div>

        </div>
    )
}

export default VipRoom;