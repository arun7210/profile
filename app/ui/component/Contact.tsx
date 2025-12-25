"use client";

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

export default function Contact() {
  const mainBg = '#111';
  const inputBg = '#222';
  const orangeColor = '#fd7e14';

  // 1. State for Form Data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: ''
  });

  // 2. State for Status (Loading/Success/Error)
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  // Handle Input Changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    // Map controlId="formName" -> "name"
    const key = id.replace('form', '').toLowerCase(); 
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        console.log(await res.json());
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', details: '' }); // Reset form
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const darkInputStyle = {
    backgroundColor: inputBg,
    border: '1px solid #333',
    color: '#fff',
    borderRadius: '8px',
    padding: '12px 15px',
    boxShadow: 'none'
  };

  return (
    <section className='font-lufga' style={{ color: 'white', padding: '80px 0' }}>
      <Container style={{ maxWidth: '900px' }}>
        
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 mb-3">Contact me</h2>
          <p className="text-secondary">Cultivating Connections: Reach Out And Connect With Me</p>
        </div>

        {/* 3. Status Alerts */}
        {status === 'success' && (
          <Alert variant="success" className="text-center">Message sent successfully!</Alert>
        )}
        {status === 'error' && (
          <Alert variant="danger" className="text-center">Something went wrong. Please try again.</Alert>
        )}

        {/* Connect onSubmit to our function */}
        <Form onSubmit={handleSubmit}>
          <Row className="g-4">
            <Col md={6}>
              <Form.Group controlId="formName">
                <Form.Control 
                  type="text" 
                  placeholder="Name" 
                  required
                  style={darkInputStyle}
                  className="dark-placeholder"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formEmail">
                <Form.Control 
                  type="email" 
                  placeholder="Email" 
                  required
                  style={darkInputStyle} 
                  className="dark-placeholder"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group controlId="formPhone">
                <Form.Control 
                  type="tel" 
                  placeholder="Phone Number" 
                  style={darkInputStyle}
                  className="dark-placeholder" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group controlId="formDetails">
                <Form.Control 
                  as="textarea" 
                  rows={6} 
                  required
                  placeholder="Project Details..." 
                  style={{ ...darkInputStyle, resize: 'none' }} 
                  className="dark-placeholder"
                  value={formData.details}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col md={12} className="text-end mt-4">
              <Button 
                type="submit"
                variant="outline-light" 
                size="lg" 
                disabled={status === 'sending'}
                className="px-5 rounded-3"
                style={{ borderWidth: '1px', fontSize: '1rem', transition: 'all 0.3s ease' }}
                onMouseEnter={(e) => {
                    if(status !== 'sending') {
                        e.target.style.backgroundColor = orangeColor;
                        e.target.style.borderColor = orangeColor;
                    }
                }}
                onMouseLeave={(e) => {
                    if(status !== 'sending') {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.borderColor = '#f8f9fa';
                    }
                }}
              >
                {status === 'sending' ? 'Sending...' : 'Send'}
              </Button>
            </Col>

          </Row>
        </Form>
      </Container>
      
      <style jsx global>{`
        .dark-placeholder::placeholder { color: #888 !important; opacity: 1; }
        .form-control:focus {
           background-color: #222 !important; color: white !important; border-color: ${orangeColor} !important;
        }
      `}</style>
    </section>
  );
}