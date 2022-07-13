import React, { Component } from 'react';

import ClientNavbar from '../ClientNavbar/clientNavbar';
import './standardRoom.css';


import s1 from '../images/standard rooms/s1.jpg';
import s2 from '../images/standard rooms/s2.jpg';
import s3 from '../images/standard rooms/s3.jpg';

function StandardRoom() {
    return (
        <div>
            <ClientNavbar />
            <h1>Standard Rooms</h1>
            <div className='mainDiv'>
                <div className='slide'>
                    <div id='slider'>
                        <figure>
                            <img src={s1} />
                            <img src={s2} />
                            <img src={s3} />
                        </figure>
                    </div>
                </div>
                <div className='info'>
                    <h3>Standard Rooms</h3>
                    <p><span>A standard room includes all kinds of basic facilities such as a table, chair, desk, cupboard, dressing table, DVD player, television, telephone, coffee maker and a private bathroom.</span></p>
                    <h2 id='h2Span'>Per Night <span>$63</span></h2>
                </div>
            </div>

        </div>
    )
}

export default StandardRoom;