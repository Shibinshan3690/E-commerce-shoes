import React, { useContext } from 'react';
import NavigationBar from '../NavigationBar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { userContext } from '../../App';
import Container from 'react-bootstrap/Container'; // Corrected the import
import { Footer } from '../Footer';
import { useNavigate } from 'react-router';
import "./Allcatogary.css";
import { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';


const AllCategory = () => {
const { product } = useContext(userContext);
const navigate=useNavigate();
//Serch product

const [search,setSearch]=useState("");

const Searchess=product.filter((value)=>{
  if(search==""){
    return  value;

  }else
  if(value.title.toLowerCase().includes(search.toLowerCase())){
    return value
  }
})



  return (
    <>
      <NavigationBar />

      {/* <div className="d-flex">
  <Form    style={{marginLeft:'-220px' ,marginTop:'-90px',  display:'flex'}}>
    <FormControl      
      type="search"
      placeholder="Search"
      className="me-2"
      aria-label="Search"
     
      style={{ height: '45px', width: '400px', position: 'relative', left: '600px', top: '30px' }}
    />
    
  </Form>
</div> */} 


<Form className="d-flex w-25 position-absolute m-5" style={{zIndex:"99",right:"6.1rem" ,top:"1.8rem"}} >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              onChange={(ev) => { setSearch(ev.target.value) }}
              
     
              
             
            
            />
            <Button
              variant="outline-success"
              className="bg-white "
              style={{ color: "black", fontWeight: "600" }}
           
            >
              Search
            </Button>   
          </Form>



      <Container>
      <div className='row justify-content-center'>
        {Searchess.map((item) => (
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
