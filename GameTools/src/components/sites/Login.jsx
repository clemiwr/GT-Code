import React, { useState } from 'react';
import { login, signup } from '../../firebase';
function Login(props) {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const HandleClick = (event) => {
        event.preventDefault();

        const authPromise = isLogin ? login(email, password) : signup(email, password);
        isLogin ? console.log('login') : console.log('signup');
        authPromise.then(() => {
            props.isSignedIn(true);
        }).catch((error) => {
            console.error("Authentication failed:", error);
        });
    }

    const toggleMode = () => {
        setIsLogin(!isLogin);
    };

    return (
        <>
            <div>
                <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
                <form onSubmit={HandleClick}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>
                <button onClick={toggleMode}>
                    Switch to {isLogin ? 'Sign Up' : 'Login'}
                </button>
            </div>
        </>
    );
}

export default Login;