import '../assets/styles/contactUs.scss'

import contactImg from '../assets/images/contact1.png'
import phone from '../assets/images/phone.png'
import music from '../assets/images/music.png'
import mail from '../assets/images/mail.png'



const ContactUs = () => {
  return (
   <section className='contact'>
      <div className="contact-nav">
          <div className="nav-text">          
            <h1>Contact Us</h1>
            <ul className="list">
              <li>Home</li>
              <li>contact Us</li>
            </ul>
          </div>
      </div>
      <div className="wrapper">
          <div className="img">
            <img src={contactImg} alt="" />
          </div>
      </div>
      <div className="question">
        <div className="question-text">
        <p>Get in touch with any questions</p>
        </div>
        <div className="question-contact">
            <div className="phone">
                <div className="img">
                <img src={phone} alt=""/>
                </div>
                <p>Phone</p>
                <h6>038921783</h6>
            </div>
            <div className="mail">
                <div className="im">
                <img src={mail} alt=""/>
                </div>
                <p>
                Email
                </p>
                <h6>
                a@recipimania.com
                </h6>
            </div>
            <div className="music">
                <div className="img">
                <img src={music} alt=""/>
                </div>
                <p>
                Support
                </p>
                <h6>
                04u3i372
                </h6>
            </div>
        </div>
      </div>
   </section>
  )
}

export default ContactUs