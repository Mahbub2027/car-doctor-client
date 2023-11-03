import img1 from '../../../assets/images/team/1.jpg';
import img2 from '../../../assets/images/team/2.jpg';
import img3 from '../../../assets/images/team/3.jpg';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';

const Team = () => {
    return (
        <div className='my-10'>
            <div className='text-center space-y-3'>
                <h2 className='text-xl text-[#FF3811] font-bold'>Team</h2>
                <h2 className='text-4xl font-bold'>Meet Our Team</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10'> 
                <div className="card  bg-base-100 border-2">
                    <figure><img className=' p-2' src={img1} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="text-2xl font-bold">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className="card-actions justify-center text-3xl my-2">
                            <a href=""><BsFacebook></BsFacebook></a>
                            <a href=""><AiFillTwitterCircle></AiFillTwitterCircle></a>
                            <a href=""><BsLinkedin className='rounded-full'></BsLinkedin></a>
                            <a href="" ><FaInstagramSquare className='rounded-full'></FaInstagramSquare></a>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 border-2">
                    <figure><img className=' p-2' src={img2} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="text-2xl font-bold">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className="card-actions justify-center text-3xl my-2">
                            <a href=""><BsFacebook></BsFacebook></a>
                            <a href=""><AiFillTwitterCircle></AiFillTwitterCircle></a>
                            <a href=""><BsLinkedin className='rounded-full'></BsLinkedin></a>
                            <a href="" ><FaInstagramSquare className='rounded-full'></FaInstagramSquare></a>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 border-2">
                    <figure><img className=' p-2' src={img3} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="text-2xl font-bold">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className="card-actions justify-center text-3xl my-2">
                            <a href=""><BsFacebook></BsFacebook></a>
                            <a href=""><AiFillTwitterCircle></AiFillTwitterCircle></a>
                            <a href=""><BsLinkedin className='rounded-full'></BsLinkedin></a>
                            <a href="" ><FaInstagramSquare className='rounded-full'></FaInstagramSquare></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;