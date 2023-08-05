import React from 'react';
import LoginForm from '@/Componets/Auth/LoginForm';
import {signIn} from "next-auth/react"; 

export default function Login() {
    const  onSubmit = async  (email, password) => {
        const data =  await signIn('credentials' , {redirect:false , email , password});
        console.log(data);
    }
    return <LoginForm onFormSubmit={onSubmit} />;
}; 
    