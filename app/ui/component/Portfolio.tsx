import Image from 'next/image';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Portfolio() {
  const orangeColor = '#fd7e14';
  const mainBg = '#111'; // Dark background matching your theme

  const projects = [
    {
      id: 1,
      name: "AI Outreach Assistant",
      imageUrl: "/images/portfolio/outreach-asistant.vercel.app_.png",
      link: "https://outreach-asistant.vercel.app/"
    },
    {
      id: 2,
      name: "GobalCare Health",
      imageUrl: "/images/portfolio/home.webp",
      link: "https://health.venturevector.in/"
    },
    {
      id: 3,
      name: "Rama Watch",
      imageUrl: "/images/portfolio/ramawatch.co_.webp",
      link: "https://ramawatch.co"
    },
    {
      id: 4,
      name: "Mahaupchar Testing",
      imageUrl: "/images/portfolio/testing.venturevector.in_1.png",
      link: "https://testing.venturevector.in/"
    },
    {
      id: 5,
      name: "CRM",
      imageUrl: "/images/portfolio/crm.png",
      link: "https://crm.venturevector.in/"
    },
    {
      id: 6,
      name: "Alt Mobility",
      imageUrl: "/images/portfolio/portfolio4.webp",
      link: "https://alt-mobility.venturevector.in/"
    },
  ];

  return (
    <section id='portfolio' className='font-lufga' style={{ color: 'white', padding: '80px 0' }}>
      <Container>
        
        {/* 1. HEADER */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 mb-2 animate-on-scroll animate__backInUp" style={{ color: orangeColor }}>Portfolio</h2>
          <p className="text-secondary small">
            These are the projects i have completed independently and as a part of my work experience
          </p>
        </div>

        {/* 2. MAIN CONTENT SPLIT */}
        <Row className="align-items-center mb-5">
            {projects.map((project) => (
                <Col md={4} sm={6} className="mb-4" key={project.id}>
                {/* The relative container for the hover effect */}
                <div className="portfolio-wrapper shadow-sm rounded" style={{ position: 'relative', width: '100%', height: '400px' }}>
                    <Image 
                        src={project.imageUrl} 
                        alt={project.name} 
                        className="img-fluid portfolio-image" 
                        fill // 2. Add the fill prop instead of width/height
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* The overlay that appears on hover */}
                    <div className="portfolio-overlay">
                    <div className="portfolio-content">
                        <h4 className="text-white fw-bold mb-3">{project.name}</h4>
                        <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-light px-4 py-2 fw-semibold"
                        >
                        Visit Site
                        </a>
                    </div>
                    </div>
                </div>
                </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
}