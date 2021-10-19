import React from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../images/bannerimages/banner1.jfif';
import banner2 from '../../images/bannerimages/banner2.png';
import banner3 from '../../images/bannerimages/banner3.jfif';
import banner4 from '../../images/bannerimages/banner4.jpg';
import banner5 from '../../images/bannerimages/banner5.jpg';

const BannerBackground = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>HealthCare Services</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>HealthCare Support</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner5}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Doctors Support Online </h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BannerBackground;