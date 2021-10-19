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

            <div className="text-center">
                <h1 className="text-danger"> Our Services</h1>
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