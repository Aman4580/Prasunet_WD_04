import React from 'react';
import { FaLinkedin, FaInstagramSquare, FaPhoneSquareAlt, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
// import resume from '../components/images/resume.jpg';
import resu from '../components/images/resu.pdf'
import { useState } from 'react';

const Contact = () => {



  const [formData, setFormData] = useState({
    Name: '',
    email: '',
    Message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${formData.Name}`);
    const body = encodeURIComponent(`Name: ${formData.Name}\nEmail: ${formData.email}\nMessage: ${formData.Message}`);
    const mailToLink = `mailto:amanverma7124@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailToLink;

    // Reset form fields
    setFormData({
      Name: '',
      email: '',
      Message: ''
    });
  }






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
            <a href={resu} download  className="btn btn2">Download CV</a>
          </div>
          <div className="contact-right">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="Name" 
          placeholder="Your Name" 
          value={formData.Name}
          onChange={handleChange}
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email}
          onChange={handleChange}
          required 
        />
        <textarea 
          name="Message" 
          rows="6" 
          placeholder="Your Message" 
          value={formData.Message}
          onChange={handleChange}
          required 
        />
        <button type="submit" className="btn btn2">Send Email</button>
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
