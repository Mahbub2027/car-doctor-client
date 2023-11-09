import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingsRow from "./BookingsRow";
import axios from "axios";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        axios.get(url, {withCredentials: true})
        .then(res=> {
            setBookings(res.data)
        })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
    }, [url])

    const handleDeletebtn= id =>{
        const proceed = confirm("Are you sure you want to Delete?")
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`,{
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data=> console.log(data))
            const remaining = bookings.filter(booking=> booking._id !== id)
            setBookings(remaining)
        }
    }

    const handleUpdateConfirm= id =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            confirm('Are you confirm the order?')
            if(data.modifiedCount > 0){
                //
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status= 'confirm';
                const newBooking = [updated, ...remaining]
                setBookings(newBooking);
            }
        })
    }

    return (
        <div>
            <h2 className="text-4xl">My Bookings: {bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                {/* <button className="btn btn-circle btn-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button> */}
                            </th>
                            <th>Image</th>
                            <th>Category</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map(booking => <BookingsRow
                                key={booking._id}
                                booking={booking}
                                handleDeletebtn={handleDeletebtn}
                                handleUpdateConfirm={handleUpdateConfirm}
                            ></BookingsRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;