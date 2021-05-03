import React from 'react'
import history from '../../lib/history';
const params ={
    isLoggedIn: true,
}
export default function LoginView({...props}) {

    const onLogin = () =>{
        props.login(params);

        history.push({
            pathname: '/',
        });
    }


    return (
        <div>
            <h1>Login</h1>

            <button onClick={() => onLogin()} > Login </button>
            
        </div>
    )
}
