//header w buttons and react logo
import React, { Component } from 'react';
import '../css/main.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';
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
                               Dashboard
                           </NavItem>
                           <NavItem eventKey={2} href="/info">
                               Info
                           </NavItem>
                           <NavDropdown eventKey={3} title="Find Me" id="basic-nav-dropdown">
                               <MenuItem eventKey={3.1} href="https://www.github.com/nwk2">My Github</MenuItem>
                               <MenuItem eventKey={3.2} href="https://www.linkedin.com/in/ngwaikit1">My LinkedIn</MenuItem>
                               <MenuItem id="email" eventKey={3.3}>ng.wai.kit.22@gmail.com  <Icon name="copy"/></MenuItem>
                               {/*<MenuItem divider />
                               <MenuItem eventKey={3.3}>Separated link</MenuItem>*/}
                           </NavDropdown>
                       </Nav>
                       <Nav pullRight>
                           <NavItem eventKey={1} href="/sources">
                               Sources
                           </NavItem>
                           <NavItem eventKey={2} href="/login">
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
