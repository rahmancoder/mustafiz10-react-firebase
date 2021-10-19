import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleService = (props) => {
    console.log(props.people);
    const { index, service_picture, service_name, doctor_reffered } = props.people || {};
    return (
        <div className="col-md-4 mt-4">
            <Card style={{ width: '18rem', height: '100%' }}>
                <Card.Img variant="top" src={service_picture} />
                <Card.Body>
                    <Card.Title><span className="text-warning"> Service Name-</span> {service_name}</Card.Title>
                    <Card.Text>


                        {/* <span className="text-info"> About Doctor:-</span> : {about} */}
                    </Card.Text>
                    <Card.Title><span className="text-danger font-weight-bold"> Speciality-</span> {doctor_reffered}</Card.Title>
                    <Link to={`/servicebooking/${index}`}>
                        <Button variant="info">Add this Service</Button>
                    </Link>
                </Card.Body>
            </Card>


        </div>
    );
};

export default SingleService;