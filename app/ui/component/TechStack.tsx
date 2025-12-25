"use client";

import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';

// --- DATA: Full List ---
const techData = [
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'CodeIgniter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'React JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'jQuery', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg' },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'ChatGPT', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
  { name: 'Gemini', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg' },
];

// Split data into two rows
const row1 = techData.slice(0, 10);
const row2 = techData.slice(10, 20);

// Shared Config for Continuous Sliding
const sliderSettings = {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true, // Infinite loop
  speed: 5000, // Duration of transition (slower = smoother)
  allowTouchMove: false, // Prevent user swiping (optional, keeps it like a ticker)
  autoplay: {
    delay: 0, // No pause between slides
    disableOnInteraction: false, // Keep moving even if touched
  },
  modules: [Autoplay],
  breakpoints: {
    576: { slidesPerView: 4 },
    768: { slidesPerView: 5 },
    992: { slidesPerView: 6 },
    1200: { slidesPerView: 7 },
  }
};

export default function TechStack() {
  const mainBg = '#111';
  const cardBg = '#1a1a1a';
  const orangeColor = '#fd7e14';

  return (
    <section className='font-lufga' style={{  color: 'white', padding: '80px 0' }}>
      
      {/* 1. Add this Style Tag for Linear Movement */}
      <style jsx global>{`
        .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>

      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 mb-2" style={{ color: orangeColor }}>Technology Stack</h2>
          <p className="text-secondary">Tools and frameworks I use</p>
        </div>

        {/* --- ROW 1: Moving Normal (Left) --- */}
        <div className="mb-4">
          <Swiper {...sliderSettings}>
            {row1.map((tech, index) => (
              <SwiperSlide key={index} style={{ width: 'auto' }}>
                <TechCard tech={tech} bg={cardBg} highlight={orangeColor} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* --- ROW 2: Moving Reverse (Right) --- */}
        <div>
          <Swiper 
            {...sliderSettings} 
            dir="rtl" // Right to Left direction
          >
            {row2.map((tech, index) => (
              <SwiperSlide key={index} style={{ width: 'auto' }}>
                <TechCard tech={tech} bg={cardBg} highlight={orangeColor} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </Container>
    </section>
  );
}

// Helper Component for the Card
function TechCard({ tech, bg, highlight }) {
  return (
    <div 
      className="d-flex flex-column align-items-center justify-content-center p-3 rounded-3 tech-card"
      style={{ 
        backgroundColor: bg, 
        border: '1px solid #333',
        height: '120px',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = highlight;
        e.currentTarget.style.transform = 'translateY(-5px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#333';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
       <Image 
          src={tech.icon} 
          alt={tech.name} 
          style={{ width: '40px', height: '40px', objectFit: 'contain', marginBottom: '10px' }} 
          width={40}
          height={40}
       />
       <p className="mb-0 fw-bold small text-white text-center" style={{fontSize: '0.8rem'}}>{tech.name}</p>
    </div>
  );
}