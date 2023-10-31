import React, { useContext } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { userContext } from '../App';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Registration = () => {
  
 const navagate=useNavigate();
 const {user,setUser}=useContext(userContext);
const nameRef=useRef();
const passRef=useRef();
const emailRef=useRef();
  

const handleClick=()=>{
  const name= nameRef.current.value ;
  const pass= passRef.current.value; 
  const email=emailRef.current.value;
  const value={name:name,password:pass ,email:email};
   setUser([...user,value]);
    
  if(!name||!pass||!email){
    toast.warning("fill the form")
  }else{
    navagate("/login");
  }
}


//Form Validation 


const [formData,setFormDta]=useState({
  userName:"",
  email:'',
  password:'',
  cPassword:''
})

 const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormDta({
      ...formData,[name]:value
    })
 }



 //error Object


 const [error,setError]=useState({});

  



 //Handle Submit 

 const handleSubmit=(e)=>{
  e.preventDefault()
  const validationError={}
  if(!formData.userName.trim()){
    validationError.userName="username is requred";
      
  }
  if(!formData.email.trim()){
     validationError.email="email is requred"

  }else if(!/\S+@\S\.\S+/.test(formData.email)){
    validationError.email="email is not valid"

  }
  if(!formData.password.trim()){
    validationError.password="password is requred"

 }else if(formData.password.length>6){
   validationError.password="password should  be at least 6 characters"

 }
 if(formData.cPassword !== formData.password){
     validationError.cPassword="password not matched"
 }
   setError(validationError);
   if(Object.keys(validationError).length===0){
      alert("Form Submited succefully")
   }
 }



  return (
    <>

<div className="container mt-5" >
  <div className="row justify-content-center" >
    <div className="col-md-6"  >
      <form onSubmit={handleSubmit} className="card p-4"  style={{ background: 'black', border: '1px solid #000', borderRadius: '15px', boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.2)' }}>
        <p  style={{ color: 'white' }}>Create your account. It's free and only takes a minute.</p>

        <div className="mb-3">
          <label className="form-label" htmlFor="userName"  style={{ color: 'white' }}>User Name</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            name="userName"
            ref={nameRef}
            onChange={handleChange}
            style={{ background: "#fff", borderRadius: "5px", boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)" }}
          />
          {error.userName && <span style={{ color: 'red' }}>{error.userName}</span>}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="email"  style={{ color: 'white' }}>Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            ref={emailRef}
            onChange={handleChange}

            style={{ background: "#fff", borderRadius: "5px", boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)" }}
          />
          {error.email && <span  style={{ color: 'red' }}>{error.email}</span>}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="password"  style={{ color: 'white' }}>Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            ref={passRef}
            onChange={handleChange}
            style={{ background: "#fff", borderRadius: "5px", boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)" }}
          />
          {error.password && <span style={{ color: 'red' }}>{error.password}</span>}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="cPassword"  style={{ color: 'white' }}>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="cPassword"
            name="cPassword"
            onChange={handleChange}
            style={{ background: "#fff", borderRadius: "5px", boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)" }}
          />
          {error.cPassword && <span style={{ color: 'red' }}>{error.cPassword}</span>}
        </div>

        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="rememberMe" />
          <label className="form-check-label" htmlFor="rememberMe"  style={{ color: 'white' }}>Remember me</label>
        </div>

        <button onClick={handleClick} className="btn btn-primary mt-3" style={{ background: "black", color: "white", fontWeight: 600 }}  >Register</button>
      </form>
    </div>
  </div>
</div>


          </>
  );
};

export default Registration;
