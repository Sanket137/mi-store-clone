import React from "react";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = ({ start }) => {
  return (

    <Carousel fade>
      {start.map((e, i) => (
      <Carousel.Item key={i}>
        <img
          className="d-block w-100"
          src={e}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
      </Carousel>
    
    // <Carousel fade>
    //   {start.map((e, i) => (
    //     <Carousel.Item key={i}>
    //       <img className="d-block w-100" src={e}  alt="items" />
    //     </Carousel.Item>
    //   ))}
    // </Carousel>


  );
};

export default Slider;
