import { getAuth } from 'firebase/auth'
import { useEffect, useState } from 'react';
import { app } from '../utils/firebase'
import GuestView from './GuestView';
import LoggedView from './LoggedView';


const Home = props => {

    const auth = getAuth(app);
    const [isLogged, setIsLogged] = useState(auth.currentUser);


    useEffect(() => {
        let doesExist = auth.currentUser;
        setIsLogged(() => doesExist ? auth.currentUser.accessToken : null);
        console.log(auth.currentUser);
    }, [isLogged, auth])

    return <>

        {isLogged ? <LoggedView /> : <GuestView />}

    </>
}

export default Home;