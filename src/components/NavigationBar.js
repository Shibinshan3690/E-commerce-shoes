import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Navigate, useNavigate } from "react-router";
import { BsFillCartFill } from "react-icons/bs";
import { CgLogOut } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";
import { RiAdminFill } from "react-icons/ri";

const NavigationBar = () => {
  const navagate = useNavigate();
  return (
    //First Nav bar
    <>
      <Navbar
        expand="lg"
        className="bg-black  "
        style={{ borderBottom: "2px solid white" }}
      >
        <Container fluid>
          <Navbar.Brand
            onClick={() => navagate("/")}
            style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}
          >
            Foot Locker
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="color-white" />

          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button
              variant="outline-success"
              className="bg-white "
              style={{ color: "black", fontWeight: "600" }}
            >
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>

      {/* Secxond Navbar */}
      <div>
        <Navbar
          expand="lg"
          className="bg-black "
          style={{ borderBottom: "2px solid white" }}
        >
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link
                  onClick={() => navagate("/allcatogory")}
                  style={{ color: "white", fontWeight: 600 }}
                >
                  All Catogory
                </Nav.Link>
                <Nav.Link
                  onClick={() => navagate("/men")}
                  style={{ color: "white", fontWeight: 600 }}
                >
                  Men
                </Nav.Link>

                <Nav.Link
                  onClick={() => navagate("/wommen")}
                  style={{ color: "white", fontWeight: 600 }}
                >
                  {" "}
                  Wommen{" "}
                </Nav.Link>
               
              </Nav>
              <Nav>
                <Nav.Link style={{ fontSize: "27px", color: "white" }} onClick={()=>navagate('/cart')}>
                  <BsFillCartFill className="ml-3"  />
                </Nav.Link>

                <Nav.Link
                  onClick={() => navagate("/login")}
                  style={{ fontSize: "27px", color: "white" }}
                >
                  <CgLogOut className="ml-3" />
                </Nav.Link>
                <Nav.Link style={{ fontSize: "27px", color: "white" }}>
                  <TbLogout className="ml-3" />
                </Nav.Link>
                <Nav.Link style={{ fontSize: "27px", color: "white" }}>
                  <RiAdminFill className="ml-3"  onClick={()=>navagate("/adminLogin")} />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavigationBar;
