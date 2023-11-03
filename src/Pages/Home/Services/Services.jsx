import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div className="my-12 ">
            <div className="text-center space-y-3 mb-10">
            <h3 className="text-2xl font-bold text-[#FF3811] ">Service</h3>
            <h2 className="text-4xl font-bold">Our Service Area</h2>
            <p className="">The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            {/* <h2>Services: {services.length}</h2> */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;