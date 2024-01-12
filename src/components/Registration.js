import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import axios from "axios";


const Registration = () => {
  const navigate=

const handleSubmit=async (e)=>{
  e.preventDefault();

  const name=e.target.name.value.trim();
  const email=e.taget.email.value.trim();
  const username=e.taget.username.value.trim();
  const password=e.taget.password.value.trim();

  if (name === "" || email === "" || username === "" || password === "") {
    toast.error("Enter All the Inputs");
 }else{

  try{
       const userData={name,email,username,password};

     const response=await axios.post("http://localhost:3000/api/users/register",userData);
     if(response.status===201){
        toast.success(response.data.message);
        navi
     }



  }catch(error){
    toast.error(error);
  }
 }



}
  

 

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form
              
              className="card p-4"
              style={{
                background: "black",
                border: "1px solid #000",
                borderRadius: "15px",
                boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.2)",
              }}
            >
              <p style={{ color: "white" }}>
                Create your account. It's free and only takes a minute.
              </p>

              <div className="mb-3">
                <label
                  className="form-label"
                  htmlFor="userName"
                  style={{ color: "white" }}
                >
                  User Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  name="userName"
                
               
                  style={{
                    background: "#fff",
                    borderRadius: "5px",
                    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
                  }}
                />
                
              </div>

              <div className="mb-3">
                <label
                  className="form-label"
                  htmlFor="email"
                  style={{ color: "white" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                 
                  style={{
                    background: "#fff",
                    borderRadius: "5px",
                    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
                  }}
                />
               
                
              </div>

              <div className="mb-3">
                <label
                  className="form-label"
                  htmlFor="password"
                  style={{ color: "white" }}
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  
                  style={{
                    background: "#fff",
                    borderRadius: "5px",
                    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
                  }}
                />
                
              </div>

              <div className="mb-3">
                <label
                  className="form-label"
                  htmlFor="cPassword"
                  style={{ color: "white" }}
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="cPassword"
                  name="cPassword"
                
                  style={{
                    background: "#fff",
                    borderRadius: "5px",
                    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
                  }}
                />
               
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe"
                />
                <label
                  className="form-check-label"
                  htmlFor="rememberMe"
                  style={{ color: "white" }}
                >
                  Remember me
                </label>
              </div>

              <button
               
                className="btn btn-primary mt-3"
                style={{ background: "black", color: "white", fontWeight: 600 }}
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
