//header w buttons and react logo
import React, { Component } from 'react';
//import logo from '../ReactLogo.svg';
import '../css/header.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
//import springboot from '../components/springboot.png';
import ReactLogo from '../images/ReactLogo.svg';


class Header extends Component {

    render() {
        return (
           <div>
               <Navbar inverse collapseOnSelect>
                   <Navbar.Header>
                       <Navbar.Brand>
                           <a href="/"><img className="react-head-logo" src={ReactLogo} alt="React Logo"/></a>
                       </Navbar.Brand>
                       <Navbar.Toggle />
                   </Navbar.Header>
                   <Navbar.Collapse>
                       <Nav>
                           <NavItem eventKey={1} href="/">
                               Info
                           </NavItem>
                           <NavItem eventKey={2} href="/">
                               About
                           </NavItem>
                           <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                               <MenuItem eventKey={3.1}>Action</MenuItem>
                               <MenuItem eventKey={3.2}>Another action</MenuItem>
                               <MenuItem eventKey={3.3}>Something else here</MenuItem>
                               <MenuItem divider />
                               <MenuItem eventKey={3.3}>Separated link</MenuItem>
                           </NavDropdown>
                       </Nav>
                       <Nav pullRight>
                           <NavItem eventKey={1} href="/sources">
                               Sources
                           </NavItem>
                           <NavItem eventKey={2} href="/LoginPage">
                               Log Out
                           </NavItem>
                       </Nav>
                   </Navbar.Collapse>
               </Navbar>
           </div>
        );
    }
}

export default Header;
