import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const CheckOut = () => {
    const {user} = useContext(AuthContext);
    const service = useLoaderData();
    const { title, price, _id,img } = service;

    const handleBookOrder= e =>{
        e.preventDefault();
        const form  = e.target;
        const name= form.name.value;
        const date= form.date.value;
        const email= user?.email;
        const order={
            CustomerName : name,
            email,
            img,
            date,  
            service: title,
            service_id: _id,
            price: price

        }
        console.log(order);

        fetch('http://localhost:5000/bookings',{
            method: 'POSt',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
        })

    }
    return (
        <div>
            <h2>Title: {title}</h2>
            <h2>Price: {price}</h2>
            <div>
                <form onSubmit={handleBookOrder} className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email"  defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="number" name="amount" defaultValue={price} className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        {/* <button className="btsn btn-primary">Login</button> */}
                        <input className="btn btn-primary" type="submit" value='Order now' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;