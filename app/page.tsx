import Image from "next/image";
import { Button, Col, Container, Row } from "react-bootstrap";
import Services from "./ui/component/Service";
import About from "./ui/component/About";
import TechStack from "./ui/component/TechStack";
import Contact from "./ui/component/Contact";
import Footer from "./ui/layout/Footer";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Home() {
	return (
		<div className="min-h-screen">
			<main>
				<section className="font-lufga">
					<Container className="d-flex align-items-center" style={{ minHeight: '80vh' }}>
						<Row className="w-100 align-items-center flex-column-reverse flex-md-row">
						
							{/* LEFT COLUMN: Text */}
							<Col md={6}>
								{/* Introduction Text */}
								<h4 className="text-center text-md-start text-secondary fw-normal mb-3">Hi I am</h4>
								<h2 className="text-center text-md-start text-secondary fw-bold mb-4">Arun Kumar</h2>
								
								{/* Title */}
								<h1 className="text-center text-md-start display-3 fw-bold mb-4" style={{ color: '#fd7e14' }}>
									Software Developer
								</h1>

								{/* Social Icons Placeholder */}
								<div className="d-flex gap-3 justify-content-center justify-content-md-start mb-5">
									<div className="text-white d-flex align-items-center justify-content-center border border-secondary rounded-circle" 
										style={{ width: '40px', height: '40px', cursor: 'pointer' }}>
										<FaInstagram />
									</div>
									<div className="text-white d-flex align-items-center justify-content-center border border-secondary rounded-circle" 
										style={{ width: '40px', height: '40px', cursor: 'pointer' }}>
										<FaGithub />
									</div>
									<div className="text-white d-flex align-items-center justify-content-center border border-secondary rounded-circle" 
										style={{ width: '40px', height: '40px', cursor: 'pointer' }}>
										<FaLinkedin />
									</div>
								</div>

								{/* Action Buttons */}
								<div className="d-flex justify-content-center justify-content-md-start gap-3 mb-5">
									<Button size="lg" className="scale-mobile text-white fw-bold px-5 rounded-1" style={{ backgroundColor: '#fd7e14', border: 'none' }}>
										Hire Me
									</Button>
									<Button href="https://drive.google.com/file/d/1aG2uJR2C-oqs7vF3e2Yqqp8MCpt5l9DQ/view?usp=drive_link" target="_blank" size="lg" variant="outline-light" className="scale-mobile px-5 rounded-1">
										Download CV
									</Button>
								</div>

								<div className="exp-info p-4 rounded-3 d-flex justify-content-md-center" style={{ backgroundColor: '#1a1a1a', maxWidth: '500px' }}>
									<Row className="w-100">
										<Col xs={4} className="border-end border-secondary">
											<h3 className="fw-bold mb-0" style={{ color: '#fd7e14' }}>5+</h3>
											<p className="text-secondary mb-0">Experiences</p>
										</Col>
										<Col xs={4} className="border-end border-secondary">
											<h3 className="fw-bold mb-0" style={{ color: '#fd7e14' }}>20+</h3>
											<p className="text-secondary mb-0">Project done</p>
										</Col>
										<Col xs={4}>
											<h3 className="fw-bold mb-0" style={{ color: '#fd7e14' }}>20+</h3>
											<p className="text-secondary mb-0">Happy Clients</p>
										</Col>
									</Row>
								</div>
							</Col>

							{/* RIGHT COLUMN: Image */}
							<Col md={6} className="position-relative d-flex justify-content-center mt-5 mt-md-0">
								{/* Dark Circle Background */}
								<div className="bgCircle position-absolute top-50 start-50 translate-middle rounded-circle"></div>

								{/* Person Image */}
								<Image 
									src="/images/vectors/developer2.png" 
									alt="Profile" 
									className="img-fluid position-relative z-1" 
									width={550}
									height={600}
								/>
							</Col>

						</Row>
      				</Container>
				</section>

				<Services />

				<About />

				<TechStack />

				<Contact />

				<Footer />
			</main>
		</div>
	);
}
