import React from 'react';
import carusal_1 from '../../assets/Carusal_1.jpg';
import carusal_2 from '../../assets/Carusal_2.jpg';
import carusal_3 from '../../assets/Carusal_3.jpg';

const Banar = () => {
    return (
        <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <img class="w-full h-96 justify-items-center" src={carusal_1}/>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">❮</a> 
            <a href="#slide2" class="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" class="carousel-item relative w-full">
        <img class="w-full h-96" src={carusal_2}/> 
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">❮</a> 
            <a href="#slide3" class="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" class="carousel-item relative w-full">
        <img class="w-full h-96" src={carusal_3}/>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">❮</a> 
            <a href="#slide4" class="btn btn-circle">❯</a>
          </div>
        </div> 
      </div>
    );
};

export default Banar;