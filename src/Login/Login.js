import axios from 'axios';

import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';


const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target.username.value.trim().toLowerCase();
    const password = e.target.password.value.trim();
    
    // console.log(username,"usernamee")
    const adminUserName = "admin";

      if (username === "" || password === "") {
        toast.error("Enter all inputs");
        return;
      }

    let url = "http://localhost:5000/api/user/login";

    if (username === adminUserName) {
      url = "http://localhost:5000/api/admin/login";
    }

    try {
      const payload = { username, password };
      const response = await axios.post(url, payload);
      console.log(response)
      if (response.status === 200) {
        username !== adminUserName && localStorage.setItem("userId", response.data.user._id);
        
        username === adminUserName && localStorage.setItem("role", "admin");
        localStorage.setItem("jwt", response.data.data);
        console.log(response.data.data)
        console.log(response.data.username)
        localStorage.setItem("userName", response.data.user.username);
          console.log(response.data.username)

        if (username === adminUserName) {
          navigate("/");
          toast.success("Login successful");
        } else {
          setTimeout(() => {
            localStorage.removeItem("jwt");
            localStorage.removeItem("userId");
            localStorage.removeItem("userName");
          }, 3600000);
          navigate("/");
          toast.success("Login successful");
        }
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Invalid username or password");
    }
  };


  return (
    <>
      <div className='container mt-5'>
  <div className='row justify-content-center'>
    <div className='col-md-6'>
      <div className='card' style={{ background: 'black', border: '1px solid #000', borderRadius: '15px', boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.2)' }}>
        <div className='card-body'>
          <h2 className='card-title' style={{ color: 'white' }}>Welcome Back!</h2>
          <p className='card-text' style={{ color: 'white' }}>Please Enter Your details.</p>
          <form   onSubmit={handleLogin}>
            <div className='mb-3'>
              <label htmlFor='form2Example1' className='form-label' style={{ color: 'white' }}>User Name</label>
              <input  type="text" id='form2Example1' className='form-control'  name="username" style={{ background: '#333', border: '1px solid #555', color: 'white'  }} />
            </div>
            <div className='mb-3'>
              <label htmlFor='form2Example2' className='form-label' style={{ color: 'white' }}>Password</label>
              <input type='password' id='form2Example2' className='form-control' name="password"  style={{ background: '#333', border: '1px solid #555', color: 'white' }} />
 
            </div>
           
            < span className='card-link' style={{ color: 'white' }}>Forgot password?</span>
            <button type='submit' className='btn btn-primary' style={{ background: 'black', fontWeight: 'bold' }}>Sign in</button>

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
