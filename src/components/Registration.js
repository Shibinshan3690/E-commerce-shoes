
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import axios from "axios";
import {  useState } from "react";



const Registration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value.trim(),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, username, password,} = formData;

    if (name === "" || email === "" || username === "" || password === "") {
      toast.error("Enter All the Inputs");
    } else {
      try {
        const userData = { name, email, username, password, };

        const response = await axios.post(
          "http://localhost:5000/api/user/register",
          userData,{
            headers: {
             " Content-Type": "application/json"
            }
          }
        );
        // console.log(response)
        if (response.status === 201) {
          toast.success(response.data.message);
          navigate("/login");
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  };




  

return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form
             onSubmit={handleSubmit}
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
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  checked={formData.rememberMe}
                  onChange={handleChange}

                  
                
               
                  style={{ background: '#333', border: '1px solid #555', color: 'white' }}
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
                  checked={formData.rememberMe}
                  onChange={handleChange}

                 
                  style={{ background: '#333', border: '1px solid #555', color: 'white' }}
                />
               
                
              </div>

              <div className="mb-3">
                <label
                  className="form-label"
                  
                  style={{ color: "white" }}
                >
                 userName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  checked={formData.rememberMe}
                  onChange={handleChange}

                  
                  style={{ background: '#333', border: '1px solid #555', color: 'white' }}
                />
                
              </div>

              <div className="mb-3">
                <label
                  className="form-label"
                 
                  style={{ color: "white" }}
                >
               Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  checked={formData.rememberMe}
                  onChange={handleChange}

                
                  style={{ background: '#333', border: '1px solid #555', color: 'white' }}
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
