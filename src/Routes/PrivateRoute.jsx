import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user?.email){
        return children;
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;