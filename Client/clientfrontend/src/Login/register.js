import { createRef, Component } from 'react';
import './register.css';
import { Form, Button, Table, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import { NavLink, useHistory } from "react-router-dom"

import Swal from 'sweetalert2'

class register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            countries: [],
            firstName: '',
            secondName: '',
            title: '',
            email: '',
            country: '',
            phoneNumber: '',
            password: '',
            birthday: '',
            reEnterPassword: '',
            phonecode: '',
            newArrey: {},
            countryphonecode: '',

            firstnameError: false,
            secondNameError: false,
            titleError: false,
            emailError: false,
            countryError: false,
            phoneNumberError: false,
            passwordError: false,
            birthdayError: false,
            repasserr: false,
            checkboxChecked: false,
            policy: false



        }
        this.Getdatas = this.Getdatas.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changSecondNameHandler = this.changSecondNameHandler.bind(this);

        this.changeTitleHandler = this.changeTitleHandler.bind(this);

        this.changeEmailHandler = this.changeEmailHandler.bind(this);

        this.changeCountryHandler = this.changeCountryHandler.bind(this);

        this.changeBirthdayHandler = this.changeBirthdayHandler.bind(this);

        this.changePasswordHandler = this.changePasswordHandler.bind(this);

        this.changeRePasswordHandler = this.changeRePasswordHandler.bind(this);

        this.changePhonenumberHandler = this.changePhonenumberHandler.bind(this);

        this.phcode = this.phcode.bind(this);

        this.changecountryphonecodeHandler = this.changecountryphonecodeHandler.bind(this);
        this.formData = createRef();

        this.handleChange = this.handleChange.bind(this);




    }

    handleChange(evt) {
        console.log(evt.target.checked)
        if (evt.target.checked) {
            this.state.policy = false
        } else {
            this.state.policy = true
        }
        this.setState({ checkboxChecked: evt.target.checked });
    }


    changeFirstNameHandler = (event) => {

        if (!event.target.value) {
            this.state.firstnameError = true
        } else {
            this.state.firstnameError = false
        }
        this.setState({ firstName: event.target.value }, () => {
            console.log("firstname", this.state.firstName);
        });
    }

    changSecondNameHandler = (event) => {

        if (!event.target.value) {
            this.state.secondNameError = true
        } else {
            this.state.secondNameError = false
        }
        this.setState({ secondName: event.target.value }, () => {
            console.log("secondName", this.state.secondName);
        });
    }

    changeTitleHandler = (event) => {


        this.setState({ title: event.target.value }, () => {
            console.log("title", this.state.title);
        });
    }

    changeEmailHandler = (event) => {

        if (!event.target.value) {
            this.state.emailError = true
        } else {
            this.state.emailError = false
        }
        this.setState({ email: event.target.value }, () => {
            console.log("email", this.state.email);
        });
    }


    changecountryphonecodeHandler = (event) => {

        if (!event.target.value) {
            this.state.phoneNumberError = true
        } else {
            this.state.phoneNumberError = false
        }
        this.setState({ countryphonecode: event.target.value }, () => {
            console.log("email", this.state.countryphonecode);
        });
    }

    changeCountryHandler = (event) => {




        // this.setState({
        //     newArrey: newArreyobj
        // }, async () => {
        //     console.log("returnzzz", this.state.newArrey)
        //     console.log("returnzzz", this.state.newArrey)

        // })







        this.setState({ country: event.target.value }, () => {

            console.log("coun", this.state.country);
            this.phcode()
            //this.getPhoneCode()
        });
    }



    phcode() {

        const obj = async () => {
            const result = await fetch(`https://restcountries.com/v3.1/name/${this.state.country}`);
            const getcon = await result.json();


            const phcode1 = await getcon[0].idd.root
            const phcode2 = await getcon[0].idd.suffixes[0]

            this.setState({
                countryphonecode: phcode1 + phcode2
            }, () => {
                console.log("coun111", this.state.countryphonecode);


            })

        }
        //console.log("counxxx", getcon);

        obj();

    }


    changePasswordHandler = (event) => {

        if (!event.target.value) {
            this.state.passwordError = true
        } else {
            this.state.passwordError = false
        }

        this.setState({ password: event.target.value }, () => {
            console.log("pass", this.state.password);
        });
    }

    changeRePasswordHandler = (event) => {
        if (!event.target.value) {
            this.state.repasserr = true
        } else {
            this.state.repasserr = false
        }

        this.setState({ reEnterPassword: event.target.value }, () => {
            console.log("re en", this.state.reEnterPassword);
        });
    }

    changeBirthdayHandler = (event) => {
        if (!event.target.value) {
            this.state.birthdayError = true
        } else {
            this.state.birthdayError = false
        }
        this.setState({ birthday: event.target.value }, () => {
            //console.log("bith", this.state.birthday);
        });
    }

    changePhonenumberHandler = (event) => {
        if (!event.target.value) {
            this.state.phoneNumberError = true
        } else {
            this.state.phoneNumberError = false
        }
        this.setState({ phoneNumber: event.target.value }, () => {
            //console.log("phone", this.state.phoneNumber);
        });
    }




    Getdatas() {
        const obj = async () => {
            const result = await fetch("https://restcountries.com/v3.1/all");
            const getcon = await result.json();
            //console.log("counxxx", getcon);
            this.setState({
                countries: getcon
                
            }, () => {
                
                //console.log("coun", this.state.countries);
            })

        }
        //console.log("counxxx", getcon);

        obj();
    }


    componentDidMount() {

        this.Getdatas()
        


    }

    add = (event) => {

        console.log("inside add")
        event.preventDefault();

        // console.log("inside all 1", !this.formData.current.firstName.value)
        // console.log("inside all2", !this.formData.current.secondName.value)
        // console.log("inside all3", !this.formData.current.birthday.value)
        // console.log("inside all4", this.formData.current.country.value)
        // console.log("inside all5", !this.formData.current.email.value)
        // console.log("inside all6", !this.formData.current.phoneNumber.value)
        // console.log("inside all7", !this.formData.current.password.value)
        // console.log("inside all8", !this.formData.current.reEnterPassword.value)
        // console.log("inside all9", this.state.checkboxChecked)


        const newClient = {
            Title: this.formData.current.tittle.value,
            customerFirstName: this.formData.current.firstName.value,
            customerSecondName: this.formData.current.secondName.value,
            dateOfBirth: this.formData.current.birthday.value,
            country: this.formData.current.country.value,
            email: this.formData.current.email.value,
            phoneNumber: this.formData.current.countryphonecode.value + this.formData.current.phoneNumber.value,
            password: this.formData.current.reEnterPassword.value
        }

        console.log(newClient)

        if (this.formData.current.firstName.value && this.formData.current.secondName.value && this.formData.current.birthday.value
            && this.formData.current.email.value && this.formData.current.phoneNumber.value && this.formData.current.countryphonecode.value &&
            this.formData.current.password.value && this.formData.current.reEnterPassword.value) {

            if (this.formData.current.password.value == this.formData.current.reEnterPassword.value) {
                if (((this.formData.current.password.value).length) < 10 && ((this.formData.current.password.value).length) > 5) {

                    if (this.state.checkboxChecked) {
                        const URL = 'http://localhost:8000/api/clientregister/post';
                        axios.post(URL, newClient).then(() => {
                            Swal.fire(
                                'successful',
                                'You have register',
                                'success'
                            )

                            this.props.history.push("/login")

                        }).catch((error) => {
                            alert(error);
                        })

                    }else{
                        Swal.fire({
                            title: 'Please read and agree to the Shangri-La Circle Terms Conditions, Privacy Policy and the Cookies Policy.',
                            icon: 'warning',
        
        
                            showCancelButton: false,
                            showCloseButton: true
                        })
                    }





                } else {
                    Swal.fire({
                        title: 'Your password must contain at least 8 characters and max 10 characters',
                        icon: 'warning',


                        showCancelButton: false,
                        showCloseButton: true
                    })
                }

            } else {
                Swal.fire({
                    title: 'Password does not match',
                    icon: 'warning',


                    showCancelButton: false,
                    showCloseButton: true
                })
            }

        } else {
            console.log((this.formData.current.password.value).length)
            Swal.fire({
                title: 'Some Fields are empty ',
                icon: 'warning',


                showCancelButton: false,
                showCloseButton: true
            })

        }

    }


    render() {
        return (
            <div>

                <div class="register_title">
                    <h3>Join Shangri-La Circle</h3>
                    <h5>Join as a member to enjoy exclusive benefits and a seamless digital experience.</h5>
                </div>

                <div class="register_content">
                    <div class="m-register">
                        <Form onSubmit={this.add} ref={this.formData}>
                            <Row>
                                <Col>

                                    <Form.Label>Tittle</Form.Label>
                                    <Form.Select aria-label="Default select example" value={this.state.title} name="tittle"
                                        onChange={
                                            this.changeTitleHandler
                                        }>



                                        {/* <option>Open this select menu</option> */}
                                        <option >Mr</option>
                                        <option >Mr</option>
                                        <option >Ms</option>
                                        <option >Mrs</option>
                                        <option >Sir</option>
                                        <option >Dr</option>
                                        <option >Mdm</option>
                                        <option >Professor</option>
                                    </Form.Select>


                                </Col>
                                <Col>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>First Name*</Form.Label>
                                        <Form.Control type="text" placeholder="" value={this.state.firstName} onChange={this.changeFirstNameHandler} name="firstName" />

                                        {this.state.firstnameError && <p style={{ "color": "#fe0017", "font-size": "small" }}>Please enter a first Name. </p>}




                                    </Form.Group>


                                </Col>
                                <Col>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Second Name*</Form.Label>
                                        <Form.Control type="text" placeholder="" value={this.state.secondName} onChange={this.changSecondNameHandler} name="secondName" />

                                        {this.state.secondNameError && <p style={{ "color": "#fe0017", "font-size": "small" }}>Please enter a secondName. </p>}
                                    </Form.Group>


                                </Col>



                            </Row>

                            <div class="row_register">
                                <Row>
                                    <Col>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Date of Birth*</Form.Label>
                                            <Form.Control type="date" placeholder="" value={this.state.birthday} onChange={this.changeBirthdayHandler} name="birthday" />

                                            {this.state.birthdayError && <p style={{ "color": "#fe0017", "font-size": "small" }}>Please select your date of birth. </p>}
                                        </Form.Group>

                                    </Col>


                                </Row>
                            </div>

                            <Row>
                                <Col>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Country/Region*</Form.Label>
                                        <Form.Select aria-label="Default select example" value={this.state.country} name="country"
                                            onChange={
                                                this.changeCountryHandler
                                            }>

                                            {/* <option>Open this select menu</option> */}
                                            {
                                                this.state.countries.map((obj) => (

                                                    <option >{obj.name.common}</option>
                                                ))

                                            }

                                            {this.state.countryError && <p style={{ "color": "#fe0017", "font-size": "small" }}>Please select Country / Region. </p>}
                                        </Form.Select>


                                    </Form.Group>

                                </Col>


                            </Row>

                            <Row>
                                <Col>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email*</Form.Label>
                                        <Form.Control type="email" placeholder="" value={this.state.email} onChange={this.changeEmailHandler} name="email" />
                                        {this.state.emailError && <p style={{ "color": "#fe0017", "font-size": "small" }}>Please enter a valid Email. </p>}
                                    </Form.Group>

                                </Col>


                            </Row>

                            <Row>


                            </Row>
                            <Form.Label>Phone Number*</Form.Label>
                            <Row>
                                <Col xs={2} >

                                    <Form.Group className="mb-3" controlId="formBasicEmail">


                                        <Form.Control type="phone number" placeholder="" value={this.state.countryphonecode} onChange={this.changecountryphonecodeHandler} name="countryphonecode" />

                                    </Form.Group>

                                </Col>

                                <Col >

                                    <Form.Group controlId="formBasicEmail">


                                        <Form.Control type="phone number" placeholder="" value={this.state.phoneNumber} onChange={this.changePhonenumberHandler} name="phoneNumber" />

                                    </Form.Group>

                                </Col>

                                <Row>
                                    {this.state.phoneNumberError && <p style={{ "color": "#fe0017", "font-size": "small" }}>Please enter a valid Mobile Number. </p>}

                                </Row>


                            </Row>

                            <Row>
                                <Col>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Password*</Form.Label>
                                        <Form.Control type="password" placeholder="" value={this.state.password} onChange={this.changePasswordHandler} name="password" />
                                        {this.state.passwordError && <p style={{ "color": "#fe0017", "font-size": "small" }}>Password is a required field. </p>}
                                    </Form.Group>

                                </Col>


                            </Row>

                            <Row>
                                <Col>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Re-enter Password*</Form.Label>
                                        <Form.Control type="password" placeholder="" value={this.state.reEnterPassword} onChange={this.changeRePasswordHandler} name="reEnterPassword" />
                                        {this.state.repasserr && <p style={{ "color": "#fe0017", "font-size": "small" }}>Retype Password. </p>}
                                    </Form.Group>

                                </Col>


                            </Row>

                            <Row>
                                <div style={{ "marginLeft": "1px" }} className="container.fluid p-3 my-80 bg-secondary text-gradient bg-opacity-10 ">
                                    <p style={{ "font-family": "Montserrat,Verdana,Helvetica,Arial,sans-serif" , "font-size":"13px" }} >
                                        With your consent, Shangri-La would like to use your name, email address, mobile phone number and other relevant contact information for direct marketing. Please tick the box(es) below if you would like to receive information about: <br></br>
                                        <br></br>
                                        Shangri-La’s hotels, products and services.
                                        <br></br>
                                        <br></br>

                                        Shangri-La’s selected third party products and services for travel, transportation, retail, food and beverage, hotel accommodation, credit cards, financial and investment services, real estate, entertainment, publications, fashion and jewellery, leisure and sports, health and wellness, non-profit and charitable activities, telecommunications, social networking, media and public relations.

                                        Shangri-La Circle membership monthly e-Statements, showing Points and the above marketing information.
                                    </p>
                                </div>
                            </Row>

                            <Row>
                                <Col>

                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="I have read and agree to the Shangri-La Circle Terms and Conditions , the Privacy Policy and the Cookies Policy." checked={this.state.checkboxChecked}
                                            onChange={this.handleChange} />
                                        {this.state.policy && <p style={{ "color": "#fe0017", "font-size": "small" }}>Please read and agree to the Shangri-La Circle Terms Conditions, Privacy Policy and the Cookies Policy. </p>}
                                    </Form.Group>

                                </Col>


                            </Row>

                            <Row>

                                <Button size="sm" className="btn btn-secondary" variant="add" type="submit" disabled={this.state.disable} style={{ "color": "#000000", "background": "#e0aa14", "font-size": "large", "marginTop": "5px" }}>
                                    Add
                                </Button >

                            </Row>



                        </Form>
                    </div>

                </div>

            </div>
        );
    }
}

export default register;


// AIzaSyCLidDSiGeSShg8PFyU-UN5TigLyOVfNQ0