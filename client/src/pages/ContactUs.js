import '../assets/styles/contactUs.scss'

import contactImg from '../assets/images/contact.png' 
import contactPhone from '../assets/images/contactPhone.png'
import contactMail from '../assets/images/contactMail.png'
import contactMusic from '../assets/images/contactMusic.png'
import StayWithUs from '../components/StayWithUs'

const ContactUs = () => {
  const questionList = [
    {
      id : 1,
      img : contactPhone,
      text  : 'Phone' ,
      subText : '038921783'
    },
    {
      id : 2,
      img : contactMail,
      text  : 'Email' ,
      subText : 'a@recipimania.com'
    },
    {
      id : 3,
      img : contactMusic,
      text  : 'Support' ,
      subText : '04u3i372'
    }
  ]
  return (
    <section className="contact">
      <div className="contact-nav">
        <div className="flex wrapper">
          <h1>Contact Us</h1>
          <ul className="list">
            <li>Home</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="wrapper">
        <div className="img">
          <img src={contactImg} alt="" />
        </div>
        <div className="question">
            <h3>Get in touch with any questions</h3>

            <div className="question-contain flex">
              {questionList.map(list => (
                <div className="question-item" key={list.id}>
                  <div className="img">
                    <img src={list.img} alt="" />
                  </div>
                  <h5>{list.text}</h5>
                  <span>{list.subText}</span>
              </div>
              ))}
            </div>
        </div>
        <div className="contact-form">
          <h3>Contact Form</h3>
          <form>
            <div className="form flex">
              <div className="inputs">
                <div className="input">
                <label htmlFor="">
                Name: *
                </label>
                <input type="text" />
                </div>

                <div className="input">
                <label htmlFor="">
                Email: *
                </label>
                <input type="text" />
                </div>

                <div className="input">
                <label htmlFor="">
                Phone: *
                </label>
                <input type="text" />
                </div>
              </div>
              <div className="textarea">
                <label htmlFor="">Message: *</label>
                <textarea></textarea>
              </div>
            </div>
            <div className="btn">
              <button>SEND MESSAGE</button>
            </div>
          </form>
        </div>
      </div>

      <StayWithUs/>
    </section>
  )
}

export default ContactUs