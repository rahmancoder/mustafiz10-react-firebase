import React from 'react';
import { Card, Button } from 'react-bootstrap';

const SingleDoctor = (props) => {

    console.log(props.people);
    const { picture, doctor_name, doctor_speciality, about } = props.people || {};
    return (
        <div className="col-md-4 mt-4">
            <Card style={{ width: '18rem', height: '100%' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title><span className="text-warning"> Instructor Name:-</span> {doctor_name}</Card.Title>
                    <Card.Text>


                        <span className="text-info"> About Course:-</span> : {about}
                    </Card.Text>
                    <Card.Title><span className="text-danger font-weight-bold"> Experience-</span>:{doctor_speciality}</Card.Title>

                    <Button variant="info">More Infromation</Button>
                </Card.Body>
            </Card>


        </div>
    );
};

export default SingleDoctor;