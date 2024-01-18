import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
// import { Axios } from '../../App';



const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !category || !price || !description || !image) {
      toast.error('Please fill in all fields.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('image', image);

    try {
      // const jwtToken = localStorage.getItem('jwt');
      
      const response = await axios.post(
        'http://localhost:5000/api/admin/createProduct',
        formData,
        {
          headers: {
            // 'Authorization': `Bearer ${jwtToken}`, // Uncomment if needed
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      
      
      

      

      if (response.status === 201) {
        toast.success('Product added successfully!');
      } else {
        toast.error('Failed to add product.');
      }
    } catch (error) {
      console.error('Error uploading product:', error);
    }
  };

  return (
    <section>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2 className="text-center">Add Product</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <label htmlFor="type" className="form-label">
                Category
              </label>
              <input
                type="text"
                name="category"
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />

              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="text"
                name="price"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />

              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                name="description"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <label htmlFor="image" className="form-label">
                Image
              </label>
              <input
                type="text"
                name="image"
                className="form-control"
                onChange={(e) => setImage(e.target.value)}
              />

              <button type="submit" className="btn btn-success mt-2 mb-5">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
