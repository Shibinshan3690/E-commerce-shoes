import React, { useContext } from "react";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import {  useNavigate } from "react-router";
import { BsFillCartFill } from "react-icons/bs";
import { CgLogOut } from "react-icons/cg";
import {BiLogIn} from 'react-icons/bi'
import { RiAdminFill } from "react-icons/ri";
import { userContext } from "../App";


const NavigationBar = () => {
  const navagate = useNavigate();
  const{cart,login,user} = useContext(userContext);
  
  return (
   
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
          {/* search inputs */}
         
          
        </Container>
      </Navbar>
      

      {/* Secxond Navbar */}
      <div   >
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
                  Women{" "}
                </Nav.Link>
               
              </Nav>
              <Nav>
                <Nav.Link style={{ fontSize: "27px", color: "white" }} onClick={()=>navagate('/cart')}>
                  <BsFillCartFill className="ml-3"   /> 
                <sup className="icon-cart">{cart.length}</sup>
                </Nav.Link>

                {login?   
                ( <Nav.Link
                 onClick={() => navagate("/login")}
                 style={{ fontSize: "27px", color: "white" }}  
               > {user.map((userData, index) => (
              <tr key={index}>
                
                <td  style={{fontSize:'14px'}}>{userData.name}</td>
              </tr>
            ))}
                 <CgLogOut className="ml-3" /><span></span>
               </Nav.Link>):(
               <Nav.Link
                 onClick={() => navagate("/login")}s
                 style={{ fontSize: "27px", color: "white" }}
                 
               >
                 <BiLogIn className="ml-3" />
               </Nav.Link>)
                }
                
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
