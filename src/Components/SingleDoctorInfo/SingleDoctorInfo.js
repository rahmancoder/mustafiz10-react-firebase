// import React, { useEffect } from 'react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const SingleDoctorInfo = () => {

    let { doctorId } = useParams();
    const [doctordetails, setDoctorDetails] = useState([]);

    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            // .then(data => setServiceDetails(data.services))
            // .then(data => console.log(data))
            .then(data => setDoctorDetails(data))

    }, [])



    useEffect(() => {

        const found = doctordetails.find(d => d.index == doctorId)
        console.log('found', found);


    }, [doctordetails, doctorId])

    return (
        <div className="text-center">
            <h2 className="text-danger">Doctor Index: {doctorId}</h2>

            <h2 className="text-success">Service Name: {doctordetails[doctorId]?.doctor_name}</h2>
            <h2 className="text-warning">About This Service- {doctordetails[doctorId]?.about}</h2>
            <img src={doctordetails[doctorId]?.picture} alt="" />

            <p className="mt-3"><Link to="/doctors">View All Doctors</Link></p>

        </div>
    );
};

export default SingleDoctorInfo;