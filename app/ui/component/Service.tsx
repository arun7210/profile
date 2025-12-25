import Image from 'next/image';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Services() {
  // Data array to make it easy to add more services later
  const services = [
    { title: 'Website Development', image: '/images/vectors/web-development.svg', desc: 'U provide fast, secure and responsive websites which run smoothly on all modern devices' },
    { title: 'SPA Website', image: '/images/vectors/spa.svg', desc: 'I make secure and fast single page application (SPA) using latest technologies React.Js/Vue.Js' },
    { title: 'CMS Development', image: '/images/vectors/cms.svg', desc: 'I provide good CMS website for easy understanding which helps you to manage contents on your site' },
    { title: 'Ecommerce Development', image: '/images/vectors/e-commerce.svg', desc: 'Start your online store and sell your products world wide using ecommerce technologies.' },
    { title: 'CRM Development', image: '/images/vectors/crm.svg', desc: 'I can make you a custom CRM system to manage your business leads and customer relationships' },
    { title: 'Website Auditing', image: '/images/vectors/audit.svg', desc: 'Make your website secure from hackers and fix any production bugs or add new features on your website.' },   
  ];

  const orangeColor = '#fd7e14';
  const darkCardBg = '#1a1a1a'; // Slightly lighter than main bg
  const mainBg = '#111';

  return (
    <section id='service' className='font-lufga' style={{ color: 'white', padding: '80px 0' }}>
        <Container>
            
            {/* 1. HEADER SECTION */}
            <div className="text-center mb-5">
                <h2 className="fw-bold display-5 mb-3">Services</h2>
                <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    We are a team of experts in Website Development, CRM/CMS development and website security.
                </p>
            </div>

            {/* 2. CARDS GRID */}
            <Row className="g-4 justify-content-center">
                {services.map((service, index) => (
                    <Col key={index} md={6} lg={4}>
                        <div 
                            className="p-5 rounded-4 text-center h-100 transition-hover"
                            style={{ 
                                backgroundColor: darkCardBg,
                                transition: 'transform 0.3s ease' 
                            }}
                        >
                            {/* Icon */}
                            <div className="mb-4">
                                <Image
                                    src={service.image} 
                                    alt={service.title}
                                    width={150}
                                    height={150}
                                />
                            </div>
                            
                            {/* Title */}
                            <h4 className="fw-bold mb-3" style={{ color: orangeColor }}>
                                {service.title}
                            </h4>
                            
                            {/* Description */}
                            <p className="text-secondary mb-0" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                                {service.desc}
                            </p>
                        </div>
                    </Col>
                ))}
            </Row>

        </Container>
    </section>
  );
}