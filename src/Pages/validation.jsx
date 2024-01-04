import React, { useState } from 'react';
import Test3 from "../Images/img3.png";
import { useNavigate } from 'react-router';

const Validation = ({ validationData, setIsValidNum }) => {
const navigate = useNavigate();

const checkValidationNumber = (e) => {
    e.preventDefault();
    const {validationNum} = e.target;
    const isValid = validationData.find((n) => n.validationNum === validationNum.value) || null;
    if(isValid){
        navigate('/UserPageLayout', {state:isValid});
        setIsValidNum(true);
        localStorage.setItem('isValidNum', true);
    }else{
        alert('Invalid validation number. Please try again.');
    }
};

    return (
        <div className="flex items-center justify-center bg-gray-100 p-6 md:p-10">
            <form onSubmit={checkValidationNumber}  className="flex flex-col md:flex-row items-center w-full bg-white p-6 md:p-10">
                <div className="flex-1 md:items-center md:q-full">
                    <h1 className="text-center text-4xl md:text-5xl">TEST LOGO</h1>
                    <img src={Test3} alt="img3" className="pt-4 md:pt-10" />
                </div>
                <div className="flex-2 md:w-3/6 rounded-xl shadow-xl bg-white mt-4 md:mt-0">
                    <div className="flex-3 md:w-full bg-gray-100 rounded-xl">
                        <p className="w-3/4 h-3 bg-green-100 rounded-xl"></p>
                    </div>
                    <div className="flex-4 p-4 md:p-10">
                        <h2 className="text-center text-xl md:text-2xl font-bold p-4 md:p-8">TEST LOGO</h2>
                        <h2 className="text-center text-lg font-bold">Վավերացրեք Ձեր էլ. փոստը</h2>
                        <p className="text-center text-base font-normal text-gray-700 p-2 md:p-5 leading-7">Ողջույն Անուն: Ստուգեք Ձեր փոստարկղը և սեղմեք հղումը` հա...</p>
                        <div className="flex p-2 md:p-3 w-full bg-gray-200 rounded-3xl flex justify-center md:w-full">
                            <input type="text" id="text" name="validationNum" placeholder="test@mail.ru" required className="outline-none bg-gray-200" />
                            <p className="text-gray-700 text-right cursor-pointer underline md:ml-2">Ուղարկե՞լ կրկին</p>
                        </div>
                        <h3 className="text-orange-500 text-center text-lg p-2 md:p-5 cursor-pointer underline">Փոխե՞լ էլ. փոստը</h3>
                        <p className="text-center text-base font-normal text-gray-700 p-2 md:p-3 leading-7 font-mardoto">Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit int...</p>
                        <button className="bg-gray-400 text-white p-3 md:p-4 w-full rounded-lg mt-2 md:mt-6">Առաջ</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Validation;
