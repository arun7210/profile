import Image from 'next/image';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function About() {
  const orangeColor = '#fd7e14';
  const mainBg = '#111'; // Dark background matching your theme

  return (
    <section id='about' className='font-lufga' style={{ backgroundColor: mainBg, color: 'white', padding: '80px 0' }}>
      <Container>
        
        {/* 1. HEADER */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 mb-2 animate-on-scroll animate__backInUp" style={{ color: orangeColor }}>About Me</h2>
          <p className="text-secondary small">
            Web Development And Web Security
          </p>
        </div>

        {/* 2. MAIN CONTENT SPLIT */}
        <Row className="align-items-center mb-5">
          
          {/* LEFT: Image */}
          <Col lg={5} className="mb-5 mb-lg-0 position-relative d-flex justify-content-center">
             {/* Background Blob Effect */}
             <div className="position-absolute top-50 start-50 translate-middle rounded-circle" 
                  style={{ 
                    width: '300px', 
                    height: '300px', 
                    backgroundColor: '#1a1a1a', 
                    zIndex: 0 
                  }}>
             </div>
             {/* Main Image */}
             <Image 
               src="/images/vectors/developer.png" 
               alt="About Profile" 
               className="img-fluid position-relative z-1" 
               style={{ maxHeight: '500px', filter: 'grayscale(30%) contrast(1.1)' }}
                width={400}
                height={500}
             />
          </Col>

          {/* RIGHT: Text Content */}
          <Col lg={7}>
            <div className="ps-lg-4">
               <p className="text-secondary" style={{ lineHeight: '1.8', fontSize: '0.95rem', textAlign: 'justify' }}>
                    I’m a software engineer who enjoys turning ideas into secure, scalable digital experiences. I work at the intersection of logic, creativity, and security—writing clean code, solving real problems, and building applications that are not only functional but resilient.
                    <br /><br />
                    Alongside development, I have hands-on experience in web security and penetration testing, which allows me to approach projects with a security-first mindset. I enjoy identifying vulnerabilities, understanding how systems can be exploited, and applying that knowledge to build stronger, safer applications.
                    <br /><br />
                    Whether it’s crafting responsive user interfaces, designing efficient backend systems, or analyzing potential attack surfaces, I approach each challenge with curiosity and persistence. I believe good software isn’t just about making things work—it’s about making them work securely, reliably, and at scale.
                    <br /><br />
                    I’m constantly learning and adapting in a field that never stands still. For me, development and security go hand in hand—both driven by problem-solving, attention to detail, and a commitment to building better systems every day.
               </p>

                <Button 
                    href='https://drive.google.com/file/d/1aG2uJR2C-oqs7vF3e2Yqqp8MCpt5l9DQ/view?usp=drive_link'
                    target="_blank"
                    className="mt-4 fw-bold px-4 py-2" 
                    style={{ backgroundColor: orangeColor, border: 'none', color: 'white' }}
                >
                    <i className="bi bi-download me-2"></i> Download CV
                </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}