import React, { Component , useState, useEffect} from 'react';
import AdminNavbar from '../AdminNavbar/adminNavbar';
import Sidebar from '../SideBar/Sidebar';
import bg2 from '../../images/bg1.png'
function Home() {

    

    return (
        <div>
            <AdminNavbar/>
            <Sidebar />
            <div style={{marginLeft:'500px'}}>

                {/* <img src={bg2} alt="bgImage2" style={{width:'auto',height:'600px',marginRight:'100px',marginTop:'-500px'}}></img> */}
                <div>

                <form method="">
                    <div className="row">
                        <div >

                        </div>

                        <div style={{marginTop:'-600px',marginLeft:'-100px',
                            
                                         backgroundImage: `url(${bg2})`,
                                         backgroundSize: "cover",
                                         background:"rgba(0,0,0,0.6)",
                                         height:'600px',
                        }}>
                       
                            <div className="profile-head">

                                <br/>
                                <div className="box"
                                     style={{

                                         
                                     }}>
                                     <br/>
                                <h2 className="h2" style={{fontWeight:"bolder",color:'white',textAlign:'center'}}>Inside Shangri-La Circle</h2>
                                <p className="para" style={{fontWeight:"bold"}}>

                                     <br/>

                                    <br/>
                                    A personal tropical sanctuary that is perfect for escaping the city, 
                                    Shangri-La Circle overlooks the Indian Ocean in the heart of the business district with 
                                    direct access to the most extensive accommodations in Sri Lanka, The hotel offers the finest 
                                    accommodation in Colombo, an exciting new offers 
                                    and social 
                                    scene and the largest and extensive hotel facilities.
                                    <hr/>

                                    </p>
                                </div>
                                     <br/>
                                <div className="box1">
                                    <div>
                                    <h1 style={{width:'100%',color:'#B22222',fontWeight:'bold'}}>OUR VISION</h1>
                                    <p className="box1p1">“TO BECOME THE MOST RESPECTED & ADMIRED TOTAL ACCOMMODATION<br/>
                                        SOLUTIONS PROVIDER IN THE COUNTRY”</p>
                                    </div>
                                    <br/>
                                <div className="verticalLine">
                                    <div className="divM">
                                        <h1 className="box1h1">MISSION</h1>

                                        <p className="box1p2">“TO CREATE DELIGHTED LIFE-TIME CUSTOMERS & <br/> LIFETIME DELIGHTED DEALERS"</p>

                                    </div>
                                </div>



                            </div>
                        </div>


                        </div>
                    </div>
                    
                </form>
            </div>
           
        </div>
        </div>
    )
}

export default Home;