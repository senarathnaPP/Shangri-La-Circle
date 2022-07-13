import React, { Component } from 'react';
import AdminNavbar from '../components/AdminNavbar/adminNavbar';
import Sidebar from '../components/SideBar/Sidebar';
import axios from 'axios'

export default class Payment extends Component {

    constructor(props){
        super(props);

        this.state={
            payments:[]
        };
    }

    componentDidMount(){
        this.retrievePayments();
    }

    retrievePayments(){
        axios.get("http://localhost:8000/api/get/payments").then(res=>{
            if(res.data.success){
                this.setState({
                    payments:res.data.existingPayments
                });
                console.log(this.state.payments)
            }
        });
    }

    //Search bar
  filterData(payments, searchKey) {
    const result = payments.filter(
      (item) =>
        item.paymentId.toLowerCase().includes(searchKey) || //toLowerCase() helps to filter the data using the lowercase letters.
        item.paymentId.toUpperCase().includes(searchKey) || //toUpperCase() helps to filter the data using the Uppercase letters.
        item.customerName.toUpperCase().includes(searchKey) ||
        item.customerName.toLowerCase().includes(searchKey)
    );

    this.setState({ payments: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8000/api/get/payments").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPayments, searchKey);
      }
    });
  };

  render() {
    

    return (
        <div>
            <AdminNavbar/>
            {/* <Sidebar /> */}
            <div className="container"
                    style={{
                    // margin: "40px",
                    // marginLeft: "0px",
                    width: "100%",
                    borderRadius: "0px",
                    marginTop: "-20px",
                    background: "#D3D3D3",
                    }}>
                <div className="col-lg-9 mt-2 mb-2">
            <br />
            <h4
              style={{
                color: 'rgba(6, 21, 117)',
                fontSize: "48px",
                fontWeight: "bold",
                textAlign: "center",
                marginLeft:"100px"
              }}
            >
              All Payments
            </h4>
          </div>

          <div className="col-lg-9 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchQuery"
              onChange={this.handleSearchArea}
              style={{
                width: "350px",
                marginLeft: "10px",
                marginTop: "30px",
                borderColor: "rgba(6, 21, 117,0.5)",
              }}
            ></input>
          </div>
          <br />
          


          &nbsp;&nbsp;
          <button className='btn btn-success'><a href='/home' style={{textDecoration:'none',color:'white'}}>
                        Dashboard
          </a></button>
          
          <div>
              <br/><br/>
                <table className="table table-hover"
                style={{
                    marginLeft:'0px',
                    backgroundColor: "#ffff",
                    borderRadius: "5px",
                    width: "100%",
                    //border: "none",
                }}>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>PAYMENT ID</th>
                            <th scope='col'>LOG EMAIL</th>
                            <th scope='col'>CUSTOMER NAME</th>
                            <th scope='col'>RESERVATION TYPE</th>
                            <th scope='col'>NUMBER OF RESERVATIONS</th>
                            <th scope='col'>NUMBER OF NIGHTS</th>
                            <th scope='col'>ROOM PRICE</th>
                            <th scope='col'>PAYMENT TYPE</th>
                            <th scope='col'>PAYMENT STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.payments.map((payments,index)=>(
                            <tr>
                                <th scope='row'>{index+1}</th>
                                <td>
                                
                                 {payments.paymentId}
                               
                                </td>
                                <td>{payments.logEmail}</td>
                                <td>{payments.customerName}</td>
                                <td>{payments.reservationType}</td>
                                <td>{payments.numberOfReservations}</td>
                                <td>{payments.numberOfNights}</td>
                                <td>{payments.roomPrice}</td>
                                <td>{payments.pyamentType}</td>
                                <td>{payments.pyamentStaus}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
                   
            </div>
        </div>
        <br/>
        </div>

    )
  }
}