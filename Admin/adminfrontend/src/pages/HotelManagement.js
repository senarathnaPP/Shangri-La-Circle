import React, { Component } from 'react';
import AdminNavbar from '../components/AdminNavbar/adminNavbar';
import Sidebar from '../components/SideBar/Sidebar';
import axios from 'axios'

export default class HotelManagement extends Component {

    constructor(props){
        super(props);

        this.state={
            hotels:[]
        };
    }

    componentDidMount(){
        this.retrieveHotels();
    }

    retrieveHotels(){
        axios.get("http://localhost:8000/api/get/hotels").then(res=>{
            if(res.data.success){
                this.setState({
                    hotels:res.data.existingHotels
                });
                console.log(this.state.hotels)
            }
        });
    }

    onDelete = (id) => {
        if (window.confirm("Do you want to remove this hotel?")) {
          axios.delete(`http://localhost:8000/api/delete/hotels/${id}`).then((res) => {
            alert("Hotel removed Successfully!");
            this.retrieveHotels();
          });
        }
      };

       //Search bar
  filterData(hotels, searchKey) {
    const result = hotels.filter(
      (item) =>
        item.hotelCode.toLowerCase().includes(searchKey) || //toLowerCase() helps to filter the data using the lowercase letters.
        item.hotelCode.toUpperCase().includes(searchKey) || //toUpperCase() helps to filter the data using the Uppercase letters.
        item.hotelName.toUpperCase().includes(searchKey) ||
        item.hotelName.toLowerCase().includes(searchKey)
    );

    this.setState({ hotels: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8000/api/get/hotels").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingHotels, searchKey);
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
              All Hotels
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
          

          <button className='btn btn-success'><a href='/add/hotels' style={{textDecoration:'none',color:'white'}}>
                        Add a new Hotel
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
                            <th scope='col'>HOTEL CODE</th>
                            <th scope='col'>HOTEL NAME</th>
                            <th scope='col'>DESCRIPTION</th>
                            <th scope='col'>LATITUDE</th>
                            <th scope='col'>LONGITUDE</th>
                            <th scope='col'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.hotels.map((hotels,index)=>(
                            <tr>
                                <th scope='row'>{index+1}</th>
                                <td>
                                <a href={`/hotels/${hotels._id}`} style={{textDecoration:'none'}}>
                                 {hotels.hotelCode}
                                </a>
                                </td>
                                <td>{hotels.hotelName}</td>
                                <td>{hotels.description}</td>
                                <td>{hotels.latitude}</td>
                                <td>{hotels.longitude}</td>
                                <td>
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


