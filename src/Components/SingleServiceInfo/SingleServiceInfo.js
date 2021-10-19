import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import SingleServiceDetails from '../SingleServiceDetails/SingleServiceDetails';

const SingleServiceInfo = () => {
    let { serviceId } = useParams();
    const [servicedetails, setServiceDetails] = useState([]);

    useEffect(() => {
        fetch('/Allservices.json')
            .then(res => res.json())
            // .then(data => setServiceDetails(data.services))
            // .then(data => console.log(data))
            .then(data => setServiceDetails(data))

    }, [])

    useEffect(() => {

        const found = servicedetails.find(d => d.index == serviceId)
        console.log('found', found);


    }, [servicedetails, serviceId])


    return (
        <div className="text-center">
            <h2 className="text-danger">Service Index: {serviceId}</h2>

            <h2 className="text-success">Service Name: {servicedetails[serviceId]?.service_name}</h2>
            <h2 className="text-warning">About This Service- {servicedetails[serviceId]?.about}</h2>
            <img src={servicedetails[serviceId]?.service_picture} alt="" />


            <div className="text-center">
                <h1> Our Services</h1>
                <p>Get a Services from Us Now?</p>
                <p><Link to="/services">View All Services</Link></p>
                {/* <div className="row m-3">

                    {
                        servicedetails.map(people =>
                            <SingleServiceDetails
                                key={people.index}
                                people={people}

                            ></SingleServiceDetails>

                        )
                    }

                </div> */}
            </div>

        </div>
    );
};

export default SingleServiceInfo;