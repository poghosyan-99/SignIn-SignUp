import { Outlet } from "react-router";
import Menu from "../Components/menu";

const UserPageLayout = () => {
    return( 
        <div>
            <Menu/>
            <Outlet/>
        </div>
    )
}
export default UserPageLayout;