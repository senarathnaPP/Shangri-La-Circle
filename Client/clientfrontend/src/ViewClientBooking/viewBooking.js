import React, { Component, useEffect, useState } from 'react';
import ClientNavbar from '../ClientNavbar/clientNavbar';
import './viewBooking.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ViewClientBooking() {

    const [customer, setCustomer] = useState([]);
    const [logUser , setLogUser] = useState([]);
    const URL = 'http://localhost:8000/api/roomReservations';

    function getCustomers() {
        axios.get(URL).then((res) => {
            
        }).catch((err) => {
            alert(err)
        })
    }

    function deleteCustomer(id) {
        axios.delete(`http://localhost:8000/api/roomReservation/delete/${id}`).then(() => {
            getCustomers();
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {

        const logUser = sessionStorage.getItem('LogEmail')
        setLogUser(logUser)
        const data = {
            "email" : logUser
        }

        axios.post('http://localhost:8000/api/roomReservations/get',data).then((res) => {
            
            console.log("res",res)
            setCustomer(res.data.data);


        }).catch((error) => {
            alert(error)
        })




        // function getBookings() {
        //     axios.get(URL).then((res) => {
        //         setCustomer(res.data.data)
        //     }).catch((error) => {
        //         alert(error);
        //     })

        // }

        // getBookings();
        // console.log(customer)
    }, [])



    return (
        <div>
            <ClientNavbar />
            <h1>Booking</h1>


            <div>
                <div className='customerTable'>
                    <table className="table table-striped ">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Reservation Type</th>
                                <th scope="col">Number Of Reservation</th>
                                <th scope="col">Number Of Nights</th>
                                <th scope="col">Room Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>

                        {customer.map((value, key) => {
                            return (
                                <>
                                    <tbody>
                                        <tr>
                                            <th scope="row">{++key}</th>
                                            <td>{value.customerName}</td>
                                            <td>{value.reservationType}</td>
                                            <td>{value.numberOfReservations}</td>
                                            <td>{value.numberOfNights}</td>
                                            <td>Rs {value.roomPrice}</td>
                                            <div className='actionButton'>
                                                <td>
                                                    <a href={`edit/${value._id}`}>
                                                        <button className='btn btn-primary m-1'>Update</button>
                                                    </a>
                                                    <a>
                                                        <button className='btn btn-danger m-1' onClick={() => deleteCustomer(value._id)}>Delete</button>
                                                    </a>

                                                </td>
                                            </div>

                                        </tr>
                                    </tbody>
                                </>
                            )


                        })}
                    </table>

                </div>



            </div>

        </div>
    )
}

export default ViewClientBooking;