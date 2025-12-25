"use client"

import Link from "next/link";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import OffCanvasMobileMenu from "./OffCanvas";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Header(){
    const orangeColor = '#fd7e14'; 

    const [show, setShow] = useState(false);

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const offset = window.scrollY;
    
          // Set the scroll threshold to make the button sticky
          if (offset > 100) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
        };
    
        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <section className="font-lufga">
            <OffCanvasMobileMenu show={show} handleClose={handleClose} />

            <header>
                <Container>
                    <nav className={`navbar navbar-expand-lg navbar-dark ps-60 pb-2 ${isSticky ? 'header-sticky' : ''}`}>
                        <Col lg={1} sm={8} xs={8}>
                            <Row>
                                <Col sm={6} xs={6} className="mobile m-auto">
                                    <Button className="btn-toggle mobile" onClick={handleShow}>
                                        <FaBars />
                                    </Button>
                                </Col>
                                <Col sm={6} xs={6} className="text-center">
                                    <Link className="navbar-brand" href="/">
                                        {/* <Image src="/images/logo.png" width="80px" alt="" /> */}
                                        <span className="fs-1 fw-bold" style={{ color: orangeColor }}>&lt;/&gt;</span>
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={10}>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav w-100 mb-2 mb-lg-0 font-lufga gap-5 justify-content-center">
                                    <li className="nav-item">
                                        <Link className="nav-link active menu-link" aria-current="page" href="/products">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link menu-link" href="#service">Service</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link menu-link" href="#about">About me</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link menu-link" href="#portfolio">Portfolio</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link menu-link" href="#contact">Contact me</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={1} sm={4} xs={4}>
                            <Button className="btn-warning text-white px-4 py-2 float-end">Hire Me</Button>                        
                        </Col>
                    </nav>     
                    {/* <!-- End Navbar --> */}
                </Container>   
            </header>
        </section>
    );
} 