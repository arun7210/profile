import { OffcanvasType } from "@/app/libs/types";
import Link from "next/link";
import { Button, Image, Offcanvas } from "react-bootstrap";

export default function OffCanvasMobileMenu({ show, handleClose }: OffcanvasType) {
    return (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    <Image src="/logo.png" width="180px" alt="" />
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 menus ">
                    <li className="nav-item">
                        <Link className="nav-link active menu-link" onClick={handleClose} aria-current="page" href="#home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link menu-link" onClick={handleClose} href="#service">Service</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link menu-link" onClick={handleClose} href="#about">About me</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link menu-link" onClick={handleClose} href="/products">Contact me</Link>
                    </li>
                    <li className="nav-item">
                        <Button className="nav-link menu-link" onClick={handleClose} href="/products">Hire Me</Button>
                    </li>
                </ul>
            </Offcanvas.Body>
        </Offcanvas>
    );
}