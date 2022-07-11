import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { NavDropdown, Nav, Navbar, Container } from 'react-bootstrap'
import { app } from '../utils/firebase'





const Header = props => {


    const auth = getAuth(app);
    const [isLogged, setIsLogged] = useState(auth.currentUser);
    let navigate = useNavigate();


    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {

                setIsLogged(() => auth.currentUser);


                // ...
            } else {

                setIsLogged(() => auth.currentUser);
            }
        });
    }, [isLogged, auth])



    const logout = (e) => {
        e.preventDefault();


        signOut(auth).then(() => {
            setIsLogged(() => auth.currentUser);
            navigate("/login", { replace: true });
        }).catch((error) => {

        });

    }




    return <>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to="/" ><Navbar.Brand> Expense-Manager</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/expenses' href="#features">Expenses</Link>
                        <Link to='/tools'>Tools</Link>

                    </Nav>
                    <Nav>
                        {!isLogged ? <Link to="/login">Login</Link> : ''}
                        {!isLogged ? <Link to="/register">Register</Link> : ''}
                        {isLogged ? <Nav.Link onClick={logout} eventKey={2} href="#memes">Logout </Nav.Link> : ''}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </>
}

export default Header;