import React from 'react'
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Tomato is a vibrant and contemporary restaurant that offers a delightful dining and delivery experience, blending fresh ingredients with innovative culinary techniques. Known for its diverse menu, it serves a range of dishes, from classic favorites to unique creations, all prepared with a focus on quality and taste. Whether you're looking for a casual meal or a special celebration, Tomato provides a welcoming atmosphere, perfect for any occasion.</p>
                <div className="footer-social-icons">
                    <a href="https://m.facebook.com/khushi.gar.9/" target="_blank" rel="noopener noreferrer">
                    <img src={assets.facebook_icon} alt="Facebook" />
                    </a>
                   <a href="https://x.com/GarKhushi53278" target="_blank" rel="noopener noreferrer">
                      <img src={assets.twitter_icon} alt="Twitter" />
                    </a>
                  <a href="https://www.linkedin.com/in/khushi-gar-54904a229/" target="_blank" rel="noopener noreferrer">
                     <img src={assets.linkedin_icon} alt="LinkedIn" />
                  </a>

                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                   <li><a href="/">Home</a></li>
                  <li><a href="/#footer">About Us</a></li>
                  <li><a href="/cart">Delivery</a></li>
                 <li><a href="/#footer">Privacy Policy</a></li>

                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-202-456-7890</li>
                    <li>conartish@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 @ Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
