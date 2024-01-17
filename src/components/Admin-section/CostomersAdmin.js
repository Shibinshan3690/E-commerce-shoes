import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar-section/Sidebar';
import { toast } from 'react-toastify';
import axios from 'axios';



const CostomersAdmin = () => {
const [users, setUsers] = useState([]);

  useEffect(() => {
      const allUsers=async()=>{
          try{
            const response=await axios.get("http://localhost:5000/api/admin/users")
            console.log(response.data.data);
            setUsers(response.data.data)
          }catch(error){
      toast.error(error.message||"failed fecth user")
      }
    }
  
      allUsers()
  }, []);

  return (
    <>
      <Sidebar />
      <div className="user-list" style={{ marginLeft: '220px', marginTop: '-500px' }}>
        <h2>User List</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Email</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {users.map((users, index) => (
              <tr key={index}>
                <td>{users.email}</td>
                <td>{users.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CostomersAdmin;
