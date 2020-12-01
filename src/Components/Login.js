import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import './Login.css';
import { auth, provider, storeAuthToken } from '../Assets/firebase';
import { UserContext } from '../App';



const Login = () => {
    //LoggedIn User State
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    //Google SignIn
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { name: displayName, email, image: photoURL };
                setLoggedInUser(signedInUser);
                storeAuthToken();
            })
            .catch(err => alert(err.message));
    };

    return (
        <div className="login">
            <div className="login-container">
                <img src="https://media.istockphoto.com/vectors/mobile-phone-circle-icon-with-long-shadow-flat-design-style-vector-id871717484?b=1&k=6&m=871717484&s=612x612&w=0&h=8R5AxvfI2t5f1S8z1isd6uy02lYTmbaxbRPNFWiA5Ek=" alt="Logo" />
                <div className="login-text">
                    <h1>Instant Messaging App</h1>
                </div>
                <Button onClick={signIn}>
                    Sign In with Google to Start Using
                </Button>
            </div>
        </div>
    );
};

export default Login;