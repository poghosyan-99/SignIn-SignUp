import { Outlet } from 'react-router';

const Layout = () => {
    return(
        <div className="">
            <div>
                <Outlet/>
            </div>
        </div>
    )
}
export default Layout;