import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import Test1 from "../Images/img1.png";


const LogIn = ( { usersData, setAuthUser } ) => {
    
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const navigate1 = useNavigate();

    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const navigateToSignUpPage = () => {
        navigate('/SignUp'); 
    };
 
    const checkLoginData = (e) => {
        e.preventDefault();
        const {email, password} = e.target;
        const currentUser = usersData.find((user) => (user.email === email.value || user.puassword === email.value) && user.password === password.value) || null;
        if(currentUser){
            navigate1('/UserPageLayout', {state:currentUser});
            setAuthUser(true);
            localStorage.setItem('authUser', true);
        }
    }

    return (

        <div className="flex items-center justify-center bg-gray-100 p-6 md:p-10">
            <form onSubmit={checkLoginData} className="flex flex-col md:flex-row items-center w-full bg-white p-6 md:p-10">
                <div className="flex-1 md:items-center md:q-full">
                    <h1 className="text-center text-4xl md:text-5xl">TEST LOGO</h1>
                    <img src={Test1} alt="img1" className="p-5 md:p-10 mb-2 md:mb-30" />
                </div>
                <div className="flex-2 w-full md:w-3/6 rounded-xl shadow-xl bg-white">
                    <div className="flex-3 w-full bg-gray-100 rounded-xl">
                        <p className="w-1/4 h-3 bg-green-100 rounded-xl"></p>
                    </div>
                    <div className="flex-4 p-5 md:p-10">
                        <h2 className="text-center text-lg font-bold mb-10 md:mb-20">Մուտք գործել համակարգ</h2>
                        <label className="flex items-center justify-center md:w-full mb-4 border-2 border-gray-300 p-4 rounded-xl">
                            <i className="fa-brands fa-facebook text-blue-500"></i>
                            <button className="mx-5 text-gray-500">Facebook մուտք</button>
                        </label>
                        <label className="flex items-center justify-center md:w-full mb-4 border-2 border-gray-300 p-4 rounded-xl">
                            <i className="fa-brands fa-google mx-30 text-red-600"></i>
                            <button className="mx-5 text-gray-500">Google մուտք</button>
                        </label>
                        <div className="my-7 flex items-center">
                            <div className="flex-1 border-t-2 border-gray-300"></div>
                            <div className="mx-4 text-gray-400">Կամ</div>                    
                            <div className="flex-1 border-t-2 border-gray-300"></div>
                        </div>
                        <h4 className="text-base text-gray-500 text-center">Մուտքագրեք Ձեր էլ. փոստը և գաղտնաբառը:</h4>
                        <label className="">
                            <h3 className="mt-5 mx-1 text-gray-500">Էլ. փոստ</h3>
                            <input type="email" id="email" name="email" required className="w-full my-3 border-2 border-gray-300 p-3 outline-none rounded-xl" />
                        </label>
                        <label htmlFor="password" className="">
                            <h3 className=" mx-1 text-gray-500">Գաղտնաբառ</h3>
                            <div className="md:w-full my-3 p-3 border-2 border-gray-300 rounded-xl flex justify-between items-center">
                                <input
                                    type={showPassword ? 'text' : 'password'} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    id="password" name="password" 
                                    required
                                    className="outline-none flex" 
                                />
                                <FontAwesomeIcon
                                    icon={showPassword ? faEyeSlash : faEye}
                                    className="eye-icon text-gray-500 cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                />
                            </div>
                        </label>
                        <h4 className="text-right text-gray-500 cursor-pointer">Մոռացե՞լ եք գաղտնաբառը:</h4>
                        <button className="bg-gray-400 text-white p-4 w-full rounded-lg mt-6">Մուտք գործել</button>
                        <h4 className="text-gray-500 text-center mt-10">
                            Առաջին անգա՞մ եք հարթակում:{" "}
                            <span onClick={navigateToSignUpPage} className="text-orange-500 cursor-pointer underline">Գրանցվել</span>{" "}
                        </h4>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LogIn;
