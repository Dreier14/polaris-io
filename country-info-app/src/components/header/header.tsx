import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'

// The header component will serve as a basic component that we can add further sub functionalities like toggling between dark and light mode.

export const Header: React.FC = () => {
    return (
        <Navbar>
            <Container fluid>
                <Navbar.Brand href="#home">
                    <b>Where in the World ?</b>
                </Navbar.Brand>
                <Nav>
                    <Nav.Link>
                        <FontAwesomeIcon icon={faMoon} style={{ marginRight: '5px' }} />Dark Mode
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}