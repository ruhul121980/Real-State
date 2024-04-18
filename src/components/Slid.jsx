import React from 'react';

export default function Slid() {
  return (
    <div className="carousel w-full max-h-96">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/zZ7kWD3/frames-for-your-heart-2d4l-AQAlb-DA-unsplash.jpg" className="w-full h-auto" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a> 
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/nDqxkCx/brian-babb-Xbw-Hrt87m-Q0-unsplash.jpg" className="w-full h-auto" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a> 
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/5n7wdPV/sean-pollock-Ph-Yq704ffd-A-unsplash.jpg" className="w-full h-auto" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a> 
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/GRMtkm0/breno-assis-r3-WAWU5-Fi5-Q-unsplash.jpg" className="w-full h-auto" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a> 
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
}
