import React from 'react';
import { FaLinkedin, FaInstagramSquare, FaPhoneSquareAlt, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1>Contact Me</h1>
            <p><MdEmail /> amanverma7124@gmail.com</p>
            <p><FaPhoneSquareAlt /> 9044051384</p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/aman-verma-763a09240/"><FaLinkedin /></a>
              <a href="https://www.instagram.com/amanverma71242022/?hl=en"><FaInstagramSquare /></a>
              <a href="https://github.com/Aman4580"><FaGithub /></a>
            </div>
            <a href="./path/to/resume.pdf" download className="btn btn2">Download CV</a>
          </div>
          <div className="contact-right">
            <form>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="Message" rows="6" placeholder="Your Message" required></textarea>
              <button type="submit" className="btn btn2">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright &copy; made by Aman Verma <i className="fa-solid fa-heart"></i></p>
      </div>
    </div>
  );
};

export default Contact;
