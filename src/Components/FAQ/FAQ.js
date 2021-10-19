import React from 'react';
import { Accordion } from 'react-bootstrap';
import logoquestions from '../../images/logoquestions.jpg'

const FAQ = () => {
    return (
        <div className="row d-flex mt-5">

            <div className="col-md-5">
                <img className="logoquestions w-100 mx-2" src={logoquestions} alt="" />
            </div>

            <div className="col-md-7">


                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>HealthCare Online and Support?</Accordion.Header>
                        <Accordion.Body>
                            Online care or an e-visit is a way of obtaining medical care for problems which do not require a physical examination and which do not require treatment beyond a prescription available online or diagnostic tests beyond blood tests                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>How can I get the Services?</Accordion.Header>
                        <Accordion.Body>
                            Healthcare services have been defined to mean any service by way of diagnosis or treatment or care for illness, injury, deformity, abnormality or pregnancy in any recognised system of medicines                        </Accordion.Body>
                    </Accordion.Item>



                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Emergency Services ?</Accordion.Header>
                        <Accordion.Body>
                            <h1> Diagonosis </h1>
                            <h1> Therapy </h1>
                            <h1> LAB Test </h1>
                            <h1> Emergency </h1>
                            <h1> Online Doctors </h1>
                            <h1> Medicine  </h1>
                            <h1> Vaccine Information  </h1>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header> Our Speciality and  About Doctors?</Accordion.Header>
                        <Accordion.Body>
                            A doctor is a person with extensive knowledge in the domain of medical science, who applies and dedicates his knowledge to identify the medical problem faced by the patient and then uses his skill to prevent or cure it                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default FAQ;