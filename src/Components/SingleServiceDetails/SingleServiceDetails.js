import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleServiceDetails = (props) => {
    console.log(props.people);
    const { index, service_picture, service_name, doctor_reffered, about } = props.people || {};
    return (
        <Card style={{ width: '18rem', height: '100%' }}>
            <Card.Img variant="top" src={service_picture} />
            <Card.Body>
                <Card.Title><span className="text-warning"> Service Name-</span> {service_name}</Card.Title>
                <Card.Text>


                    <span className="text-info"> About Service:-</span> : {about}
                </Card.Text>
                <Card.Title><span className="text-danger font-weight-bold"> Specialist-</span> {doctor_reffered}</Card.Title>

            </Card.Body>
        </Card>
    );
};

export default SingleServiceDetails;