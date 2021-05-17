import React from 'react';
import './Carousel.css';

import poor1 from '../../../img/img/1.png';
import poor2 from '../../../img/img/3.png';
import poor3 from '../../../img/img/3.png';
import poor4 from '../../../img/img/4.png';
import poor5 from '../../../img/img/5.png';




const Carousel = () => {
    return (

        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={poor1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={poor2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={poor3} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={poor4} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={poor5} class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;