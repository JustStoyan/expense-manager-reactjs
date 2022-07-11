import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../utils/firebase';
import { Link } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Register = props => {

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

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');


    const register = (e) => {
        e.preventDefault();


        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {


            })
            .catch(err => {
                notify(err.message);
            })

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setRepeatPassword('');

    }
    return <>

        <Form className="col-md-3 mx-auto ">
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} placeholder="Repeat Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I've read the terms and conditions and I agree to them." />
            </Form.Group>


            <Button variant="primary" type="submit" onClick={register}>
                Register
            </Button>

            <p>Already a user? <Link to="/login">Login</Link></p>
        </Form>

    </>
}

export default Register;