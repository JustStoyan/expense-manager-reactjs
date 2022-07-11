import { useRef } from "react";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { toast } from 'react-toastify';

const Login = () => {

    const notify = (message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,

        })
    }


    const email = useRef('');
    const password = useRef('');


    let navigate = useNavigate();

    const loginHandler = (e) => {
        e.preventDefault();

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then(userCreadential => {

                const currUser = userCreadential.user;
                localStorage.setItem('loggedEmail', currUser.email);
                navigate("/", { replace: true });

            }).catch(err => {

                notify(err.message)
            })


    }
    return <>
        <Form className="col-md-3 mx-auto ">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" ref={email} placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={password} placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={loginHandler}>
                Login
            </Button>
            <p>Already a user? <Link to="/register">Register</Link></p>
        </Form>


    </>
}

export default Login;