"use client";

import Link from 'next/link';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';
// Ensure Bootstrap Icons are imported in your layout or index file
// import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
  const mainBg = '#111'; // Dark background
  const orangeColor = '#fd7e14'; 

  return (
    <footer className='font-lufga' style={{ backgroundColor: mainBg, color: 'white', padding: '60px 0 30px 0' }}>
      <Container className="text-center">
        
        {/* 1. LOGO */}
        <div className="mb-4">
          <h2 className="fw-bold display-6">
            <Link className="navbar-brand" href="/">
                {/* <Image src="/images/logo.png" width="80px" alt="" /> */}
                <span className=" fs-1 fw-bold" style={{ color: orangeColor }}>&lt;/&gt;</span>
            </Link>
          </h2>
        </div>

        {/* 2. NAVIGATION LINKS */}
        <div className="d-flex justify-content-center gap-4 flex-wrap mb-5">
          {['Home', 'Services', 'About me', 'Portfolio', 'Contact me'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '')}`} 
              className="text-white text-decoration-none hover-orange"
              style={{ fontSize: '1.1rem' }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* 3. SOCIAL ICONS */}
        <div className="d-flex justify-content-center gap-3 mb-5">
            <a 
              href="#" 
              className="d-flex align-items-center justify-content-center rounded-circle border border-secondary text-white text-decoration-none transition-all"
              style={{ width: '45px', height: '45px' }}
              // Inline hover logic or use the CSS class below
            >
              <FaInstagram />
            </a>
            <a 
              href="#" 
              className="d-flex align-items-center justify-content-center rounded-circle border border-secondary text-white text-decoration-none transition-all"
              style={{ width: '45px', height: '45px' }}
              // Inline hover logic or use the CSS class below
            >
              <FaGithub />
            </a>
            <a 
              href="#" 
              className="d-flex align-items-center justify-content-center rounded-circle border border-secondary text-white text-decoration-none transition-all"
              style={{ width: '45px', height: '45px' }}
              // Inline hover logic or use the CSS class below
            >
              <FaLinkedin />
            </a>
        </div>

        {/* 4. CONTACT INFO */}
        <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap mb-5">
          {/* Email */}
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-envelope fs-5" style={{ color: '#fff' }}></i>
            <span style={{ fontSize: '1rem' }}>karun26282@gmail.com</span>
          </div>
          
          {/* Phone */}
          {/* <div className="d-flex align-items-center gap-2">
            <i className="bi bi-telephone fs-5" style={{ color: '#fff' }}></i>
            <span style={{ fontSize: '1rem' }}></span>
          </div> */}
        </div>

        {/* 5. DIVIDER & COPYRIGHT */}
        <div className="border-top border-secondary pt-4 mt-4 opacity-50">
          <p className="mb-0 text-secondary small">
            Designed by <span className="text-white">@Arun Kumar</span> Software Developer
          </p>
        </div>

      </Container>

      {/* CSS for Hover Effects */}
      <style jsx>{`
        .hover-orange:hover {
          color: ${orangeColor} !important;
          transition: color 0.3s ease;
        }
        .rounded-circle:hover {
          background-color: ${orangeColor};
          border-color: ${orangeColor} !important;
          transform: translateY(-3px);
          transition: all 0.3s ease;
        }
      `}</style>
    </footer>
  );
}