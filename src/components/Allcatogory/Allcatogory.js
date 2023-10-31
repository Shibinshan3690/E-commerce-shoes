import React, { useContext } from 'react';
import NavigationBar from '../NavigationBar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { userContext } from '../../App';
import Container from 'react-bootstrap/Container'; // Corrected the import
import { Footer } from '../Footer';
import { useNavigate } from 'react-router';
import "./Allcatogary.css";


const AllCategory = () => {
const { product } = useContext(userContext);
const navigate=useNavigate();

  return (
    <>
      <NavigationBar />
      <Container>
      <div className='row justify-content-center'>
        {product.map((item) => (
          <Card style={{ width: '15rem' }} className='p-3 m-3 product-card' key={item.id}>
            <div className="product-image-container">
              <Card.Img variant="top" src={item.img} />
            </div>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {Array(item.star).fill(<span key={item.id} className="star">★★★★</span>)}
              </Card.Text>
              <div className="product-price">
                $ {item.newPrice}
              </div>
              <Button onClick={() => navigate(`/view/${item.id}`)} style={{backgroundColor:'black'}} className="view-button">
                View
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
     <Footer/>
    </>
  );
}

export default AllCategory;
