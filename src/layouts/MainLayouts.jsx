import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Blogs from "../pages/Blogs";
import Bookmarks from "../pages/Bookmarks";
import Home from "../pages/Home";
import Footer from "../components/Footer";


const MainLayouts = () => {
    return (
        <div>
            <div className="h-16">
              <Nav/>
              
            </div>
            <div className='min-h-[calc(100vh-116px)]'>
            <Outlet/>
            </div>
            <Footer/>
            
        </div>
    );
};

export default MainLayouts;