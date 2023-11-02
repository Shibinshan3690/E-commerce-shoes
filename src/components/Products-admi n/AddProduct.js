import React, { useContext, useState } from 'react';
import { userContext } from '../../App';
import { toast } from 'react-toastify';

const AddProduct = () => {
  const { product, setProduct } = useContext(userContext);
  const [newProduct, setNewProduct] = useState({
    id: product.length + 1, // Generate a unique ID for the new product
    name:'',
    title:'',
    newPrice:'',
    img: '',
    category: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct, 
      [name]: value,
    });
  };
  const handleAddProduct = () => {
    if (newProduct.name && newProduct.title && newProduct.newPrice) {
      // Check if required fields are filled
      setProduct([...product, newProduct]);
      setNewProduct({
        id: product.length + 1,
        name: '',
        title: '',
        newPrice: '',
        img: '',
        category: '',
      });
    } else {
      toast.warning('Please fill in all required fields.');
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
