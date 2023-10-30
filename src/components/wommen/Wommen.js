import React, { useContext } from 'react';
import { Button, Card, Container, Navbar } from 'react-bootstrap';
import { Footer } from '../Footer';
import { userContext } from '../../App';
import NavigationBar from '../NavigationBar';
import { useNavigate } from 'react-router';

const Women = () => {
  const { product } = useContext(userContext);

  const filterWomen = product.filter((item) => item.gender === "wommen");

const navigate=useNavigate();
  

  return (
    <>
     <NavigationBar/>
     <Container>
  <div className='row justify-content-center'>
    {filterWomen.map((item) => (
      <Card
        style={{
          width: '15rem',
          transition: 'transform 0.3s', 
          border: '1px solid #000', 
          borderRadius: '15px',
          boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.2)',
        }}
        className='p-3 m-3'
        key={item.id}
      >
        <Card.Img variant="top" src={item.img} style={{ width: "11rem", height: '7rem' }} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {Array(item.star).fill(null).map((_, index) => (
              <span key={index} className="star">{item.star}{item.star}{item.star}</span>
            ))}
          </Card.Text>
          <span style={{ fontSize: "20px", fontWeight: 600, padding: "10px" }}>   $ {item.newPrice}</span>
          <Button
            onClick={() => navigate(`/view/${item.id}`)}
            variant="primary"
            style={{
              width: "12rem",
              backgroundColor: 'black',
              fontWeight: 600,
              transform: 'scale(1)', 
            }}
          >
            View
          </Button>
        </Card.Body>
      </Card>
    ))}
  </div>
</Container>

      <Footer />
    </>
  );
}

export default Women;
