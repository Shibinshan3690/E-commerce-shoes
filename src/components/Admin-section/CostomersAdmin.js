import React, { useContext } from 'react';
import { userContext } from '../../App';
import Sidebar from './Sidebar-section/Sidebar';

const CostomersAdmin = () => {
  const { user } = useContext(userContext);

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
            {user.map((userData, index) => (
              <tr key={index}>
                <td>{userData.email}</td>
                <td>{userData.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CostomersAdmin;
