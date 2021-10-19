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
        <div className="text-center text-info">
            <h1> Our Doctors</h1>
            <h3>  Doctor of osteopathic medicine (D.O.) is a fully trained and licensed doctor who has attended and graduated from a U.S. osteopathic medical school. A doctor of medicine (M.D.) has attended and graduated from a conventional medical school.
            </h3>
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