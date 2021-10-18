// import React, { useEffect } from 'react';
import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const SingleDoctorInfo = () => {

    let { doctorId } = useParams();
    // const [servicedetails, setServiceDetails] = useState();

    // useEffect(() => {
    //     fetch('/doctors.json')

    // }, [])

    return (
        <div className="text-center">
            <h2>this is Doctor Index ID: {doctorId}</h2>
            <p><Link to="/doctors">View All Doctors</Link></p>

        </div>
    );
};

export default SingleDoctorInfo;