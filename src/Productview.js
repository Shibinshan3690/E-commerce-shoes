import React, {  useContext } from 'react'
import { userContext } from './App'
import { useNavigate, useParams } from 'react-router';
import { Button, Card, Container } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
import { Footer } from './components/Footer';
import { toast } from 'react-toastify';

const Productview = () => {

   const navagate=useNavigate();
    const {product}=useContext(userContext);
       const {id}=useParams();
       const products = product.filter((item) => item.id == parseInt(id));
    
  //Add to cart//
        
const {cart,setCart,login}=useContext(userContext);
   const myCart=()=>{
        if(login){
          const [newData]=products;
          const dublicate=cart.filter((item)=>item.id==id);

          if(dublicate.length>0){
              return toast.warning("Product already existed");
          }else{
            setCart(prevState=>[...prevState,newData]);
            toast.success("Product Added to Cart")
          }
        }else{
           toast.warning("please Login");
          navagate("/login");
          
        }
   }

  return (
<>
<NavigationBar/>


 
<Container>
        <div className='row justify-content-center'>
          {products.map((item) => (
            <Card style={{ width: '30rem' }} className='p-3 m-3'  >
              <Card.Img variant="top" src={item.img} style={{ width: "11rem", height: '7rem' }} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {Array(item.star).fill(null).map((_, index) => (
                    <span key={index} className="star">{item.star}{item.star}{item.star}</span>
                  ))}
                </Card.Text>
                <span  style={{fontSize:"30px",  fontWeight:600, padding:"10px"}}>   $ {item.newPrice}</span>
                <Button  onClick={myCart}   variant="primary" style={{ width: "12rem",backgroundColor:'black' ,fontWeight:600 } }>Add to Cart</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
  <Footer/>
  
</>
           
  )
}

export default Productview
