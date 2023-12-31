import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';


const About = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-20 top-1/2 border-white border-8 rounded-lg shadow-xl" />
                </div>
                <div className='lg:w-1/2 space-y-3'>
                    <h1 className="text-2xl font-bold text-[#FF3811]">About Us</h1>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-3">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className=" bg-[#FF3811] text-white font-semibold p-3 rounded-lg">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;