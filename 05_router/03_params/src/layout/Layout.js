import Header from "../components/Header";
import NavBar from "../components/Navbar";
import {Outlet} from "react-router-dom";

const Layout = ()=>{

    return(
        <>
            <Header/>
            <NavBar/>
            <Outlet/>
        </>
    )
}
export default Layout;