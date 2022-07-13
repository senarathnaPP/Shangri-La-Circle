import React, { useState ,useEffect} from 'react';
import {useHistory } from 'react-router-dom';
import AdminNavbar from '../AdminNavbar/adminNavbar';
import bg2 from '../../images/bg2.png'

import './login.css'

const Login = () =>{
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('http://localhost:8000/api/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify({
                email,
                password
            })
        });

        const data = await res.json();
        if (res.status === 400 || !data) {
            window.alert("Invalid credentials")
            window.alert("Login unsuccessful!")
        } else {

            console.log(data)
            window.alert("Login successful!")
            history.push("/home")
            document.location.reload()
            sessionStorage.setItem('LogStatus', true);
            sessionStorage.setItem('Loguser', data.data.name);
            sessionStorage.setItem('LogEmail', data.data.email);


        }
}

useEffect(() => {


    sessionStorage.setItem('LogStatus', false);

});

return (
    <div 
        style={{ 
        backgroundImage: `url(${bg2})`,
        //backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width:'auto',
        height:'680px',
        
    }}>
    <AdminNavbar/>
        <div>

            <div className='container' style={{
            
               
        }}>

                <div className='card' style={{ marginTop: '100px', backgroundColor: 'rgba(9, 24, 75, 0.8)', width:'750px',marginLeft:'200px' }}>

                    <div className='login' style={{marginLeft:'-150px'}}>

                        <h1 className='h1'>Login To Your Account</h1>

                    </div>
                    <br /><br />
                    <div class="mt-8" style={{ marginTop: '-60px' }}>
                        <form method="POST" action="/home" autoComplete="off" className='login-wrapper'>
                            <div class="flex flex-col mb-2">
                                <div class="flex relative ">

                                    <label style={{ color: "#D7D9DF ", fontSize: "20px", fontWeight:'bold' }}>Email</label>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" id="sign-in-email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" style={{ backgroundColor: "rgba(180, 181, 187, 0.5)", color: "white", border: 'none' }} />
                                </div>
                            </div>
                            <div class="flex flex-col mb-6">
                                <div class="flex relative ">
                                    <label style={{ color: "#D7D9DF ", fontSize: "20px" , fontWeight:'bold'}}>Password</label>
                                    &nbsp;&nbsp; <input type="password" id="sign-in-email" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your password" style={{ backgroundColor: "rgba(180, 181, 187, 0.5)", color: "white", border: 'none' }} />
                                </div>
                            </div>
                            <br />
                            <div className="login-btn">
                                <button className= "btn btn-secondary" type="submit" onClick={loginUser} >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                    <br />
                   
                </div>
            </div>
        </div>
    </div>
)
}



export default Login;