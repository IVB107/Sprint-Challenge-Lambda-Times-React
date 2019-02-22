import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 2px solid darkseagreen;
    padding: 10px 20px;
    margin: 10%;

    > form {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;

        > input, > button {
            margin: 10px;
            width: 100%;
        }

        > button {
            width: 100%;
            border: 2px solid darkseagreen;
            background-color: inherit;
            padding: 5px;
            transition: .1s ease;

            &:hover {
                border: 2px solid darkseagreen;
                background-color: darkseagreen;
                transition: .1s ease;
            }
        } 
    }
`;

const Login = props => {
    return (
        <LoginContainer>
            <h4>Sign In</h4>
            <form>
                <input 
                    type="text"
                    value={props.username}
                    name="username"
                    onChange={props.enterUsername}
                    placeholder='Username'
                />
                <input 
                    type="password"
                    value={props.password}
                    name="password"
                    onChange={props.enterPassword}
                    placeholder='Password'
                />
                <button onClick={props.submitLogin}>Log In</button>
            </form>
        </LoginContainer>
    )
}

export default Login;