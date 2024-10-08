import axios from 'axios';
import './ContactUs.css'
import img1 from './ContactUs.jpg';
const ContactUs = () => {

    const submitData = (event)=>{
    
        event.preventDefault();
        const name  = document.getElementById('name').value;
        const email  = document.getElementById('email').value;
        const subject  = document.getElementById('subject').value;
        const message  = document.getElementById('message').value;
        document.getElementById('name').value=""
        document.getElementById('email').value=""
        document.getElementById('subject').value=""
        document.getElementById('message').value=""
        const jsonData = {
            name: name,
            email: email,
            subject:subject,
            message: message
        };


        axios.post('http://localhost:5000/api/contactus',jsonData).then(res=>{
            alert('Mail Send Successfully')
        })
        .catch(err=>{
            alert('Enter correct mail id')
        })
    }

    return <div id='contact-section' className="contact-us">
        
        <div className='contact-us-container-main'>
        <h1 className='contact-us-heading'>Get In Touch</h1>
            <div className="contact-us-container">
                <div className='contact-us-panel1'>
                    <img className='contact-us-image' src={img1} alt='error' />
                </div>
                <div className='contact-us-panel2'>
                    <form   className='contact-us-form'>
                        <input id='name' className='contact-us-form-input' placeholder='Name' type="text" required/>
                        <input id='email' className='contact-us-form-input' placeholder='Email' type="text" required/>
                        <input id='subject' className='contact-us-form-input' placeholder='Enter Subject' Name type="text" required/>
                        <textarea id='message' className='contact-us-form-text'placeholder='Enter Message' name="text"></textarea>
                        <button onClick={submitData}  className='contact-us-form-submit'>Submit</button>
                    </form>
                </div>

            </div>
        </div>

    </div>
}


export default ContactUs