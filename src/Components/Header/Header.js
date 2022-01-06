import React from 'react';
import { Container, Navbar, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const Header = () => {
    const { logOut, user } = useFirebase();
    return (
        <>
            {/* Not responsive */}
            {/* <Navbar sticky="top" bg="warning" variant="dark"> */}
            {/* <Container>
                    <Navbar.Brand href="/home"><i class="fas fa-briefcase-medical"></i> HealthCare Online & Support</Navbar.Brand>
                    <Nav className="me-5 p-2 text-center">
                        <Button className="bg-warning"><Link className="m-2 text-decoration-none" to="/home">Home</Link> </Button>
                        <Link className="m-2 text-decoration-none text-light" to="/services">Services</Link>
                        <Link className="m-2 text-decoration-none text-light" to="/doctors">Doctor</Link>
                        <Link className="m-2 text-decoration-none text-light" to="/private">PrivateDoctor</Link> */}
            {/* <Link className="m-2 text-decoration-none text-light" to="/login">LogIn</Link> */}
            {/* <Link className="m-2 text-decoration-none text-light" to="/register">Register</Link> */}
            {/* {user?.email ? (

                <Link className="m-2 text-decoration-none text-light" to="/services">
                    <li onClick={logOut} className="header-items">
                        Logout
                    </li>
                </Link>

            ) : (
                <Link to="/login" className="header-items m-2 text-decoration-none text-light">
                    Login
                </Link>
            )} */}


            {/* {
                user?.email && <Link className="m-2 text-decoration-none text-light" to="/">
                    <li className="header-items">
                        {user.displayName}
                    </li>
                </Link>
            } */}
            {/* <Link className="m-2 text-decoration-none text-light" to="/questions">FAQ</Link> */}
            {/* <Link className="m-2" to="/notfound">Not Found</Link> */}
            {/* </Nav>
                </Container >
            </Navbar > */}


            {/*  Responsive Navbar Added */}

            < Navbar collapseOnSelect expand="lg" bg="warning" variant="dark" sticky="top" >
                <Container>
                    <Navbar.Brand href="/home"><i class="fas fa-briefcase-medical"></i> HealthCare Online & Support</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-5 p-2 text-center">
                            <Button className="bg-warning"><Link className="m-2 text-decoration-none" to="/home">Home</Link> </Button>
                            <Link className="m-2 text-decoration-none text-light" to="/services">Services</Link>
                            <Link className="m-2 text-decoration-none text-light" to="/doctors">Doctor</Link>
                            <Link className="m-2 text-decoration-none text-light" to="/private">PrivateDoctor</Link>
                            {/* <Link className="m-2 text-decoration-none text-light" to="/login">LogIn</Link> */}
                            {/* <Link className="m-2 text-decoration-none text-light" to="/register">Register</Link> */}
                            {user?.email ? (

                                <Link className="m-2 text-decoration-none text-light" to="/services">
                                    <li onClick={logOut} className="header-items">
                                        Logout
                                    </li>
                                </Link>

                            ) : (
                                <Link to="/login" className="header-items m-2 text-decoration-none text-light">
                                    Login
                                </Link>
                            )}
                            {
                                user?.email && <Link className="m-2 text-decoration-none text-light" to="/">
                                    <li className="header-items">
                                        {user.displayName}
                                    </li>
                                </Link>
                            }
                            <Link className="m-2 text-decoration-none text-light" to="/questions">FAQ</Link>
                            {/* <Link className="m-2" to="/notfound">Not Found</Link> */}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar >


        </>
    );
};

export default Header;