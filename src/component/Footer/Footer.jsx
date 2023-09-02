import React from 'react'
import "./footer.css"
import { AiFillLinkedin, AiOutlineArrowRight, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { BsArrowUpRight } from 'react-icons/bs'

const Footer = () => {
  return (
    <div style={{height:"fit-content",width:"100%",backgroundColor:"#333"}}>
    <div className='footer'>
      <div className="footer_1">
        <div className="footer_1_child">
        <h2>Subscribe to Aesop communications</h2> <br />
        <div className='input-container'>
            <input type="text" placeholder='Email address' />
            <p> <AiOutlineArrowRight /> </p>
        </div>   <br />
        <div className='input-container_1'>
            <input type="checkbox" />
            <p> Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our privacy policy.  </p>
        </div>  

        </div>
        <div className="footer_1_child">
            <h2>Sustainability</h2> <br />
            <p>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
        </div>
      </div>
      <div className="footer_2">
      <div className="footer_2_child">
            <h2>Orders and support</h2> <br />
            <p>Contact Us <BsArrowUpRight/> </p>
            <p>FAQs <BsArrowUpRight/> </p>
            <p>Shipping <BsArrowUpRight/> </p>
            <p>Returns <BsArrowUpRight/> </p>
            <p>Order history <BsArrowUpRight/> </p>
            <p>Terms and conditions <BsArrowUpRight/> </p>
           
        </div>
      <div className="footer_2_child">
            <h2>Services</h2> <br />
            <p>Live assistance</p>
            <p>Corporate gifts</p>
            <p>Facial Appointments</p>
            <p>Click and collect</p>
            <p>Click and Collect</p>
            <p>video Consultation</p> 
        </div>
      <div className="footer_2_child">
            <h2>Location preference</h2> <br />
            <p>Shipping: <a href="#">Hong Kong SAR. China</a></p>
            <p>Language: <a href="#">English <br /> 繁體中文 </a></p>
           
        </div>
        <div className="footer_2_child">
            <h2>About</h2> <br />
            <p>Our Story</p>
            <p>Foundation</p>
            <p>Careers</p>
            <p>Privacy policy</p>
            <p>Accessibility</p>
            <p>Cookie policy</p>
          
        </div>
        <div className="footer_2_child">
            <h2>Social media</h2> <br />
            <p>Instagram <BsArrowUpRight/> </p>
            <p>Twitter <BsArrowUpRight/> </p>
            <p>Linkdin <BsArrowUpRight/> </p>
            <p>Wechat <BsArrowUpRight/> </p>
            <p>Weibo <BsArrowUpRight/> </p>
        </div>
      </div>
    </div>
    <div className='footer-bottom' style={{color:"white",fontSize:"1.5rem"}}>
    <div>
    &copy; Aesop
    </div>
      <div className='svg'>
        <AiOutlineInstagram/>
        <AiOutlineTwitter/>
        <AiFillLinkedin/>
      </div>
    </div>
    </div>
  )
}

export default Footer
