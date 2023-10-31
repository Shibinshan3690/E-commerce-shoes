import React, { useContext, useState } from "react";
import { userContext } from "../../App";
import { useNavigate, useParams } from "react-router-dom";

const EditProducts = () => {

 const navigate=useNavigate();


  const { product, setProduct } = useContext(userContext);
  const { id } = useParams();

  // Filter the product 
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
      item.id == editingProduct.id ? editingProduct : item
    );
    setProduct(updatedProductList);
    setEditingProduct(null); // Clear the editing state
  };

  return (
    <div className="container mt-4">
      <h1>Edit the Products</h1>
     
      <table className="table table-bordered mt-3">
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
                {editingProduct && editingProduct.id == item.id ? (
                  <input
                    type="text"
                    value={editingProduct.name}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        name: e.target.value,
                      })
                    }
                    className="form-control"
                  />
                ) : (
                  item.company
                )}
              </td>
              <td>
                {editingProduct && editingProduct.id == item.id ? (
                  <input
                    type="text"
                    value={editingProduct.title}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        title: e.target.value,
                      })
                    }
                    className="form-control"
                  />
                ) : (
                  `${item.title}`
                )}
              </td>
              <td>
                {editingProduct && editingProduct.id == item.id ? (
                  <input
                    type="text"
                    value={editingProduct.newPrice}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        newPrice: e.target.value,
                      })
                    }
                    className="form-control"
                  />
                ) : (
                  `${item.newPrice}`
                )}
              </td>
              <td>
                {editingProduct && editingProduct.id == item.id ? (
                  <input
                    type="text"
                    value={editingProduct.img}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        img: e.target.value,
                      })
                    }
                    className="form-control"
                  />
                ) : (
                  `${item.img}`
                )}
              </td>
              <td>
                {editingProduct && editingProduct.id == item.id ? (
                  <input
                    type="text"
                    value={editingProduct.category}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        category: e.target.value,
                      })
                    }
                    className="form-control"
                  />
                ) : (
                  `${item.category}`
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={() => handleEdit(parseInt(id))}
        className="btn btn-danger"
        style={{ width: "110px", margin: "10px" }}
      >
        Edit
      </button>
      <button
        onClick={handleSave}
        className="btn btn-success"
        style={{ width: "110px" }}
      >
        Save
      </button>
    </div>
  );
};

export default EditProducts;
