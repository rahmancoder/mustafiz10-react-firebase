import React from 'react';
import { Container, Navbar, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar sticky="top" bg="warning" variant="dark">
                <Container>
                    <Navbar.Brand href="/home"><i class="fas fa-doctor-code"></i> HealthCare Online & Support</Navbar.Brand>
                    <Nav className="me-5 p-2 text-center">
                        <Button className="bg-warning"><Link className="m-2 text-decoration-none" to="/home">Home</Link> </Button>
                        <Link className="m-2 text-decoration-none" to="/services">Services</Link>
                        <Link className="m-2 text-decoration-none" to="/doctors">Doctor</Link>
                        <Link className="m-2 text-decoration-none" to="/login">LogIn</Link>
                        <Link className="m-2 text-decoration-none" to="/register">Register</Link>
                        <Link className="m-2 text-decoration-none" to="/questions">FAQ</Link>
                        {/* <Link className="m-2" to="/notfound">Not Found</Link> */}
                    </Nav>
                </Container>
            </Navbar>


        </>
    );
};

export default Header;