import { Outlet, Link } from "react-router-dom";
import "./App.css";

const Layout = () => {
    return (
        <>
            <nav className="nav-container">
                <Link to="/" className="nav-button">Quote of the Day</Link>
                <Link to="/Body" className="nav-button">Search Quote</Link>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;