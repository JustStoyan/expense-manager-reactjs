import { useState } from "react";
import { db } from '../utils/firebase';
import { collection, addDoc, } from 'firebase/firestore';
import { Link } from "react-router-dom";

const Register = props => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');


    const register = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, 'users'), {
                firstName,
                lastName,
                email,
                password
            })


        } catch (err) {
            console.log(err);
        }
        console.log('log was created');

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setRepeatPassword('');

    }
    return <form onSubmit={register}>
        <label>
            First Name:
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>

        <label>
            Last Name:
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>

        <label>
            E-mail:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>

        <label>
            Repeat Password:
            <input type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
        </label>

        <button type="submit">Register</button>
        <p>Already a user? <Link to="/login">Login</Link></p>

    </form>

}

export default Register;