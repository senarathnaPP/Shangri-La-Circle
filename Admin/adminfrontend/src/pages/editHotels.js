import React, { Component } from 'react'
import axios from 'axios';
import { withRouter } from "react-router"; 
export default class editHotels extends Component {

    constructor(props){
        super(props);
        this.state={
            hotelCode:"",
            hotelName:"",
            description:"",
            latitude:"",
            longitude:"",
            imageUrl:""
        }
    }

    handleInputChange=(e)=>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit=(e)=> {
        e.preventDefault();
        /** */
            const id = this.props.match.params.id;

            const {hotelCode, description, hotelName, imageUrl,latitude,longitude} = this.state;

            const data = {
                hotelCode: hotelCode,
                description: description,
                hotelName: hotelName,
                latitude:latitude,
                longitude:longitude,
                imageUrl: imageUrl
            }

            console.log(data);

            axios.put(`http://localhost:8000/api/update/hotels/${id}`, data).then((res) => {
                if (res.data.success) {
                    alert("Hotel Details Updated Successfully!")
                    this.setState(
                        {
                            hotelCode: "",
                            description: "",
                            hotelName: "",
                            latitude:"",
                            longitude:"",
                            imageUrl: ""
                        }
                    )
                }
            })
        }
    
        componentDidMount(){
            const id=this.props.match.params.id;
    
            axios.get(`http://localhost:8000/api/get/hotels/${id}`).then((res) =>{
                if(res.data.success){
                    this.setState({
                        hotelCode:res.data.hotel.hotelCode,
                        description:res.data.hotel.description,
                        hotelName:res.data.hotel.hotelName,
                        imageUrl:res.data.hotel.imageUrl,
                        latitude:res.data.hotel.latitude,
                        longitude:res.data.hotel.longitude
                    });
    
                    console.log(this.state.hotel);
                }
            });
        }

  render() {
    return (
        <div className='container'>
        <div style={{width:'100%',margin:'40px',borderRadius:'0px',backgroundColor: '#D3D3D3',marginTop:'-30px',marginLeft:'0px'}}>
        <div className="col-md-8 mt-4 mx-auto"><br/><br/><br/>
        <button className="btn btn-danger" style={{width:'160px'}}>
        <a href="/view/rooms" style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>
          View Hotels
        </a></button><br/><br/>

    <h1 className="h3 mb-3 font-weight-normal" style={{color:'#B91717',fontWeight:'bolder'}}>Edit the Room details using the bellow form!</h1>
            <form className="needs-validation" noValidate>
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>ROOM TYPE</label>
                    <input type="text" className="form-control" name="hotelCode" placeholder="Enter code" value={this.state.hotelCode} onChange={this.handleInputChange} readOnly/>

                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Hotel Name</label>
                    <input type="text" className="form-control" name="hotelName" placeholder="Enter Unit Price" value={this.state.hotelName} onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Description</label>
                    <input type="text" className="form-control" name="description" placeholder="Enter description" value={this.state.description} onChange={this.handleInputChange}/>
                    
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Location: Latitude</label>
                    <input type="text" className="form-control" name="latitude" placeholder="Enter location:latitude" value={this.state.latitude} onChange={this.handleInputChange}/>
                    
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Location: Longitude</label>
                    <input type="text" className="form-control" name="longitude" placeholder="Enter location:longitude" value={this.state.longitude} onChange={this.handleInputChange}/>
                    
                </div>


                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Image url</label>
                    <input type="text" className="form-control" name="imageUrl" placeholder="Enter url" value={this.state.imageUrl} onChange={this.handleInputChange}/>
                    {/* <div className="text-danger">{this.state.errors.imageUrlInput}</div> */}
                </div>

                <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                    <i className="far fa-check-square"></i>
                        &nbsp;Update
                </button>
                <br/><br/>
            </form>


    </div>
    </div> 
    </div>
    )
  }
}
