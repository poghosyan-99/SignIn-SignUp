import { useLocation, useNavigate } from 'react-router';
import UserImg from "../Images/user.png";

const User = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem("authUser");
        navigate("/");
    }

    return (
        <div className='absolute top-10 mt-20 right-5 w-370 h-auto bg-opacity-30 backdrop-filter backdrop-blur-2 z-1 rounded-xl border-2 border-gray-200 shadow-xl p-10'>
            <div className=''>
                <div className='w-full md:w-60 bg-white text-black rounded shadow-md'>
                    <img src={UserImg} alt='UserImg' className='md:w-auto' />
                    <h2 className='text-left text-lg px-2 py-1'>Name: {state?.name}</h2>
                    <h2 className='text-left text-lg px-2 py-1'>Email: {state?.email}</h2>
                    <h2 className='text-left text-lg px-2 py-1'>Phone: {state?.phone}</h2>
                </div>
            </div>
            <button className='mt-4 md:mt-8 bg-sky-900 rounded-full px-4 py-2 ' onClick={logOut}>
                <h2 className='text-white bg-sky-900 font-bold'>Log Out</h2>
            </button>
        </div>
    );
};

export default User;
