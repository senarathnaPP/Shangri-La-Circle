import React, { Component } from 'react';
import AdminNavbar from '../components/AdminNavbar/adminNavbar';
import Sidebar from '../components/SideBar/Sidebar';
import axios from 'axios'

export default class ViewRooms extends Component {

    constructor(props){
        super(props);

        this.state={
            rReservations:[]
        };
    }

    componentDidMount(){
        this.retrieveRoomRes();
    }

    retrieveRoomRes(){
        axios.get("http://localhost:8000/api/get/rooms").then(res=>{
            if(res.data.success){
                this.setState({
                    rReservations:res.data.existingRooms
                });
                console.log(this.state.rReservations)
            }
        });
    }

    onDelete = (id) => {
        if (window.confirm("Do you want to remove this Room?")) {
          axios.delete(`http://localhost:8000/api/delete/room/${id}`).then((res) => {
            alert("Room removed Successfully!");
            this.retrieveRoomRes();
          });
        }
      };

       //Search bar
  filterData(rReservations, searchKey) {
    const result = rReservations.filter(
      (item) =>
        item.roomType.toLowerCase().includes(searchKey) || //toLowerCase() helps to filter the data using the lowercase letters.
        item.roomType.toUpperCase().includes(searchKey) || //toUpperCase() helps to filter the data using the Uppercase letters.
        item.hotelName.toUpperCase().includes(searchKey) ||
        item.hotelName.toLowerCase().includes(searchKey) ||
        item.roomPrice.toLowerCase().includes(searchKey)
    );

    this.setState({ rReservations: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8000/api/get/rooms").then((res) => {
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
              All Rooms
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
          

          <button className='btn btn-success'><a href='/add/rooms' style={{textDecoration:'none',color:'white'}}>
                        Add a Room
          </a></button>

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
                            <th scope='col'>ROOM TYPE</th>
                            <th scope='col'>HOTEL NAME</th>
                            <th scope='col'>DESCRIPTION</th>
                            <th scope='col'>PRICE</th>
                            <th scope='col'>NUMBER OF BEDS</th>
                            <th scope='col'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.rReservations.map((rReservations,index)=>(
                            <tr>
                                <th scope='row'>{index+1}</th>
                                <td>
                                {/* <a href={`/edit/rooms/${rReservations._id}`} style={{textDecoration:'none'}}> */}
                                 {rReservations.roomType}
                                {/* </a> */}
                                </td>
                                <td>{rReservations.hotelName}</td>
                                <td>{rReservations.description}</td>
                                <td>{rReservations.roomPrice}</td>
                                <td>{rReservations.noOfBeds}</td>
                                <td>
                                    <a className='btn btn-warning' href={`/edit/rooms/${rReservations._id}`} style={{color:'black'}}>
                                        <i className='fas fa-edit'></i>
                                        &nbsp;EDIT
                                    </a>
                                    &nbsp;
                                    <a className ="btn btn-danger" href="#" onClick={() => this.onDelete(rReservations._id)} style={{ textDecoration: "none", color: "white" }}
                                        >
                                        <i className='fas fa-trash-alt'></i>
                                        &nbsp;REMOVE
                                    </a>
                                </td>
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


