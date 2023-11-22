import {Outlet, Link} from "react-router-dom";

const Nav = () => {
    return(
        
        <div className="">
            
            <ul className="ul">
                <li className="li">Welcome to My Blog</li>
                <li className="li_a">
                    <Link to="/contact" className="White_text">Contact</Link>
                </li>
                <li className="li_a">
                    <Link to="/About" className="White_text">About</Link>
                </li>
                <li className="li_a">
                <Link to="/" className="White_text">Home</Link>
                </li>
            </ul>
        </div>
        
    );
}

export default Nav;