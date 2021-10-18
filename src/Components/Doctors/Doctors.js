import React, { useEffect, useState } from 'react';
import SingleDoctor from '../SingleDoctor/SingleDoctor';

const Doctors = () => {

    const [alldoctor, setAlldoctor] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setAlldoctor(data));

    }, [])

    return (
        <div className="text-center">
            <h1> Our Doctors</h1>
            <p> Creat json doctors and fetch here and show their experience and photo with a button</p>

            <div className="row m-3">

                {
                    alldoctor.slice(0, 6).map(people =>
                        <SingleDoctor
                            key={people.index}
                            people={people}

                        ></SingleDoctor>

                    )
                }

            </div>

        </div>
    );
};

export default Doctors;