import React, { Component } from 'react';
import ClientNavbar from '../ClientNavbar/clientNavbar';
import clientHomeCss from './clientHome.module.css';

import mainlogo from '../images/bgImage.jpg';
import Deluxe from '../images/deluxeking1.jpg';
import Standard from '../images/standard.jpg';
import VIP from '../images/vip.jpg';

import room from '../images/deluxeking1.jpg';
import { Carousel } from 'react-bootstrap';

import axios from 'axios'



export default class HotelManagement extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hotels: []
        };
    }
    componentDidMount() {
        this.retrieveHotels();
    }

    retrieveHotels() {
        axios.get("http://localhost:8000/api/client/get/hotels").then(res => {
            localStorage.setItem("HhotelName", res.data.hotelName);
            if (res.data.success) {
                this.setState({
                    hotels: res.data.existingHotels
                });
                console.log(this.state.hotels)
            }
        });
    }

    render() {
        return (
            <div className={clientHomeCss.mainPage}>

                <ClientNavbar />
                <div className={clientHomeCss.main}>
                    <img src={mainlogo} alt='Key' />
                    <div className={clientHomeCss.mainElement}>
                        <h1>Relaxing Rooms</h1>
                        <h3><span>Your Room Your Stay</span></h3>
                        <a href='#section2'>
                            <button className='btn btn-primary'>Get Started</button>
                        </a>

                    </div>

                </div>
                <h1>HOTELS</h1>
                <div className='container'>
                    <table className="table table-hover" id='section2' style={{ marginTop: '80px' }} >
                        {this.state.hotels.map((hotels, index) => (
                            <tr>
                                <td>
                                    <img
                                        src={hotels.imageUrl}
                                        alt={hotels.itemCode}
                                        style={{
                                            width: "300px",
                                            height: "200px",
                                            marginLeft: "-10px",

                                        }}
                                    /></td>
                                <p className="col md-3" style={{ fontSize: '24px', marginRight: '100px', marginTop: '70px', fontWeight: 'bolder' }}>{hotels.hotelName}</p> <br />
                                <p className="col md-3" style={{ fontSize: '20px', marginLeft: '250px', marginTop: '-70px' }}>{hotels.description}</p>

                                <p className="col md-3" style={{ fontSize: '20px', marginLeft: '250px', marginTop: '0px' }}><b>Location-:</b> Latitude: {hotels.latitude} Longitude: {hotels.longitude}</p>
                                <p><button className="btn btn-outline-success" style={{ fontSize: '20px', marginTop: '-70px', marginLeft: '670px' }}><a href={`bookings/${hotels._id}`} style={{ textDecoration: 'none', color: 'grey', fontWeight: 'bold' }}>Book Now</a></button></p>



                                {/*
                                    <a className='btn btn-warning' href={`/edit/hotels/${hotels._id}`} style={{color:'black'}}>
                                        <i className='fas fa-edit'></i>
                                        &nbsp;EDIT
                                    </a>
                                    &nbsp;
                                    <a className ="btn btn-danger" href="#" onClick={() => this.onDelete(hotels._id)} style={{ textDecoration: "none", color: "white" }}
                                        >
                                        <i className='fas fa-trash-alt'></i>
                                        &nbsp;REMOVE
                                    </a>
                                </td> */}
                            </tr>
                        ))}
                    </table>



                </div></div>
        )

    }
}
