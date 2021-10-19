import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleDoctor = (props) => {

    console.log(props.people);
    const { index, picture, doctor_name, doctor_speciality } = props.people || {};
    return (
        <div className="col-md-4 mt-4">
            <Card style={{ width: '18rem', height: '100%' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title><span className="text-warning"> Doctor Name-</span> {doctor_name}</Card.Title>
                    <Card.Text>


                        {/* <span className="text-info"> About Doctor:-</span> : {about} */}
                    </Card.Text>
                    <Card.Title><span className="text-danger font-weight-bold"> Speciality-</span> {doctor_speciality}</Card.Title>
                    <Link to={`/booking/${index}`}>
                        <Button variant="warning">More Infromation</Button>
                    </Link>
                </Card.Body>
            </Card>


        </div>
    );
};

export default SingleDoctor;