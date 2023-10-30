import React, { useContext, useState } from 'react';
import { userContext } from '../../App';
import { useParams } from 'react-router-dom'; // Corrected import

const EditProducts = () => {
  const { product, setProduct } = useContext(userContext);
  const { id } = useParams();

  // Filter the product based on the 'id' from the URL
  const filteredProduct = product.filter((item) => item.id == parseInt(id));

  // Editing Products
  const [editingProduct, setEditingProduct] = useState(null);

  const handleEdit = (id) => {
    const productToEdit = product.find((item) => item.id == id);
    setEditingProduct(productToEdit);
  };

  const handleSave = () => {
    // Map through the products, update the edited product, and keep the rest as is
    const updatedProductList = product.map((item) =>
      item.id === editingProduct.id ? editingProduct : item
    );
    setProduct(updatedProductList);
    setEditingProduct(null); // Clear the editing state
  };

  return (
    <div className="container">
      <h1 className="mt-4">Edit the Products</h1>
      <button>Add the product</button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Title</th>
            <th>Price</th>
            <th>Image</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {filteredProduct.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {editingProduct && editingProduct.id === item.id ? (
                  <input
                    type="text"
                    value={editingProduct.name}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, name: e.target.value })
                    }
                  />
                ) : (
                  item.name
                )}
              </td>
              <td>{item.title}</td>
              <td>
                {editingProduct && editingProduct.id === item.id ? (
                  <input
                    type="text"
                    value={editingProduct.newPrice}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, newPrice: e.target.value })
                    }
                  />
                ) : (
                  `${item.newPrice}`
                )}
              </td>
              <td>
                <img src={item.img} alt={item.name} style={{ width: '100px' }} />
              </td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => handleEdit(parseInt(id))} className="btn btn-danger" style={{ width: '110px', margin: '10px' }}>
        Edit
      </button>
      <button onClick={handleSave} className="btn btn-primary" style={{ width: '110px' }}>
        Save
      </button>
    </div>
  );
};

export default EditProducts;
