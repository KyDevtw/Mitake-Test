import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import "../style/Header.scss";

function Header() {
  return (
    <>
      <div className="header-area">
        <Link to="/">
          <div className="header-logo"></div>
        </Link>
        <ul className="header-icons">
          <li className="header-icons1"></li>
          <li className="header-icons2"></li>
          <li className="header-icons3"></li>
          <li className="header-icons4"></li>
        </ul>
      </div>
      <div className="header-deco"></div>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="my-auto">
          <Nav className="mx-auto">
            <NavDropdown title="文化活動" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">文化活動</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">找活動</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">親子活動</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">獨立活動</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">閱讀活動</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="文化空間" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">找空間</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">文化資產</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">地方文化館</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">博物館</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">主題推薦</Nav.Link>
            <NavDropdown.Divider />
            <Nav.Link href="#">節慶專區</Nav.Link>
            <NavDropdown.Divider />
            <Nav.Link href="#">新住民專區</Nav.Link>
            <NavDropdown.Divider />
            <Nav.Link href="#">性別平等專區</Nav.Link>
            <NavDropdown title="街頭藝人" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                街頭藝人介紹
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">展演空間</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                縣市主題網站
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">博物館</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">資訊刊登</Nav.Link>
            <Nav.Link href="#">關於我們</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default withRouter(Header)
