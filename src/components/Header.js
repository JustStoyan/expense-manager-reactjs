import { Link } from "react-router-dom";

const Header = props => {
    return <>

        <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>

        </nav>


    </>
}

export default Header;