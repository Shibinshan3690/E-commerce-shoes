import React from 'react'
import NavigationBar from '../NavigationBar'
import { Button, Card, Container } from 'react-bootstrap';
import { userContext } from '../../App';
import { useContext } from 'react';
import { Footer } from '../Footer';
import { useNavigate } from 'react-router';


const Men = () => {
 
  const { product } = useContext(userContext);
  const filterProduct=product.filter((items)=>items.gender ==="men");

  const navigate=useNavigate();


  


  return (
    <>
    <NavigationBar/>
      
    <Container>
  <div className='row justify-content-center'>
    {filterProduct.map((items) => (
      <Card
        style={{
          width: '15rem',
          border: '1px solid #000',
          borderRadius: '15px',
          boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.2)',
          transition: 'transform 0.3s', 
        }}
        className='p-3 m-3'
        key={items.id}
      >
        <Card.Img variant="top" src={items.img} style={{ width: '11rem', height: '7rem' }} />
        <Card.Body>
          <Card.Title>{items.title}</Card.Title>
          <Card.Text>
            {Array(items.star).fill(<span key={items.id} className="star">{items.star}{items.star}{items.star}{items.star}</span>)}
          </Card.Text>
          $ {items.newPrice}
          <Button
            onClick={() => navigate(`/view/${items.id}`)}
            variant="primary"
            style={{
              width: '12rem',
              backgroundColor: 'black',
              fontWeight: 600,
              transform: 'scale(1)',
            }}
            className="view-button"
          >
            View
          </Button>
        </Card.Body>
      </Card>
    ))}
  </div>
</Container>



   <Footer/>
    
    </>
  )
}

export default Men
