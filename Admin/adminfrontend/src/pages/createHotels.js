import React, { Component } from 'react'
import axios from 'axios';

export default class createHotels extends Component {

  constructor(props){
    super(props);
    this.state={
        hotelCode:"",
        hotelName:"",
        description:"",
        latitude:"",
        longitude:"",
        imageUrl:"",
       
         /** */
        errors:{},
        errorLong:{},
        errorLat:{},
        errors1:{},
        errorsN:{},
        error:{}

    }
  }
    handleInputChange=(e)=>{
      const {name,value} = e.target;

      this.setState({
          ...this.state,
          [name]:value
      })
  }

/** */
formValidation = () =>{
  const{hotelCode,hotelName,description,imageUrl,latitude,longitude}=this.state;
  let isValid = true;
  const errors ={};
  const errors1 ={};
  const error = {};
  const errorsN = {};
  const errorLat={};
  const errorLong={};

  if(hotelCode.trim().length<3){
      error["hotelCodeLength"] = "Hotel code must be in length 3 or higher";
      isValid=false;
  }

  if(!hotelCode.match(/^[A-Z]{1,}[0-9]{3,}$/)){
      error["hotelCodePattern"]="Code should include at least 1 uppercase letters and at least 3 numbers";
      isValid=false;
  }

  if(!hotelCode){
      error["hotelCodeInput"] = "Hotel code Field is EMPTY!";
      isValid=false;
  }

  if(!hotelName){
      errorsN["hotelNameInput"] = "hotelName Field is EMPTY!";
      isValid=false;
  }

  if(!hotelName.match(/^[a-z A-Z]*$/)){
      errorsN["hotelNameInputPattern"] = "hotelName must contain characters only!";
      isValid=false;
  }

  if(!description){
      errors["descriptionInput"] = "description Field is EMPTY!";
      isValid=false;
  }

  if(!latitude){
    errorLat["latitudeInput"] = "Latitude Field is EMPTY!";
    isValid=false;
}

if(!longitude){
  errorLong["longitudeInput"] = "Longitude Field is EMPTY!";
  isValid=false;
}

  if(!imageUrl){
    errors1["imageUrlInput"] = "image URL Field is EMPTY!";
    isValid=false;
}

  

  this.setState({errors:errors,errors1:errors1,error:error,errorsN:errorsN,errorLat:errorLat,errorLong:errorLong});
  return isValid;
}
/** */

  onSubmit=(e)=>{
    e.preventDefault();

    /** */
    const isValid = this.formValidation();
    if(isValid){


    const{hotelCode,hotelName,description,imageUrl,latitude,longitude}= this.state;

    const data={
        hotelCode:hotelCode,
        hotelName:hotelName,
        description:description,
        imageUrl:imageUrl,
        latitude:latitude,
        longitude:longitude
       
    }
        
    console.log(data);

    axios.post("http://localhost:8000/api/add/hotels",data).then((res)=>{
      if(res.data.success){
        alert("Hotel added Successfully!")
        this.setState(
          {
            hotelCode:"",
            hotelName:"",
            description:"",
            imageUrl:"",
            latitude:"",
            longitude:""
          }
        )
      }
    })
}
}

  
  render() {
    const{errors}=this.state;
    const{errors1}=this.state;
    const{error}=this.state;
    const{errorsN}=this.state;
    const{errorLat}=this.state;
    const{errorLong}=this.state;

    return (
      <div className='container'>
      <div style={{width:'100%',borderRadius:'0px',backgroundColor:'#E9EAF1'}}>
      <div className='col-md-8 mt-4 mx-auto'>
      <br/>
      <button className="btn btn-danger" style={{width:'160px'}}>
        <a href="/hotelManagement" style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>
          View Hotels
        </a></button><br/><br/>

        <h1 className='h3 mb-3 font-weight-normal'> ADD A NEW HOTEL</h1>
        <form className='needs-validation' noValidate onSubmit={this.onSubmit}>
          <div className='form-group' style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>HOTEL CODE</label>
            <input 
              type="text"
              className="form-control"
              name="hotelCode"
              placeholder="Enter hotel code"
              value={this.state.hotelCode}
              onChange={this.handleInputChange}
            />
            {Object.keys(error).map((key)=>{
             return <div style={{color:'red'}} key={key}>{error[key]}</div> })}
          </div>

          <div className='form-group' style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>HOTEL NAME</label>
            <input 
              type="text"
              className="form-control"
              name="hotelName"
              placeholder="Enter hotel name"
              value={this.state.hotelName}
              onChange={this.handleInputChange}
            />
             {Object.keys(errorsN).map((key)=>{
              return <div style={{color:'red'}} key={key}>{errorsN[key]}</div> })}
          </div>

          <div className='form-group' style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>HOTEL DESCRIPTION</label>
            <input 
              type="text"
              className="form-control"
              name="description"
              placeholder="Enter hotel description"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
            {Object.keys(errors).map((key)=>{
              return <div style={{color:'red'}} key={key}>{errors[key]}</div> })}
          </div>

          <div className='form-group' style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>LOCATION: LATITUDE</label>
            <input type="text" className="form-control" name="latitude" placeholder="Enter hotel location:latitude" value={this.state.latitude} onChange={this.handleInputChange}/>
            {Object.keys(errorLat).map((key)=>{
              return <div style={{color:'red'}} key={key}>{errorLat[key]}</div> })}
          </div>

          <div className='form-group' style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>LOCATION: LONGITUDE</label>
            <input 
              type="text"
              className="form-control"
              name="longitude"
              placeholder="Enter hotel location:longitude"
              value={this.state.longitude}
              onChange={this.handleInputChange}
            />
            {Object.keys(errorLong).map((key)=>{
              return <div style={{color:'red'}} key={key}>{errorLong[key]}</div> })}
          </div>

          <div className='form-group' style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>HOTEL IMAGE</label>
            <input 
              type="text"
              className="form-control"
              name="imageUrl"
              placeholder="Enter hotel image url"
              value={this.state.imageUrl}
              onChange={this.handleInputChange}
            />
            {Object.keys(errors1).map((key)=>{
              return <div style={{color:'red'}} key={key}>{errors1[key]}</div> })}
          </div>

          <button className="btn btn-success" type="submit" style={{marginTop:'15px',marginBottom:'150px'}} onClick={this.onSubmit}>
            <i className="far fa-check-square"></i>
             &nbsp;Save
          </button>
          <br/>
        </form>

      </div>
      </div>
      </div>
    )
  }
}
