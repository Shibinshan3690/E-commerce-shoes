import React, { useContext, useState } from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import Sidebar from '../Admin-section/Sidebar-section/Sidebar';
import { userContext } from '../../App';
import { useNavigate } from 'react-router';

const ProductsAdmin = () => {

    const navigate=useNavigate();
  const { product, setProduct } = useContext(userContext);
  
     
     //Remove the product
  const handleRemove = (id) => {
    const updatedCart = product.filter((item) => item.id !== id);
    setProduct(updatedCart);
  };



 

  

  return (
    <>
      <Sidebar />
      <div className="container" style={{ width: '1000px', marginLeft: '200px', marginTop: '-610px' }}>
        <h1 className="mt-4">All Products <BsFillCartFill className="ml-3" /></h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  {item.company}
                </td>
                
                <td>
                  {item.newPrice}
                </td>
                <td>
                  <img src={item.img} alt={item.name} style={{ width: '100px' }} />
                </td>
                <td>
                
                    <button  onClick={()=>navigate(`/adminedit/${item.id}`)}  className="btn btn-secondary">
                      Edit
                    </button>
               
                  <button onClick={() => handleRemove(item.id)} className="btn btn-danger" style={{ marginLeft: '10px' }}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductsAdmin;
