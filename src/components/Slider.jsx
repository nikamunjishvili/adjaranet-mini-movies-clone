import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Wensday from './assets/wednsday.jpg'
import King from './assets/king.jpeg'
import Num from './assets/num.webp'
const Slider = () => {
  return (
    <Carousel fade style={{margin:10,width:"100%"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Wensday}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>WEDNSDAY</h3>
          <p>Serial</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={King}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>TULSA KING</h3>
          <p>Movie</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Num}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>1899</h3>
          <p>
            Movie
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider