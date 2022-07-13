import React, { Component } from 'react'
import axios from 'axios';
import AdminNavbar from '../components/AdminNavbar/adminNavbar'; 

export default class createRooms extends Component {

    constructor(props){
        super(props);

        this.state={
            roomType:"",
            hotelName:"",
            roomPrice:"",
            description:"",
            noOfBeds:"",
            image1Url:"",
            image2Url:"",
            image3Url:"",
            hotels:[],

               /** */
        errorType:{},
        errorPrice:{},
        errorDes:{},
        errorNo:{},
        errorImgUrl1:{},
        errorImgUrl2:{},
        errorImgUrl3:{}

        };
        this.handleInputSelect=this.handleInputSelect.bind(this)
    }
    handleInputChange=(e)=>{
        console.log("messgae",e)
        const {name,value} = e.target;

      this.setState({
          ...this.state,
          [name]:value
      }) 
  }

  handleInputSelect=(e)=>{
      this.setState({hotelName:e.target.value})
      console.log("handle",e.target.value)
  }

/** */
formValidation = () =>{
  const{roomType,description,roomPrice,noOfBeds,image1Url,image2Url,image3Url}=this.state;
  let isValid = true;
  const errorType ={};
  const errorPrice = {};
  const errorDes = {};
  const errorNo={};
  const errorImgUrl1={};
  const errorImgUrl2={};
  const errorImgUrl3={}

  if(!roomType.match(/^[a-z A-Z]*$/)){
    errorType["roomTypeInput"] = "Room Type must contain characters only!";
      isValid=false;
  }

  if(!roomPrice){
    errorPrice["roomPriceInput"]="Room Price Field is EMPTY!";
      isValid=false;
  }

  if(!noOfBeds.match(/^[0-9]*$/)){
    errorNo["noOfBeds"] = "Can contain numbers Only!";
      isValid=false;
  }

  if(!image1Url){
    errorImgUrl1["image1UrlInput"] = "URL Field is EMPTY!";
      isValid=false;
  }

  if(!image2Url){
    errorImgUrl2["image1UrlInputPattern"] = "URL Field is EMPTY!";
      isValid=false;
  }

  if(!description){
    errorDes["descriptionInput"] = "description Field is EMPTY!";
      isValid=false;
  }

  if(!image3Url){
    errorImgUrl3["image1UrlInput"] = "URL Field is EMPTY!";
    isValid=false;
}

  

  this.setState({errorType:errorType,errorPrice:errorPrice,errorNo:errorNo,errorImgUrl1:errorImgUrl1,errorImgUrl2:errorImgUrl2,errorImgUrl3:errorImgUrl3,errorDes:errorDes});
  return isValid;
}

/** */

  onSubmit=(e)=>{
    e.preventDefault();

    /** */
   
    const isValid = this.formValidation();
    if(isValid){
    const{roomType,hotelName,description,roomPrice,noOfBeds,image1Url,image2Url,image3Url}= this.state;

    const data={
        roomType:roomType,
        hotelName:hotelName,
        description:description,
        roomPrice:roomPrice,
        noOfBeds:noOfBeds,
        image1Url:image1Url,
        image2Url:image2Url,
        image3Url:image3Url
    }
        
    console.log(data);

    axios.post("http://localhost:8000/api/add/rooms",data).then((res)=>{
      if(res.data.success){
        alert("Room added Successfully!")
        window.location.href='/view/rooms';
        this.setState(
          {
            roomType:"",
            hotelName:"",
            description:"",
            roomPrice:"",
            noOfBeds:"",
            image1Url:"",
            image2Url:"",
            image3Url:""
          }
        )
      }
    })

    
    }
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


  
  render() {
    const{errorType}=this.state;
    const{errorPrice}=this.state;
    const{errorNo}=this.state;
    const{errorImgUrl1}=this.state;
    const{errorImgUrl2}=this.state;
    const{errorImgUrl3}=this.state;
    const{errorDes}=this.state;
    
    return (
        <>
            <AdminNavbar/>
        
      <div className='container'>
      <div style={{width:'100%',borderRadius:'0px',backgroundColor:'#E9EAF1'}}>
      <div className='col-md-8 mt-4 mx-auto'>
      <br/>
      <button className="btn btn-danger" style={{width:'160px'}}>
        <a href="/view/rooms" style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>
          View Rooms
        </a></button><br/><br/>

        <h1 className='h3 mb-3 font-weight-normal'> ADD A NEW ROOM TO THE HOTEL</h1>
        <form className='needs-validation' noValidate onSubmit={this.onSubmit}>
          <div className='form-group' style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>ROOM TYPE</label>
            <input 
              type="text"
              className="form-control"
              name="roomType"
              placeholder="Enter hotel code"
              value={this.state.roomType}
              onChange={this.handleInputChange}
            />
            {Object.keys(errorType).map((key)=>{
             return <div style={{color:'red'}} key={key}>{errorType[key]}</div> })}
          </div>

          <div className='form-group' style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>HOTEL NAME</label>
            <br/>
            <select id="hotelName" onChange={this.handleInputSelect} value={this.state.hotelName} className="btn btn-secondary dropdown-toggle">
                <option selected> Choose...</option>
                {
                    this.state.hotels.map((object) => (
                       
                        <option>{object.hotelName}</option>
                    ))

                }

            </select>
         
          </div> 

          <div className='form-group' style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>ROOM DESCRIPTION</label>
            <textarea 
              type="text"
              className="form-control"
              name="description"
              placeholder="Enter hotel description"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
            {Object.keys(errorDes).map((key)=>{
             return <div style={{color:'red'}} key={key}>{errorDes[key]}</div> })}
          </div>

          <div className='form-group' style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>ROOM PRICE</label>
            <input type="text" className="form-control" name="roomPrice" placeholder="Enter hotel roomPrice" value={this.state.roomPrice} onChange={this.handleInputChange}/>
            {Object.keys(errorPrice).map((key)=>{
              return <div style={{color:'red'}} key={key}>{errorPrice[key]}</div> })}
          </div>

          <div className='form-group' style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>NUMBER OF BEDS</label>
            <input 
              type="text"
              className="form-control"
              name="noOfBeds"
              placeholder="Enter hotel noOfBeds"
              value={this.state.noOfBeds}
              onChange={this.handleInputChange}
            />
            {Object.keys(errorNo).map((key)=>{
              return <div style={{color:'red'}} key={key}>{errorNo[key]}</div> })}
          </div>

          <div className='form-group' style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>ROOM IMAGE 1</label>
            <input 
              type="text"
              className="form-control"
              name="image1Url"
              placeholder="Enter hotel image url"
              value={this.state.image1Url}
              onChange={this.handleInputChange}
            />
            {Object.keys(errorImgUrl1).map((key)=>{
              return <div style={{color:'red'}} key={key}>{errorImgUrl1[key]}</div> })}
          </div>

          <div className='form-group' style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>ROOM IMAGE 2</label>
            <input 
              type="text"
              className="form-control"
              name="image2Url"
              placeholder="Enter hotel image url"
              value={this.state.image2Url}
              onChange={this.handleInputChange}
            />
            {Object.keys(errorImgUrl2).map((key)=>{
              return <div style={{color:'red'}} key={key}>{errorImgUrl2[key]}</div> })}
          </div>

          <div className='form-group' style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>ROOM IMAGE 3</label>
            <input 
              type="text"
              className="form-control"
              name="image3Url"
              placeholder="Enter hotel image url"
              value={this.state.image3Url}
              onChange={this.handleInputChange}
            />
            {Object.keys(errorImgUrl3).map((key)=>{
              return <div style={{color:'red'}} key={key}>{errorImgUrl3[key]}</div> })}
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
      </>
    )
    
  }
  
}
