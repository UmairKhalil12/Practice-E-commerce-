
import Navbar from "@/Componets/Navbar";
import Link from "next/link";
import React, { useRef } from "react";

export default function SignupForm({ onFormSubmit }) {

    const emailRef = useRef();
    const passwordRef = useRef();

    const onSubmitHandler = (e) => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        e.preventDefault();
        onFormSubmit(email, password);
    };


    return (

        <>
            <Navbar />
            <form className="form" onSubmit={onSubmitHandler}>
                <div>

                    <h1 className="heading">Sign-up Page</h1> <br />

                    <label htmlFor="email">Enter your email</label> <br />
                    <input type="text" id="email" className="input-form" ref={emailRef} /> <br /> <br />

                    <label htmlFor="password">Enter your password</label> <br />
                    <input type="password" id="password" className="input-form" ref={passwordRef} /> <br /> <br />

                    <button type="submit" className="form-btn">Signup</button>
                    <br /> <br />

                    <Link href={"../../login"} className="link-form">  Already have an account ? Login</Link>

                </div>
            </form>
        </>

    );
}
