import React from 'react';
import styled from "styled-components";
import logo from '../image/logo6.png'
import {Button} from '@material-ui/core';
import {auth,provider} from '../firebase'

function Login() {

    const signIn=e=>{
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error)=>alert(error.message));

    }
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src={logo} alt="app-logo" />
                <h1>Sign in to your Group talks</h1>
                <p>Welcome to Gtalk</p>
                <Button onClick={signIn}>
                    Sign in with Google
                </Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login

const LoginContainer=styled.div`
background-color:#e5faf9;
height:100vh;
display:grid;
place-items:center;
`

const LoginInnerContainer=styled.div`

padding:74px;
text-align:center;
background-color:white;
border-radius:10px;
box-shadow:0 1px 3px rgba(0,0,0,0,12), 0 1px 2px rgba(0,0,0,0.24);

    >img{
        object-fit:contain;
        height:183px;
        margin-bottom:40px;
    }

    >button{
        margin-top:50px;
        text-transform:inherit!important;
        background-color: #3a9fba !important;
        color:black;
    }
`
