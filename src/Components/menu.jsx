import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import User from "../Pages/user";


const Menu = () => {

    const [isShowUser, setIsShowUser] = useState(false);
    const { state } = useLocation();

    const showUser = () => {
        setIsShowUser(!isShowUser);
    };


    return (
        <div className="w-full h-20 z-1000 opacity-70">
            <nav className="p-4 bg-sky-900 flex justify-evenly  items-center text-white cursor-pointer font-bold">
                <h1 className="text-4xl cursor-pointer">Logo</h1>
                <Link to="/Link1" className="text-xl no-underline" state={state} >Link1</Link>
                <Link to="/Link2" className="text-xl no-underline">Link2</Link>
                <Link to="/Link3" className="text-xl no-underline">Link3</Link>
                <Link to="/Link4" className="text-xl no-underline">Link4</Link>
                {isShowUser && <User />}
                <i onClick={showUser} className="fa-solid fa-user text-2xl"></i>
            </nav>
        </div>
    );
};

export default Menu;
