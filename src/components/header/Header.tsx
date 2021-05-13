import { FC, useContext, useState } from "react";
import { Navbar, Nav, NavDropdown, Dropdown } from "react-bootstrap";
import AuthModal from "../auth/AuthModal";
import { AuthContext } from "./../../store/providers/AuthProvider";
import Image from "../../assets/defaultProfilePic.png";
import "./Header.scss";

const Header: FC = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalType, setModalType] = useState("");
  const auth = useContext(AuthContext);
  const { isAuth } = auth.authState;

  console.log("IS AUTH? : " + isAuth);

  const setModalContent = (authType: string) => {
    setModalShow(true);
    setModalType(authType);
  };

  const getAuthNavs = () => {
    return (
      <Nav className="justify-content-center">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <img src={Image} alt="" />
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-menu-right">
            <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
            <NavDropdown.Divider />
            <Dropdown.Item href="" onClick={() => logout()}>
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    );
  };

  const getDefaultNavs = () => {
    return (
      <Nav className="justify-content-center">
        <Nav.Link href="" onClick={() => setModalContent("login")}>
          Login
        </Nav.Link>
        <Nav.Link href="" onClick={() => setModalContent("signup")}>
          Signup
        </Nav.Link>
      </Nav>
    );
  };

  const logout = () => {
    auth.handleLogout();
    window.location.href = "/";
  };

  return (
    <header>
      {/* Navbar content */}
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <i className="fas fa-book" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          {isAuth ? getAuthNavs() : getDefaultNavs()}
        </Navbar.Collapse>
      </Navbar>

      {/* Auth Modal */}
      <AuthModal
        show={modalShow}
        modalType={modalType}
        onHide={() => setModalShow(false)}
      />
    </header>
  );
};

export default Header;
