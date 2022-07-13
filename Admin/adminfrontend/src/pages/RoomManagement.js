import React, { Component } from 'react';
import AdminNavbar from '../components/AdminNavbar/adminNavbar'; 
import axios from 'axios'

export default class RoomManagement extends Component {

    constructor(props){
        super(props);

        this.state={
            rooms:[]
        };
    }

    componentDidMount(){
        this.retrieveRooms();
    }

    retrieveRooms(){
        axios.get("http://localhost:8000/api/reservations").then(res=>{
            if(res.data.success){
                this.setState({
                    rooms:res.data.existingRooms
                });
                console.log(this.state.rooms)
            }
        });
    }

    onDelete = (id) => {
        if (window.confirm("Do you want to remove this hotel?")) {
          axios.delete(`http://localhost:8000/api/reservations/delete/${id}`).then((res) => {
            alert("Hotel removed Successfully!");
            this.retrieveRooms();
          });
        }
      };

       //Search bar
  filterData(rooms, searchKey) {
    const result = rooms.filter(
      (item) =>
        item.hotelName.toLowerCase().includes(searchKey) || //toLowerCase() helps to filter the data using the lowercase letters.
        item.hotelName.toUpperCase().includes(searchKey) || //toUpperCase() helps to filter the data using the Uppercase letters.
        item.customerName.toUpperCase().includes(searchKey) ||
        item.customerName.toLowerCase().includes(searchKey)
    );

    this.setState({ rooms: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8000/api/reservations").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingRooms, searchKey);
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
              All Reservations
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
                            <th scope='col'>HOTEL NAME</th>
                            <th scope='col'>CUSTOMER NAME</th>
                            <th scope='col'>RESERVATION TYPE</th>
                            <th scope='col'>NUMBER OF RESERVATIONS</th>
                            <th scope='col'>PRICE</th>
                            <th scope='col'>FIRST DATE</th>
                            <th scope='col'>SECOND DATE</th>
                            <th scope='col'>NUMBER OF DAYS</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.rooms.map((rooms,index)=>(
                            <tr>
                                <th scope='row'>{index+1}</th>
                                <td>
                                
                                 {rooms.hotelName}
                               
                                </td>
                                <td>{rooms.customerName}</td>
                                <td>{rooms.reservationType}</td>
                                <td>{rooms.numberOfReservations}</td>
                                <td>{rooms.numberOfNights}</td>
                                <td>{rooms.roomPrice}</td>
                                <td>{rooms.firstDate}</td>
                                <td>{rooms.secondDate}</td>
                                <td>{rooms.numberOfDays}</td>
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
