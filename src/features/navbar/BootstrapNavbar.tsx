import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Filters from '../filters/Filters';
import {setSame} from '../filters/filterSlice';
import {useDispatch} from 'react-redux';

function BootstrapNavbar() {
  const dispatch = useDispatch();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Jobster Prep</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Add a Question</Nav.Link>
            <NavDropdown title="Filter Questions" id="basic-nav-dropdown">
              <Filters />
              <NavDropdown.Divider />
              <Button className="btn btn-light" onClick={() => dispatch(setSame(true))}>
                Select All
              </Button>
              <Button className="btn btn-light" onClick={() => dispatch(setSame(false))}>
                Select None
              </Button>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BootstrapNavbar;
