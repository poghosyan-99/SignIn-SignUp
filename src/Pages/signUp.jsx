import { useState } from 'react';
import { useNavigate } from 'react-router';
import { sendRequest } from "../Hook/sendRequest";
import { USERS_URL } from "../Api/URL";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; 
import Test2 from "../Images/img2.png";

const SignUp = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (value) => {
        setPhoneNumber(value);
    };

    const [day, setDay] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted:', { day, year });
    };

    const navigate = useNavigate();

    const navigateToLogIn = () => {
        navigate('/'); 
    };

    const {sendRequestPost} = sendRequest();
    const signUpNewUser = async (e) => {
        e.preventDefault();
        const { nameSurname, phone, bDay, monthYear } = e.target;

        const newData = {
            id: new Date().getTime().toString(),
            nameSurname: nameSurname.value,
            phone: phone.value,
            bDay: bDay.value,
            monthYear: monthYear.value
        };

        const result = await sendRequestPost(USERS_URL, newData);
        console.log(result)
        if(result){
            navigate1('/Validation');
        }
    };

    const navigate1 = useNavigate();

    return (
        <div className="flex items-center justify-center bg-gray-100 p-6 md:p-10">
            <form onSubmit={signUpNewUser} className="flex flex-col md:flex-row items-center w-full bg-white p-6 md:p-10">
                <div className="flex-1 md:items-center md:q-full">
                    <h1 className="text-center text-4xl md:text-5xl">TEST LOGO</h1>
                    <img src={Test2} alt="img2" className="pt-4 md:pt-10" />
                </div>
                <div className="flex-2 w-full md:w-3/6 rounded-xl shadow-xl bg-white">
                    <div className="flex-3 w-full bg-gray-100 rounded-xl">
                        <p className="w-1/2 h-3 bg-green-100 rounded-xl"></p>
                    </div>
                    <div className="flex-4 p-5 md:p-10">
                        <h2 className="text-center text-lg font-bold mb-10 md:mb-20">Գրանցվել համակարգում</h2>
                        <label className="">
                            <h3 className="mt-5 mx-1 text-gray-500">Անուն Ազգանուն</h3>
                            <input type="text" name="nameSurname" required className="w-full my-1 border-2 border-gray-300 p-3 outline-none rounded-xl" />
                        </label>
                        <label className="">
                            <h3 className="mt-5 mx-1 text-gray-500">Հեռախոսահամար</h3>
                            <PhoneInput
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                                flags={{ am: 'am' }} 
                                name="phone"
                                className="w-full my-3 border-2 border-gray-300 p-3 outline-none rounded-xl"
                            />
                        </label>
                        <label className="">
                            <h3 className="mt-5 mx-1 text-gray-500">Ծննդյան օրը</h3>
                            <div className='w-full flex flex-col md:flex-row items-center justify-center gap-5'>
                                <input type="number" name='bDay'  min={1} max={31} placeholder='Օր' className='w-full md:w-32 border-2 mt-5 p-2 rounded-lg'/>
                                <input type="month" name='monthYear'  placeholder='Ամիս Տարի' className='w-full md:w-64 p-2 mt-5 border-2 rounded-lg'/>
                            </div>
                        </label>
                        <button className="bg-gray-400 text-white p-4 w-full rounded-lg mt-6" >Ստեղծել հաշիվ</button>
                        <h4 className="text-gray-500 text-center mt-10">
                            Արդեն ունե՞ք հաշիվ:{" "}
                            <span onClick={navigateToLogIn} className="text-orange-500 cursor-pointer underline">Մուտք գործել</span>{" "}
                        </h4>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
