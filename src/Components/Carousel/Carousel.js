import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

function Carouselcomp({ newsFeed }) {
  return (
    <Carousel>
      {newsFeed.map((x, i) =>
        <Carousel.Item key={i}>
          <a target="_blank" rel="noopener noreferrer" href={x.url}>
            <Image
              width="1200px"
              height="550px"
              src={x.urlToImage}
              alt="Article"
            /></a>
          <Carousel.Caption>
            <h3>{x.title}</h3>
            <p>{x.description}</p>
          </Carousel.Caption>
        </Carousel.Item>)}
    </Carousel>)
}

export default Carouselcomp;