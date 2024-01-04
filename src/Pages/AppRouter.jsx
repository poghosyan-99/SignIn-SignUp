import { Route, Routes, useNavigate } from "react-router";
import { useEffect, useState } from 'react';
import { sendRequest } from "../Hook/sendRequest";
import { USERS_URL } from "../Api/URL";

import Layout from "./layout";
import LogIn from "./logIn";
import SignUp from "./signUp";
import Validation from "./validation";
import UserPageLayout from "./userPageLayout";
import HomePage from "./homePage";

const AppRouter = () => {
    const navigate = useNavigate();
    const [usersData, setUsersData] = useState([]);
    const { sendRequestGet } = sendRequest();
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("authUser")));
    const [validationData, setValidationData] = useState([]);
    const [isValidNum, setIsValidNum] = useState(JSON.parse(localStorage.getItem("isValidNum")));

    console.log(authUser);

    useEffect(() => {
        async function request() {
            const result = await sendRequestGet(USERS_URL);
            setUsersData(result);
        }
        request();
        if (!authUser) {
            navigate('/');
        }
    }, []);

    useEffect(() => {
        async function request() {
            const result = await sendRequestGet(USERS_URL);
            setValidationData(result);
        }
        request();
        if (!isValidNum) {
            navigate('/');
        }
    }, []);

    return (
        <div className="">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<LogIn usersData={usersData} setAuthUser={setAuthUser} />} />
                    <Route path="/SignUp" element={<SignUp/>}/>
                    <Route path="/Validation" element={<Validation validationData={validationData} setIsValidNum={setAuthUser} />}/>
                </Route>
                {authUser && (
                    <Route path="UserPageLayout" element={<UserPageLayout/>} >
                        <Route index element={<HomePage/>} />
                    </Route>
                )}
                {isValidNum && (
                    <Route path="UserPageLayout" element={<UserPageLayout/>} >
                        <Route index element={<HomePage/>} />
                    </Route>
                )}
            </Routes>
        </div>
    );
};

export default AppRouter;
























