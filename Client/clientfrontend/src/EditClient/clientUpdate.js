import React, { Component, useState, useEffect } from 'react';
import ClientNavbar from '../ClientNavbar/clientNavbar';
import axios from 'axios';

import { useParams } from 'react-router-dom';




function ClientUpdate() {

    const { id } = useParams();
    const [customerName, setCustomerName] = useState("");
    const [reservationType, setReservationType] = useState("");
    const [numberOfReservations, setNumberOfReservations] = useState();
    const [numberOfNights, setNumberOfNights] = useState();


    useEffect(() => {
        function getBookingById() {
            axios.get(`http://localhost:8000/api/roomReservations/${id}`).then((res) => {
                setCustomerName(res.data.data.customerName);
                setReservationType(res.data.data.reservationType);
                setNumberOfReservations(res.data.data.numberOfReservations);
                setNumberOfNights(res.data.data.numberOfNights);

                console.log("aaaa",customerName)
            }).catch((error) => {
                alert(error)
            })
        }


        getBookingById();
    }, [])

    function updateDetails(e) {
        e.preventDefault();

        const newCustomer = {
            customerName,
            reservationType,
            numberOfReservations,
            numberOfNights
        }


        function setDetails() {
            axios.put(`http://localhost:8000/api/roomReservation/update/${id}`, newCustomer).then(() => {
                alert("Cusomer Updated")
            }).catch((error) => {
                alert(error);
            });


        }
        setDetails();


    }



    return (
        <div>
            <ClientNavbar />
            <div className='mainOne'>
                <h1>Update Booking</h1>
                <div className='viewButton'>
                    <button className='btn btn-primary'>View Room Details</button>
                </div>

                <div className='mainForm'>
                    <form onSubmit={updateDetails}>
                        <div className="form-group md-6">
                            <label for="customerName">Customer Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="customerName"
                                placeholder="Enter Name"
                                value={customerName}
                                onChange={(e) => {
                                    setCustomerName(e.target.value);
                                }} />
                        </div>
                        <div className="form-group">
                            <label for="reservationType">Reservation Type:</label>
                            <select
                                id="reservationType"
                                className="form-control"
                                value={reservationType}
                                onChange={(e) => {
                                    setReservationType(e.target.value);
                                }}>
                                <option selected disabled>Choose...</option>
                                <option>Standard</option>
                                <option>Deluxe</option>
                                <option>Luxury</option>
                            </select>
                        </div>
                        <div className="form-group ">
                            <label for="numberOfReservations">Number Of Reservations:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="numberOfReservations"
                                value={numberOfReservations}
                                placeholder="Enter Number Of Reservations"
                                onChange={(e) => {
                                    setNumberOfReservations(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group md-6">
                            <label for="numberOfNights">Number Of Nights:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="numberOfNights"
                                placeholder="Enter Name"
                                value={numberOfNights}
                                onChange={(e) => {
                                    setNumberOfNights(e.target.value);
                                }}
                            />
                        </div>
                        <div className='submitButton'>
                            <button type="submit" className="btn btn-primary">Update</button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default ClientUpdate;