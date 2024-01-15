import axios from 'axios';
import React, {  useRef, useState ,useEffect} from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';


const Login = () => {
  






  return (
    <>
      <div className='container mt-5'>
  <div className='row justify-content-center'>
    <div className='col-md-6'>
      <div className='card' style={{ background: 'black', border: '1px solid #000', borderRadius: '15px', boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.2)' }}>
        <div className='card-body'>
          <h2 className='card-title' style={{ color: 'white' }}>Welcome Back!</h2>
          <p className='card-text' style={{ color: 'white' }}>Please Enter Your details.</p>
          <form>
            <div className='mb-3'>
              <label htmlFor='form2Example1' className='form-label' style={{ color: 'white' }}>User Name</label>
              <input type='email' id='form2Example1' className='form-control' ref={userNameRef} style={{ background: '#333', border: '1px solid #555', color: 'white' }} />
            </div>
            <div className='mb-3'>
              <label htmlFor='form2Example2' className='form-label' style={{ color: 'white' }}>Password</label>
              <input type='password' id='form2Example2' className='form-control' ref={passwordRef} style={{ background: '#333', border: '1px solid #555', color: 'white' }} />
              {error && <div className="text-danger" style={{ color: 'red' }}>{error}</div>}
            </div>
            <div className='mb-3 form-check'>
              <input type='checkbox' className='form-check-input' id='form2Example31' checked />
              <label className='form-check-label' htmlFor='form2Example31' style={{ color: 'white' }}>Remember me</label>
            </div>
            < span className='card-link' style={{ color: 'white' }}>Forgot password?</span>
            <button onClick={handleClick} type='button' className='btn btn-primary' style={{ background: 'black', fontWeight: 'bold' }}>Sign in</button>
          </form>
        </div>
        <div className='card-footer text-center' style={{ color: 'white' }}>
          <span onClick={()=>navigate("/registaration")} className='card-link'>Register</span>
          <p>or sign up with:</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
  }

export default Login;
