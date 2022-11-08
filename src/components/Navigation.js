import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Search from './Searchbar';
import "./Navigation.css";
import ProjectList from "./ProjectList";
import ProjectCard from "./ProjectCard";

const Navigation = (props) => {

    const [filterTerm, setFilterTerm] = useState('');

    const searchTerm = (filterTerm) => {
        setFilterTerm(filterTerm);
    };

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#funFacts">Fun Facts</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown
                            title="Projects"
                            id="basic-nav-dropdown">
                            <Search searchTerm={searchTerm}/>
                            <ProjectCard backEndData={props}/>
                            {/*<ProjectList*/}
                            {/*    backEndData={props}*/}
                            {/*    searchTerm={filterTerm} />*/}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;