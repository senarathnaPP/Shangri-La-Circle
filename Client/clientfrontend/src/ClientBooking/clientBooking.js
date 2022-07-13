import React, { Component, useState, useEffect } from 'react';
import ClientNavbar from '../ClientNavbar/clientNavbar';
import axios from 'axios';
import { Form, Button, Table, Row, Col, Card } from 'react-bootstrap';
import { useHistory } from "react-router-dom"
import { Modal } from 'react-bootstrap';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Swal from 'sweetalert2'
import emailjs from "emailjs-com";
import { DateRangePicker } from 'rsuite';
import "rsuite/dist/rsuite.min.css";
import { useParams } from 'react-router-dom';

import SimpleMap from '../Login/SimpleMap';


import './clientBooking.css';



function ClientBooking() {

    const history = useHistory();
    const { id } = useParams();

    const [customerName, setCustomerName] = useState("");
    const [hotelName, setHotelName] = useState("");
    const [reservationType, setReservationType] = useState("");
    const [numberOfReservations, setNumberOfReservations] = useState();
    const [numberOfNights, setNumberOfNights] = useState();
    const [roomPrice, setRoomPrice] = useState("");
    const [LoginStatus, setLoginStatus] = useState(false);
    const [show, setShow] = useState(false);
    const [logEmail, setEmail] = useState("");
    const [logUser, setUser] = useState("");
    const [hotelObject, setHotel] = useState([]);
    const [hotelCode, setHotelcode] = useState("");
    const [firstDate, setfirstDate] = useState("");
    const [secondDate, setsecondDate] = useState("");
    const [numberOfDays, setNumberofDates] = useState("");
    const [Days, setDays] = useState([]);



    const [hotelRooms, setHotelRooms] = useState([]);

    const handleClose = () => setShow(false);









    function sendDetails(e) {
        e.preventDefault();

        console.log("inside but", LoginStatus)
        if (!LoginStatus) {

            history.push("/login")
            return -1;
        }

        const numberOfDays = "12"
        const hotelName = hotelObject.hotelName
        const email = logEmail
        const newCustomer = {
            hotelName,
            customerName,
            email,
            reservationType,
            numberOfReservations,
            numberOfNights,
            roomPrice,
            firstDate,
            secondDate,
            numberOfDays,
        }

        const URL = 'http://localhost:8000/api/roomReservations/post';
        axios.post(URL, newCustomer).then(() => {
            alert("Cusomer Added")
        }).catch((error) => {
            alert(error);
        })


    }


    function handleSelectChange(event) {
        console.log("event", event.target.value)
        if (event.target.value) {

            switch (event.target.value) {
                case 'Standard':
                    setRoomPrice("10000");
                    break;

                case 'Deluxe':
                    setRoomPrice("15000");
                    break;

                case 'Luxury':
                    setRoomPrice("20000");
                    break;


            }

        }
        console.log(roomPrice)
        setReservationType(event.target.value)
    }



    useEffect(() => {
        console.log("sessionStorage.getItem('LogStatus')", sessionStorage.getItem('LogStatus'));

        const logStatus = sessionStorage.getItem('LogStatus') == 'true' ? true : false
        const logEmail = sessionStorage.getItem('LogEmail')
        const loguser = sessionStorage.getItem('Loguser')
        setUser(loguser)
        setLoginStatus(logStatus)
        setEmail(logEmail)


        console.log(LoginStatus)

    });


    function setPayNow(e) {
        e.preventDefault();
        setShow(true)

    }

    function sendMessage(e) {
        const form = {
            "name": logUser,
            "paymentId": e.id,
            "cusName": customerName,
            "noDays": numberOfNights,
            "noRes": numberOfReservations,
            "roomType": reservationType,
            "payment": roomPrice

        }

        axios.post('http://localhost:8000/api/message', form).then((res) => {
            console.log("abc", res)
        })
        

    }

    function sendMail(e) {
        console.log("eeeee", e)
        console.log("eeeee 1", logUser)
        console.log("eeeee 2", logEmail)

        const form = {
            "name": logUser,
            "email": logEmail,
            "message": "*This is an automated message. Please do not reply to this email address.",
            "paymentId": e.id,
            "cusName": customerName,
            "noDays": numberOfNights,
            "noRes": numberOfReservations,
            "roomType": reservationType,
            "payment": roomPrice

        }

        console.log("form", form)

        emailjs.send('service_235yth9', 'template_bogl1qi', form, '5cBXRbMJXvJdnDsz1').then(res => {
            console.log("res", res)
        }).catch((err) => {
            console.log(err)
        })

    }

    function paymentRecord(e) {

        const paymentId = e.id;
        const pyamentType = "Pay Pal"
        const pyamentStaus = "A"

        const newPayment = {
            paymentId,
            logEmail,
            customerName,
            reservationType,
            numberOfReservations,
            numberOfNights,
            roomPrice,
            pyamentType,
            pyamentStaus
        }
        const URL = 'http://localhost:8000/api/payment/post';
        axios.post(URL, newPayment).then(() => {
            console.log("payment Added")
        }).catch((error) => {
            console.log(error)
        })

    }

    function handleSelect(e) {
        console.log("inside date select", e)
        const firstDate = e ? e[0].toString() : false
        const SecondDate = e ? e[1].toString() : false

        if (firstDate) {
            let firstDates = firstDate.split(' ')
            let secondDate = SecondDate.split(' ')

            const fmonth = firstDates[1]
            const fday = firstDates[2]
            const fyear = firstDates[3]

            setfirstDate(fmonth + "/" + fyear)
            console.log("inside date select", fmonth + fday + fyear)

            const smonth = secondDate[1]
            const sday = secondDate[2]
            const syear = secondDate[3]

            setsecondDate(smonth + "/" + syear)
            console.log("inside date 2 select", smonth, sday, syear)
        }

        // var date1 = new Date(e[0]);
        // var date2 = new Date(e[1]);


        // var firstdate = (date1.getFullYear() + "/" + date1.getMonth());
        // var seconddate = (date2.getFullYear() + "/" + date2.getMonth());

        // if (firstdate === seconddate) {

        //     setDays([])
        //     console.log("inside true")

        //     const noDays = (date2.getDate() - date1.getDate()) + 1
        //     console.log("no of", noDays)

        //     var fDate = date1.getDate();
        //     var sDate = date2.getDate();

        //     for (fDate; fDate <= sDate; fDate++) {
        //         console.log("no +", fDate)
        //         if (Days.indexOf(fDate) === -1) {
        //             Days.push(fDate)
        //         }
        //         setDays(Days);
        //     }

        // } else {

        //     setDays([]);

        //     var fDate = date1.getDate();
        //     var sDate = date2.getDate(); 

        //     console.log("inside false")
        //     const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        //     const firstDate = new Date(e[0]);
        //     const secondDate = new Date(e[1]);

        //     const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
        //     console.log("inside false 2",diffDays+1)
            
        //     for (var num =1 ; num <= diffDays; num++) {
        //         if(fDate)
        //         console.log("no +", ++fDate)
        //         if (Days.indexOf(fDate) === -1) {
        //             Days.push(fDate)
        //         }
        //         setDays(Days);
        //     }

            
        // }


        // console.log("day",Days)


        // console.log("Date Timestamp:", date2.getTime())
        // console.log(date2)
        // console.log("Date: "
        //     (date2.getMonth() + 1) +
        //     "/" + date2.getFullYear());



    }



    useEffect(() => {
        function getBookingById() {
            axios.get(`http://localhost:8000/api/client/getHotel/${id}`).then((res) => {

                setHotel(res.data)

                console.log("aaaa", res.data)
                localStorage.setItem('Hhname', res.data.hotelName);
            }).catch((error) => {
                alert(error)
            })
        }

        console.log()

        const hName = localStorage.getItem('Hhname');
        axios.get(`http://localhost:8000/api/get/rooms/${hName}`).then(res => {
            setHotelRooms(res.data[0])
        }).catch((error) => {
            console.log(error);
        })

        getBookingById();
    }, [])






    console.log("1", Days)

    const hLat = hotelObject.latitude;
    const hlng = hotelObject.longitude;

    const img1 = hotelRooms.image1Url;
    console.log(img1);

    console.log("Mpa" + hLat, hlng);
    return (


        <div>


            <>


                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Online Payament Mode</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <PayPalScriptProvider options={{ "client-id": "test" }}>
                            <PayPalButtons
                                createOrder={(data, actions) => {
                                    return actions.order.create({
                                        purchase_units: [
                                            {
                                                amount: {
                                                    value: roomPrice,
                                                },


                                            },
                                        ],
                                    });
                                }}
                                onApprove={(data, actions) => {
                                    return actions.order.capture().then((details) => {
                                        if (details) {

                                            paymentRecord(details);

                                            Swal.fire(
                                                'Payment Succsesfull',
                                                'Pyament details send to ' + logEmail,
                                                'success'
                                            )

                                            sendMail(details);
                                            sendMessage(details);




                                        } else {

                                            const details = {
                                                id: "nun"
                                            }

                                            paymentRecord(details);


                                            Swal.fire(
                                                'successful',
                                                'You have not register',
                                                'warning'
                                            )

                                        }
                                        console.log(details)
                                        const name = details.payer.name.given_name;

                                    }, () => {

                                    });
                                }}
                            />
                        </PayPalScriptProvider>



                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </>

            <div class="modal fade" id="payOnlineModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Online Payament Mode</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>

                    </div>
                </div>
            </div>

            <ClientNavbar />
            <div className='firstSection'>
                <img src={hotelObject.imageUrl} />
                <div class="bg-text">
                    <h2>{hotelObject.hotelName}</h2>
                    <h1 style={{ fontSize: "50px" }}>{hotelObject.description}</h1>
                </div>
            </div>
            <div className='fourthSection'>
                <h1>Rooms</h1>
                <div className='cards'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={hotelRooms.image1Url} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                {hotelRooms.description}
                            </Card.Text>
                        </Card.Body>
                    </Card><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={hotelRooms.image2Url} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                {hotelRooms.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={hotelRooms.image3Url} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                {hotelRooms.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

            </div>

            <div className='secondSection'>
                <div className='mainOne'>
                    <h1>Bookings</h1>

                    <div className='mainBody'>

                        <div className='mainForm'>
                            <form >

                                <Row >
                                    <div className="form-group md-6">
                                        <label for="customerName">Hotel Name:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="customerName"
                                            placeholder="Enter Name"
                                            value={hotelObject.hotelName}
                                            onChange={(e) => {
                                                setHotelName(e.target.value);
                                            }} />
                                    </div>

                                </Row>





                                <Row >
                                    <div className="form-group md-6">
                                        <label for="customerName">Customer Name:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="customerName"
                                            placeholder="Enter Name"
                                            onChange={(e) => {
                                                setCustomerName(e.target.value);
                                            }} />
                                    </div>

                                </Row>

                                <Row>

                                    <div className="form-group">
                                        <label for="reservationType">Reservation Type:</label>
                                        <select
                                            id="reservationType"
                                            className="form-control"
                                            onChange={
                                                handleSelectChange
                                            }>
                                            <option selected disabled>Choose...</option>
                                            <option>Standard</option>
                                            <option>Deluxe</option>
                                            <option>Luxury</option>
                                        </select>
                                    </div>

                                </Row>

                                <Row>


                                    <div className="form-group ">
                                        <label for="numberOfReservations">Number Of Reservations:</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="numberOfReservations"
                                            placeholder="Enter Number Of Reservations"
                                            onChange={(e) => {
                                                setNumberOfReservations(e.target.value);
                                            }}
                                        />
                                    </div>

                                </Row>

                                <Row>

                                    <div className="form-group md-6">
                                        <label for="numberOfNights">Number Of Nights:</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="numberOfNights"
                                            placeholder="Enter Name"
                                            onChange={(e) => {
                                                setNumberOfNights(e.target.value);
                                            }}
                                        />
                                    </div>

                                </Row>

                                <Row style={{ "margin-top": "10px" }}>
                                    <label for="numberOfNights">Accomadation Dates:</label>
                                    <DateRangePicker

                                        onChange={(value) => {
                                            handleSelect(value);
                                        }}

                                    />

                                </Row>

                                <Row>

                                    <Col xs={2}>

                                        <div className='submitButton'>
                                            <button type="submit" onClick={sendDetails} className="btn btn-primary">Submit</button>
                                        </div>

                                    </Col>

                                    <Col xs={3}>

                                        {LoginStatus &&
                                            <div className='submitButton'>
                                                <button type="submit" onClick={setPayNow} className="btn btn-primary">PayNow</button>
                                            </div>


                                        }


                                    </Col>

                                    <Col>

                                        <p style={{ "font-family": "Montserrat,Verdana,Helvetica,Arial,sans-serif", "font-size": "23px", "marginTop": "20px", "margin-left": "160px" }}>Rs {roomPrice}</p>



                                    </Col>




                                </Row>







                            </form>
                        </div>
                    </div>



                </div>
            </div>
            <div className='thirdSection'>
                <div className='map'>
                    <SimpleMap lat={hLat} lng={hlng} />
                </div>


            </div>

        </div>


    )
}

export default ClientBooking;