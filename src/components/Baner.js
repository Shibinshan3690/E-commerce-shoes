import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';


const Baner = () => {
    const navigate=useNavigate();
  return (
    <Container>
      <Row className="text-center">
        <Col>
          <h2 style={{fontFamily:'fantasy'}}>Welcome to Our Store</h2>
        </Col>
      </Row>

      <Row className="home-image-section">
        <Col md={3}>
          <div className="img-container">
            <img
              className="img-fluid home-image-list"
              src="https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2023/september/230912-fl-hp-category-6up-update-mens.jpg"
              alt="Men's"
            />
            <span  onClick={()=>navigate('/men')} className="home-image-list-text" style={{textDecoration:'none', fontFamily:"fantasy" ,color:'black'}} >
              MEN'S
            </span>
          </div>
        </Col>
        <Col md={3}>
          <div className="img-container">
            <img
              className="img-fluid home-image-list"
              src="https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2023/september/230912-fl-hp-category-6up-update-womens.jpg"
              alt="Women's"
            />
            <span  onClick={()=>navigate('/wommen')} className="home-image-list-text"  style={{textDecoration:'none', fontFamily:"fantasy" ,color:'black'}} >
              WOMEN'S
            </span>
          </div>
        </Col>
        <Col md={3}>
          <div className="img-container">
            <img
              className="img-fluid home-image-list"
              src="https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2023/september/230912-fl-hp-category-6up-update-kids.jpg"
              alt="Kids"
            />
            <a className="home-image-list-text" style={{textDecoration:'none', fontFamily:"fantasy" ,color:'black'}}>
              KID'S
            </a>
          </div>
        </Col>
        <Col md={3}>
          <div className="img-container">
            <img
              className="img-fluid home-image-list"
              src="https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2023/september/230912-fl-hp-category-6up-update-sale.jpg"
              alt="Sale"
            />
            <a className="home-image-list-text"   style={{textDecoration:'none', fontFamily:"fantasy" ,color:'black'}}>
              SALE
            </a>
          </div>
        </Col>
      </Row>


      <Row className="Home-brands-list">
        <Col>
        <Row className="text-center">
        <Col>
          <h3 style={{fontFamily:'fantasy'}}>Shob by brand</h3>
        </Col>
      </Row>

          <Row>
            <Col md={2}>
              <div className="img-container">
                <img
                  className="img-fluid"
                  src="https://images.footlocker.com/content/dam/final/FootLockerInc/site/evergreen/brand-6up-new-balance.jpg"
                  alt="New Balance"
                />
              </div>
            </Col>
            <Col md={2}>
              <div className="img-container">
                <img
                  className="img-fluid"
                  src="https://images.footlocker.com/content/dam/final/FootLockerInc/site/evergreen/brand-6up-nike-jordan.jpg"
                  alt="Nike & Jordan"
                />
              </div>
            </Col>
            <Col md={2}>
              <div className="img-container">
                <img
                  className="img-fluid"
                  src="https://images.footlocker.com/content/dam/final/FootLockerInc/site/evergreen/brand-6up-adidas.jpg"
                  alt="Adidas"
                />
              </div>
            </Col>
            <Col md={2}>
              <div className="img-container">
                <img
                  className="img-fluid"
                  src="https://images.footlocker.com/content/dam/final/FootLockerInc/site/evergreen/brand-6up-hoka.jpg"
                  alt="Hoka"
                />
              </div>
            </Col>
            <Col md={2}>
              <div className="img-container">
                <img
                  className="img-fluid"
                  src="https://images.footlocker.com/content/dam/final/FootLockerInc/site/evergreen/brand-6up-on.jpg"
                  alt="On"
                />
              </div>
            </Col>
            <Col md={2}>
              <div className="img-container">
                <img
                  className="img-fluid"
                  src="https://images.footlocker.com/content/dam/final/FootLockerInc/site/evergreen/230908-fl-hp-ugg-timberland-brand-6up-ugg.jpg"
                  alt="UGG & Timberland"
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="home-big-imag">
        <Col>
          <div className="img-container">
            <img
              className="img-fluid"
              src="https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2023/october/231016-fl-hoka-overcast-1up.jpg"
              alt="Hoka Overcast Pack"
            />
          
          </div>
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
          <h3 style={{fontFamily:'fantasy'}}>New shoues Arrival</h3>
        </Col>
      </Row>

      <Row className="new-shoues-araivals">
        <Col md={2}>
          <div className="img-container">
            <img
              className="img-fluid"
              src="https://images.footlocker.com/content/dam/final/footlocker/site/homepage/20200306-Nike-Air-Force-1-Restock-6up.jpg"
              alt="Nike Air Force 1"
            />
            <a className="home-image-list-text" onClick={()=>navigate("/allcatogory")}  style={{textDecoration:'none', fontFamily:"fantasy" ,color:'black'}}>
              New Arrival
            </a>
          </div>
        </Col>
        <Col md={2}>
          <div className="img-container">
            <img
              className="img-fluid"
              src="https://images.footlocker.com/content/dam/final/FootLockerInc/site/new-arrivals/new-arrival-6up-Z0790161.jpg"
              alt="New Arrival"
            />
            <a className="home-image-list-text"  onClick={()=>navigate("/allcatogory")} style={{textDecoration:'none', fontFamily:"fantasy" ,color:'black'}}>
              New Arrival
            </a>
          </div>
        </Col>
        <Col md={2}>
          <div className="img-container">
            <img
              className="img-fluid"
              src="https://images.footlocker.com/content/dam/final/FootLockerInc/site/new-arrivals/new-arrival-6up-26276001.jpg"
              alt="New Arrival"
            />
            <a className="home-image-list-text" onClick={()=>navigate("/allcatogory")} style={{textDecoration:'none', fontFamily:"fantasy" ,color:'black'}}>
              New Arrival
            </a>
          </div>
        </Col>
        <Col md={2}>
          <div className="img-container">
            <img
              className="img-fluid"
              src="https://images.footlocker.com/content/dam/final/FootLockerInc/site/new-arrivals/new-arrival-6up-IF6679.jpg"
              alt="New Arrival"
            />
            <a className="home-image-list-text"  onClick={()=>navigate("/allcatogory")} style={{textDecoration:'none', fontFamily:"fantasy" ,color:'black'}}>
              New Arrival
            </a>
          </div>
        </Col>
        <Col md={2}>
          <div className="img-container">
            <img
              className="img-fluid"
              src="https://images.footlocker.com/content/dam/final/FootLockerInc/site/new-arrivals/new-arrival-6up-28825411.jpg"
              alt="New Arrival"
            />
            <a className="home-image-list-text" onClick={()=>navigate("/allcatogory")} style={{textDecoration:'none', fontFamily:"fantasy" ,color:'black'}}>
              New Arrival
            </a>
          </div>
        </Col>
        <Col md={2}>
          <div className="img-container">
            <img
              className="img-fluid"
              src="https://images.footlocker.com/content/dam/final/FootLockerInc/site/new-arrivals/new-arrival-6up-D9082102.jpg"
              alt="New Arrival"
            />
            <a className="home-image-list-text" onClick={()=>navigate("/allcatogory")} style={{textDecoration:'none', fontFamily:"fantasy" ,color:'black'}}>
              New Arrival
            </a>
          </div>
        </Col>
      </Row>

      <Row className="tree-images-body">
        <Col>
          <div className="img-container">
            <img
              className="img-fluid"
              src="https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2023/september/230907-fl-homepage-foot-locker-exclusives-3up.jpg"
              alt="Foot Locker Exclusives"
            />
          </div>
        </Col>
        <Col>
          <div className="img-container">
            <img
              className="img-fluid"
              src="https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2023/may/230526-Homepage-Launch-Running-Exclusives-3up.jpg"
              alt="Upcoming Launches & New Arrivals"
            />
          </div>
        </Col>
        <Col>
          <div className="img-container">
            <img
              className="img-fluid"
              src="https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2023/september/230907-fl-hp-running-shop-3up.jpg"
              alt="Running"
            />
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3 style={{fontFamily:'fantasy'}}>Foot Locker Exclusives</h3>
        </Col>
        <Col>
          <h3 style={{fontFamily:'fantasy'}}>Upcoming Launches & New Arrivals</h3>
        </Col>
        <Col>
          <h3 style={{fontFamily:'fantasy'}}>Running</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Baner;
