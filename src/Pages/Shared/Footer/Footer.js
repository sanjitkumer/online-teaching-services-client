import React from 'react';
import logo from '../../../assets/logo.jpg'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-slate-900 text-white">
        <div>
          <img className='h-30 w-20 rounded-xl' src={logo} alt="" />
          <p>Online Teaching Service<br/>Providing reliable tech since 2012</p>
        </div> 
        <div>
          <span className="footer-title">Services</span> 
          <a href="/" className="link link-hover">Principal Of Accounting</a> 
          <a href="/" className="link link-hover">Financial Management</a> 
          <a href="/" className="link link-hover">spoken English</a> 
          <a href="/" className="link link-hover">General Science</a>
        </div> 
        <div>
          <span className="footer-title">Details</span> 
          <a href="/" className="link link-hover">About us</a> 
          <a href="/" className="link link-hover">Contact</a> 
          <a href="/" className="link link-hover">Skill</a> 
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <a href="/" className="link link-hover">Terms of use</a> 
          <a href="/" className="link link-hover">Privacy policy</a> 
          <a href="/" className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    );
};

export default Footer;