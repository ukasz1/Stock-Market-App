import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import styled from 'styled-components';

function NavigationBar() {
  return (
    <Wrapper>
      <Navbar expand="lg" variant="dark" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home" className="brand">Stock Market App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav abc" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Quotes" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">WIG20</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Currencies
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Raw material prices</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    box-shadow: 0 0.5px 0.5px 0.5px #6a6a6a;
    .custom-navbar {
      background-color: #000080;
  }
    .brand {
      font-size: 1.4em;
    color: #ffd700;
  }
    `;

export default NavigationBar;
