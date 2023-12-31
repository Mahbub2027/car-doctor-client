import {AiOutlineArrowRight} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const {_id, img, title, price } = service;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img className="w-11/12 h-56" src={img} alt="Shoes" /></figure>
            <div className="p-5 ">
                <h2 className="card-title font-bold mb-2">{title}</h2>
                
                <div className="card-actions justify-between items-center text-[#FF3811] text-lg ">
                    <p className=" font-semibold">Price: ${price}</p>
                    <p className=''><AiOutlineArrowRight></AiOutlineArrowRight></p>
                    
                    {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
                <Link to={`/checkout/${_id}`}><button className='btn btn-warning'>Book now</button></Link>
            </div>
        </div>
    );
};

export default ServicesCard;