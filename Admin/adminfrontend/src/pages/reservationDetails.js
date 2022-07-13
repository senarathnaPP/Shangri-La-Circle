import React, { Component } from 'react';
import axios from 'axios';

export default class reservationDetails extends Component {
    constructor (props){
        super(props);
    
        this.state={
          reservation:{}
        };
      }

      componentDidMount(){
        const id = this.props.match.params.id;
    
        axios.get(`http://localhost:8000/api/get/reservations/${id}`).then((res)=>{
          if(res.data.success){
            this.setState({
              reservation:res.data.reservation
            });
    
            console.log(this.state.reservation);
    
          }
        });
      }
    
  render() {

    const{reservationId,reservationName,numberOfReservations,price}=this.state.reservation;

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
              width: "200px",
              height: "50px",
            }}
          >
            <a
              href="/roomManagement"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              View Reservations
            </a>
          </button>
          <br />
          <br />
          <h4 style={{ color: "black", fontSize: "36px" }}>
            {reservationId} - Summarized Details
          </h4>
          <hr />
  
          <dl className='row'
            style={{ color: "black", fontSize: "24px", width: "100%" }}
          >
            <dt className='col-sm 3'>RESERVATION NAME</dt>
            <dd className='col-sm 9'>{reservationName}</dd>
          <hr/>
            <dt className='col-sm 3'>NUMBER OF RESERVATIONS</dt>
            <dd className='col-sm 9'>{numberOfReservations}</dd>
          <hr/>
          <dt className='col-sm 3'>PRICE</dt>
            <dd className='col-sm 9'>{price}</dd>
          <hr/>
         
          </dl>
  
        </div>
      )
    }
}
