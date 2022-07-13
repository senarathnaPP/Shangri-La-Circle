import React, { Component } from 'react'
import axios from 'axios';
import { withRouter } from "react-router"; 

export default class editRooms extends Component {

    constructor(props){
        super(props);
        this.state={
            roomType:"",
            hotelName:"",
            description:"",
            roomPrice:"",
            noOfBeds:"",
            image1Url:"",
            image2Url:"",
            image3Url:""
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

            const {roomType, description, hotelName, image1Url,roomPrice,noOfBeds,image2Url,image3Url} = this.state;

            const data = {
                roomType: roomType,
                description: description,
                hotelName: hotelName,
                roomPrice:roomPrice,
                noOfBeds:noOfBeds,
                image1Url: image1Url,
                image2Url:image2Url,
                image3Url:image3Url
            }

            console.log(data);

            axios.put(`http://localhost:8000/api/update/room/${id}`, data).then((res) => {
                if (res.data.success) {
                    alert("Room Details Updated Successfully!")
                    window.location.href='/view/rooms';
                    this.setState(
                        {
                            roomType: "",
                            description: "",
                            hotelName: "",
                            roomPrice:"",
                            noOfBeds:"",
                            image1Url: "",
                            image2Url:"",
                            image3Url:""

                        }
                    )
                }
            })
        }
    
        componentDidMount(){
            const id=this.props.match.params.id;
    
            axios.get(`http://localhost:8000/api/get/rooms/${id}`).then((res) =>{
                if(res.data.success){
                    this.setState({
                        roomType:res.data.room.roomType,
                        description:res.data.room.description,
                        hotelName:res.data.room.hotelName,
                        roomPrice:res.data.room.roomPrice,
                        noOfBeds:res.data.room.noOfBeds,
                        image1Url:res.data.room.image1Url,
                        image2Url:res.data.room.image2Url,
                        image3Url:res.data.room.image3Url
                    });
    
                    console.log(this.state.room);
                }
            });
        }

  render() {
    return (
        <div className='container'>
        <div style={{width:'100%',margin:'40px',borderRadius:'0px',backgroundColor: '#D3D3D3',marginTop:'-30px',marginLeft:'0px'}}>
        <div className="col-md-8 mt-4 mx-auto"><br/><br/><br/>
        <button className="btn btn-danger" style={{width:'160px'}}>
        <a href="/hotelManagement" style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>
          View Rooms
        </a></button><br/><br/>

    <h1 className="h3 mb-3 font-weight-normal" style={{color:'#B91717',fontWeight:'bolder'}}>Edit the hotel details using the bellow form!</h1>
            <form className="needs-validation" noValidate>
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Hotel Code</label>
                    <input type="text" className="form-control" name="roomType" placeholder="Enter type" value={this.state.roomType} onChange={this.handleInputChange} readOnly/>

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
                    <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>ROOM PRICE</label>
                    <input type="text" className="form-control" name="roomPrice" placeholder="Enter roomPrice" value={this.state.roomPrice} onChange={this.handleInputChange}/>
                    
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>NUMBER OF BEDS</label>
                    <input type="text" className="form-control" name="noOfBeds" placeholder="Enter noOfBeds" value={this.state.noOfBeds} onChange={this.handleInputChange}/>
                    
                </div>


                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Image1 url</label>
                    <input type="text" className="form-control" name="image1Url" placeholder="Enter url" value={this.state.image1Url} onChange={this.handleInputChange}/>
                    {/* <div className="text-danger">{this.state.errors.image1UrlInput}</div> */}
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Image1 url</label>
                    <input type="text" className="form-control" name="image2Url" placeholder="Enter url" value={this.state.image2Url} onChange={this.handleInputChange}/>
                    {/* <div className="text-danger">{this.state.errors.image1UrlInput}</div> */}
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Image1 url</label>
                    <input type="text" className="form-control" name="image3Url" placeholder="Enter url" value={this.state.image3Url} onChange={this.handleInputChange}/>
                    {/* <div className="text-danger">{this.state.errors.image1UrlInput}</div> */}
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
