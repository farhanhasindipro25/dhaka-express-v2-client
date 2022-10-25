import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import LeftNav from "./LeftNav";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="mb-5"
      >
        <Container>
          <Navbar.Brand className="fw-bolder">
            <Link to="/" className="text-decoration-none text-black">
              <span className="text-primary ">DHAKA</span> EXPRESS
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">All News</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Link to="/profile">
                {user?.uid ? (
                  <span>
                    {user.photoURL ? (
                      <div className="d-flex align-items-center gap-2">
                        <Image
                          roundedCircle
                          src={user.photoURL}
                          style={{ height: "30px" }}
                        ></Image>
                        <span>{user.displayName}</span>
                        <Button onClick={handleLogOut} variant="dark">
                          Log Out
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <FaUser></FaUser>
                        <Button onClick={handleLogOut} variant="dark">
                          Log Out
                        </Button>
                      </div>
                    )}
                  </span>
                ) : (
                  <>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                  </>
                )}
              </Link>
            </Nav>
            <div className="d-lg-none mt-3">
              <LeftNav></LeftNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
