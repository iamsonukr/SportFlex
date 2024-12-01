import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Lovely Bands</h2>
          <p>Unleash your style with our trendy<br/> and versatile collection of wristbands. <br/>Elevate your look and make a <br/>statement with Lovely Bands.</p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@Lovelybands.com</p>
          <p>Phone: +123-456-7890</p>
          <p>Address: 123 Wristband Lane, Fashion City, FC 12345</p>
        </div>
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><img style={{width:'32px'}} src="social/facebook.png" alt="" /></a>
            <a href="#"><img style={{width:'35px'}} src="social/linked.png" alt="" /></a>
            {/* <a href="#"><img style={{width:'35px'}} src="social/x.png" alt="" /></a> */}
            <a href="#"><img style={{width:'36px'}} src="social/youtube.png" alt="" /></a>
           
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Lovely Bands | Designed by Your Name
      </div>
    </footer>
  );
}

export default Footer;
