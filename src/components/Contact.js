import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";


const Contact = () => {
  return (
    <div id="contact">
    <div className="container">
        <div className="row">
            <div className="contact-left">
                <h1 sub-title>Contact Me</h1>
                <p> <MdEmail />   amanverma7124@gmail.com</p>
                <p><FaPhoneSquareAlt />   9044051384</p>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/aman-verma-763a09240/"><FaLinkedin /></a>
                    <a href=""><FaInstagramSquare /></a>
                    <a href=""><FaFacebookSquare /></a>
                </div>
                <a href="./cv.jpeg" download className="btn btn2">Download Cv</a>
            </div>
            <div className="contact-right">
                <form>
                    <input type="text" name="Name" placeholder="Your Name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <textarea name="Message" rows="6" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn2">Submit</button>
                </form>
            <div/>
        </div>
    </div>
    <div className="copyright">
    <p>copyright &copy; mady by Aman Verma <i class="fa-solid fa-heart"></i> </p>
    </div>
</div>
</div>
)
}

export default Contact;
