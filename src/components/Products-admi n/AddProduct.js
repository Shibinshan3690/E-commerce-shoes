import React, { useContext, useState } from 'react';
import { userContext } from '../../App';
import { toast } from 'react-toastify';
import axios from 'axios';

const AddProduct = () => {
  const { product, setProduct } = useContext(userContext);
  const [newProduct, setNewProduct] = useState({
    name: '',
    title: '',
    newPrice: '',
    img: '',
    category: '',
  });
  console.log('Sending request with data:', newProduct);
  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
   

  };

  const handleAddProduct = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/admin/createProduct', newProduct);
      
      if (response.data.status === 'success') {
        toast.success('Product created successfully');
        setProduct([...product, response.data.data]);
        console.log(setProduct)
        setNewProduct({
          name: '',
          title: '',
          newPrice: '',
          img: '',
          category: '',
        });
      } else {
        toast.error('Failed to create product');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add a Product</h2>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          className="form-control"
          name="title"
          value={newProduct.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Price:</label>
        <input
          type="text"
          className="form-control"
          name="newPrice"
          value={newProduct.newPrice}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Image URL:</label>
        <input
          type="text"
          className="form-control"
          name="img"
          value={newProduct.img}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input
          type="text"  
          className="form-control"
          name="category"   
          value={newProduct.category}     
          onChange={handleInputChange}   
        />
      </div>
      <button className="btn btn-primary" onClick={handleAddProduct}>
        Add Product
      </button>
    </div>
  );
};
export default AddProduct;
