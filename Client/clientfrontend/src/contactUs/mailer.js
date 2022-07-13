import emailjs from 'emailjs-com'
import bg2 from '../images/bg2.png'
import bg1 from '../images/bg1.png'
import './mailer.css';
import ClientNavbar from '../ClientNavbar/clientNavbar';

const Mailer = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs
          .sendForm(
            "service_7u6rw04",
            'template_p4ppu2j',
            e.target,
            'G9cD1_aalAd_mSUzy'
          )
          .then((res) => {
            console.log(res);
            alert('Message Sent Successfully!');
            window.location.reload();
          })
          .catch((err) => console.log(err));
      }

      return (
        <div
            className="mainback"
            style={{
              backgroundImage: `url(${bg2})`,
              backgroundAttachment: "fixed",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              color: "#fff",
            }}>
            <ClientNavbar />
      <div
        className="container"
        style={{ marginTop: '20px', width: '50%', height:'550px', backgroundColor:'rgba(0, 0, 0, 0.6)',borderRadius:'none',border:'none',borderColor:'none',
          
          backgroundSize: "cover"}}>
        <h1 style={{ marginTop: '25px', textAlign: 'center',color:'white', fontWeight:'bolder' }}>CONTACT</h1>
        <h2 style={{fontWeight:'bold',fontSize:'18px',textAlign: 'center',color:'#D3D3D3' }}>GOT A CLARIFICATION, NEED SOME HELP OR GOT SOMETHING TO SAY?<br/> WE LOOK FORWARD TO HEARING FROM YOU.</h2>
        <form
          className="row"
          style={{ margin: '25px 85px 75px 100px' }}
          onSubmit={sendEmail}
        >
        {/* form */}
        <label style={{color:'white',fontSize:'20px'}}>Name</label>
        <input type="text" name="name" className="form-control" style={{width:'100%',backgroundColor:'rgba(171, 183, 183, 0.5)',borderRadius:'none',border:'none',color:'white'}} required/>

        <label style={{color:'white',fontSize:'20px'}}>Email</label>
        <input type="email" name="user_email" className="form-control" style={{width:'100%',backgroundColor:'rgba(171, 183, 183, 0.5)',borderRadius:'10px',border:'none',color:'white'}} required/>

        <label style={{color:'white',fontSize:'20px'}}>Message</label>
        <textarea name="message" rows="4" className="form-control" style={{width:'100%',backgroundColor:'rgba(171, 183, 183, 0.5)',borderRadius:'10px',border:'none',color:'white'}} required/>

        <button
          className="submitInput"
          type="submit"
          value="Send Message"
          style={{ marginTop: '35px',fontSize:'20px',height:'50px',borderRadius:'30px',background:'rgba(207, 0, 15, 0.6)',color:'white',border:'none',fontWeight:'bold'}}>Send message</button>
      </form>
      </div>
      <br/>
      </div>
  );
};

export default Mailer;
