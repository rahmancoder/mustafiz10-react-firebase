import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';

const Services = () => {

    const [allservice, setAllservice] = useState([]);
    useEffect(() => {
        fetch('./Allservices.json')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setAllservice(data));

    }, [])

    return (
        <div className="text-center">
            <h1> Diagonosis </h1>
            <h1> Therapy </h1>
            <h1> LAB Test </h1>
            <h1> Emergency </h1>
            <h1> Online Doctors </h1>
            <h1> Medicine  </h1>
            <h1> Vaccine Information  </h1>
            <div className="text-center">
                <h1> Our Services</h1>
                <p>Get a Services from Us Now?</p>

                <div className="row m-3">

                    {
                        allservice.slice(0, 6).map(people =>
                            <SingleService
                                key={people.index}
                                people={people}

                            ></SingleService>

                        )
                    }

                </div>

            </div>

        </div>
    );
};

export default Services;