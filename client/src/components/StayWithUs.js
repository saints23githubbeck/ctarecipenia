import { Link } from "react-router-dom"

import dribbleVector from "../assets/images/dribble_vector.png"
import dribblelogo from "../assets/images/dribble_logo.png"
import facebookVector from "../assets/images/facebook_vector.png"
import facebooklogo from "../assets/images/facebook_logo.png"
import instagramVector from "../assets/images/instagram_vector.png"
import instagramlogo from "../assets/images/instagram_logo.png"
import pininterestVector from "../assets/images/pininterest_vector.png"
import pininterestlogo from "../assets/images/pininterest_logo.png"
import snapchatVector from "../assets/images/snapchat_vector.png"
import snapchatlogo from "../assets/images/snapchat_logo.png"
import tVector from "../assets/images/t_vector.png"
import tlogo from "../assets/images/t_logo.png"
import twitterVector from "../assets/images/twitter_vector.png"
import twitterlogo from "../assets/images/twIcon.svg"
import behanceVector from "../assets/images/behance_vector.png"
import behancelogo from "../assets/images/behance_logo.png"
import whatsappVector from "../assets/images/whatsapp_vector.png"
import whatsapplogo from "../assets/images/whatsapp_logo.png"
import youtubeVector from "../assets/images/youtube_vector.png"
import youtubelogo from "../assets/images/youtube_logo.png"

const StayWithUs = () => {

  const socials = [
    {
      vector : facebookVector,
      logo: facebooklogo,
      link: ""
    },
    {
      vector : twitterVector,
      logo: twitterlogo,
      link: ""
    },
    {
      vector : instagramVector,
      logo: instagramlogo,
      link: ""
    },
    {
      vector : whatsappVector,
      logo: whatsapplogo,
      link: ""
    },
    {
      vector : youtubeVector,
      logo: youtubelogo,
      link: ""
    },
    {
      vector : snapchatVector,
      logo: snapchatlogo,
      link: ""
    },
    {
      vector : dribbleVector,
      logo: dribblelogo,
      link: ""
    },
    {
      vector : pininterestVector,
      logo: pininterestlogo,
      link: ""
    },
    {
      vector : tVector,
      logo: tlogo,
      link: ""
    },
    {
      vector : behanceVector,
      logo: behancelogo,
      link: ""
    }
  ]

  return (
    <div className="stay_with_us">
      <div className="wrapper">
        <div>
          <h3>Stay with us</h3>
          <p>Available on all your Favourites  Socials</p>
        </div>
        <div className='social_wrapper'>
          {
            socials.map((social, index) => (
              <Link key={index} to={`/${social.link}`}>
              <div 
              className='social' 
              style={{
                backgroundImage: `url('${social.vector}')`, 
                backgroundRepeat: "no-repeat"
                }}>
                <span><img src={social.logo} alt="logo" /></span>
              </div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default StayWithUs