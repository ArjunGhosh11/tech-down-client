import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import auth from '../../firebase.init';
const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="secondary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <div className='d-flex align-items-center'>
                            <img height={30} src={logo} alt="" />
                            <h1 className='text-dark fw-bolder text-center'><span className='text-white'>Tech</span>Down</h1>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                        </Nav>

                        <Nav>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="additem">Add Items</Nav.Link>
                                    <Nav.Link as={Link} to="manageitems">Manage</Nav.Link>
                                    <Nav.Link as={Link} to="myitems">My Items</Nav.Link>
                                </>
                            }
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;