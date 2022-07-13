import React, { Component } from 'react';
import emailjs from "emailjs-com";

class emailService extends Component {

    constructor(props) {
        super(props)

        this.state = {

            form:{
                
            name: 'sukitha',
            email: 'sukithadhamsara@gmail.com',
            message: 'hiiiiiiixxxxxxxxx'

            },

           

        }

        this.onSubmits = this.onSubmits.bind(this);
    }

    onSubmits(e) {

        e.preventDefault();
        console.log("hiiii")
     

        emailjs.send('service_235yth9',  'template_bogl1qi',this.state.form,'5cBXRbMJXvJdnDsz1').then(res=>{
            console.log("res",res)
        }).catch((err)=>{
            console.log(err)
        })

    }


    render() {
        return (
            <div>

                <button className='btn btn-primary' onClick={this.onSubmits}>payement</button>

            </div>
        );
    }
}

export default emailService;