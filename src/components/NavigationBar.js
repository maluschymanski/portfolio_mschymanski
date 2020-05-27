import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#371d93+1,f22682+42,f22682+42,f22682+54,f9c300+100 */
        background: #371d93; /* Old browsers */
        background: -moz-linear-gradient(-45deg,  #371d93 1%, #f22682 42%, #f22682 42%, #f22682 54%, #f9c300 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(-45deg,  #371d93 1%,#f22682 42%,#f22682 42%,#f22682 54%,#f9c300 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(135deg,  #371d93 1%,#f22682 42%,#f22682 42%,#f22682 54%,#f9c300 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#371d93', endColorstr='#f9c300',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
        
    }

.navbar-brand, .navbar-nav .nav-link {
    color: #FFFFFF;

    &:hover {
        color_white;
    }
}
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/"> Life of Lou </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    
                    <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                </Nav>
                </Navbar.Collapse>
        </Navbar>
    </Styles>
)