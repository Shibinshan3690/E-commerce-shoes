import React, { useContext, useState } from 'react';
import { userContext } from '../../App';
import { BsFillCartFill } from 'react-icons/bs';
import { toast } from 'react-toastify';

const Cart = () => { 
  const { cart, setCart } = useContext(userContext);
    //increment  
  const handleIncrement = (item) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    setCart(updatedCart);
  };


  //dicrement
  const handleDecrement = (item) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === item.id && cartItem.quantity > 1) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
    setCart(updatedCart);
  };

   // Filter out the item to be removed from the cart
     const handleRemove = (item) => {
   
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };
  // Calculate the total cash
  const totalCash = cart.reduce((total, item) => total + item.newPrice * item.quantity, 0);
  

const {byProduct,setByProduct}=useContext(userContext);


const handleClick=(id)=>{
    const buypro=cart.find((item)=>item.id==id)
    setByProduct([...byProduct,buypro])
    toast.success("Succefully product puchase")
}

  return (
    <>
    <div className="container">
      <h1 className="mt-4">Your Cart    <BsFillCartFill className="ml-3"  /></h1>
      <ul className="list-group">
        {cart.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{item.title}</h5>
              <p>${item.newPrice}</p>
              <div className="input-group">
                <button
                  className="btn btn-secondary"
                  onClick={() => handleDecrement(item)}
                >
                  -
                </button>
                <input type="text" value={item.quantity} className="form-control" readOnly />
                <button
                  className="btn btn-secondary"
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>

                <button
                  className="btn btn-danger"  style={{marginLeft:"10px"}}
                  onClick={() => handleRemove(item)}
                >
                  Remove
                </button>

                <button
                  className="btn btn-primary"  style={{marginLeft:"10px"}}
                       onClick={()=>handleClick(item.id)}
                >
                  By Now
                </button>
              </div>
            </div>
            <div>
              <img src={item.img} alt={item.title} style={{ width: '100px' }} />
              <p>Total: ${item.newPrice * item.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
       <p className="mt-3"  style={{fontSize:"25px", fontWeight:600}}>Total Cash: ${totalCash}</p>
    </div>
    </>
  );
};


export default Cart;
