import React from 'react';

const Footer = () => {
    return (
        <div className="bg-warning text-dark">
            <div className="d-flex  mt-4 ">
                <div className="col-md-5 mt-4 mx-3">
                    <h5>HealthCare Online & Support</h5>
                    <p>Online care or an e-visit is a way of obtaining medical care for problems which do not require a physical examination and which do not require treatment beyond a prescription available online or diagnostic tests beyond blood tests.</p>
                </div>
                <div className="mt-4">
                    <h5>CONTACT US</h5>
                    <p><i class="far fa-envelope-open"></i> EMAIL:onlinehealthcare@gmail.com</p>
                    <p><i class="fas fa-mobile-alt"></i> Phone:+8801871414746</p>
                    <p><i class="fas fa-map-marker-alt"></i> Address:Dhaka, Bangladesh</p>
                    <p><i class="fas fa-fax"></i> Fax:www.sayhemrahman.com</p>
                </div>
                <div className="mt-4">
                    <h5>INFORMATION</h5>
                    <p>Diagonosis</p>
                    <p>LAB Test</p>
                    <p>Treatment Guide</p>
                    <p>Online Doctors</p>

                </div>
                <div className="mt-4">
                    <h5>COMPANY</h5>
                    <p>Our Doctors</p>
                    <p>Specialize Doctor</p>
                    <p>Medicine</p>
                    <p>Diabates and Insuline</p>
                    <p>Exported Medicine</p>
                </div>

            </div>
            <hr />
            <p>Created by © MD Mustafizur Rahman  All rights reserved</p>

        </div>
    );
};

export default Footer;