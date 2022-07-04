import { useRef } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    let email = useRef('');
    let password = useRef('');

    const loginHandler = async (e) => {
        e.preventDefault();

        try {

            console.log(email.current.value);
            console.log(password.current.value);
        } catch (err) {
            console.log(err)
        }
    }
    return <>
        <form onSubmit={loginHandler}>

            <label>
                E-mail:
                <input type="email" ref={email} />
            </label>

            <label>
                Password:
                <input type="password" ref={password} />
            </label>

            <button type="submit">Login</button>

            <p>If you do not have an account, you can <Link to="/register">Register</Link></p>
        </form>

    </>
}

export default Login;