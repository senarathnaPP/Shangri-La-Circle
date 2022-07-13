import React, { Component } from 'react';
import axios from 'axios';

export default class hotelDetails extends Component {
  constructor (props){
    super(props);

    this.state={
      hotel:{}
    };
  }

  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/api/get/hotels/${id}`).then((res)=>{
      if(res.data.success){
        this.setState({
          hotel:res.data.hotel
        });

        console.log(this.state.hotel);

      }
    });
  }

  render() {
    const{hotelCode,hotelName,description,longitude,latitude}=this.state.hotel;

    return (
     
      <div className="card"
      style={{
        marginTop: "0px",
        alignItems: "center",
        width: "100%",
        height: "95%",
      }}>

<br />
        <button
          className="btn btn-success"
          style={{
            marginLeft: "-800px",
            marginTop: "0px",
            width: "160px",
            height: "50px",
          }}
        >
          <a
            href="/hotelManagement"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
            }}
          >
            View Hotels
          </a>
        </button>
        <br />
        <br />
        <h4 style={{ color: "black", fontSize: "36px" }}>
          {hotelCode} - Summarized Details
        </h4>
        <hr />

        <dl className='row'
          style={{ color: "black", fontSize: "24px", width: "100%" }}
        >
          <dt className='col-sm 3'>DESCRIPTION</dt>
          <dd className='col-sm 9'>{description}</dd>
        <hr/>
          <dt className='col-sm 3'>HOTEL NAME</dt>
          <dd className='col-sm 9'>{hotelName}</dd>
        <hr/>
        <dt className='col-sm 3'>HOTEL NAME</dt>
          <dd className='col-sm 9'>{longitude}</dd>
        <hr/>
        <dt className='col-sm 3'>HOTEL NAME</dt>
          <dd className='col-sm 9'>{latitude}</dd>
        <hr/>
        </dl>

      </div>
    )
  }
}
