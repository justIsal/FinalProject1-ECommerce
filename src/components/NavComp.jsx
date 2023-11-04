import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes,Route, Link} from "react-router-dom";
import Home from './Home';
import Login from './Login';

const NavbarComp = () => {
    return (
        <Router>
            <div className='button'>
                <Navbar bg="black"  expand="lg">
                    <Navbar.Brand className="" href="#">OK Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse >
                        <Nav
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    
                </Routes>
            </div>
        </Router>
    );
};

export default NavbarComp;
