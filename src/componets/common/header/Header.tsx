import { Badge, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const { headerContainer, headerLogo } = style;
import style from "./Header.module.css";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { logOut } from "@store/auth/authSlice";
import { HeaderLeftBar } from "./HeaderLeftBar/HeaderLeftBar";
import { useEffect } from "react";
import { actGetwishlist } from "@store/Wishlist/wishlistSlice";
const Header = () => {
  const dispath = useAppDispatch();
  const { accessToken, user } = useAppSelector((state) => state.auth);
  useEffect(() => {
    if (accessToken) {
      dispath(actGetwishlist("ProductsIds"));
    }
  }, [dispath, accessToken]);

  return (
    <>
      <header>
        <div className={headerContainer}>
          <h1 className={headerLogo}>
            <span>Our</span>
            <Badge bg="info" className="ms-2">
              Ecom
            </Badge>
          </h1>
          <HeaderLeftBar />
        </div>
        <Navbar
          expand="lg"
          className="bg-body-tertiary rounded-2"
          data-bs-theme="dark"
        >
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="categores">
                  Categores
                </Nav.Link>
                <Nav.Link as={NavLink} to="about-us">
                  About
                </Nav.Link>
              </Nav>
              <Nav>
                {!accessToken ? (
                  <>
                    <Nav.Link as={NavLink} to="/login">
                      Login
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/register">
                      Register
                    </Nav.Link>
                  </>
                ) : (
                  <>
                    <NavDropdown
                      title={`Welcome ${user?.firstName} ${user?.lastName}`}
                      id="basic-nav-dropdown"
                    >
                      <NavDropdown.Item
                        href="#action/3.1"
                        as={NavLink}
                        to="profile"
                        end
                      >
                        Profile
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3" as={NavLink} to="profile/orders">
                        Ordered
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        href="#action/3.4"
                        onClick={() => dispath(logOut())}
                        as={NavLink}
                        to={"/"}
                      >
                        LogOut
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
