import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const SingleServiceInfo = () => {
    let { serviceId } = useParams();
    // const [servicedetails, setServiceDetails] = useState();

    // useEffect(() => {
    //     fetch('/doctors.json')

    // }, [])


    return (
        <div className="text-center">
            <h2>this is Services Index ID: {serviceId}</h2>
            <p><Link to="/services">View All Services</Link></p>

        </div>
    );
};

export default SingleServiceInfo;