import Navbar from "@/Componets/Navbar";
import Link from "next/link";
import React, { useRef } from "react";

export default function LoginForm({ onFormSubmit }) {
    const emailRef = useRef();
    const passRef = useRef();

    function onSubmitHandler(e) {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        onFormSubmit(email, password);
    }

    return (
        <>
            <Navbar />
            <form className="form" onSubmit={onSubmitHandler}>
                <div>
                    <h1 className="heading">Login Page</h1> <br />

                    <label htmlFor="email">Enter your email</label> <br />
                    <input type="text" id="email" className="input-form" ref={emailRef} /> <br /> <br />

                    <label htmlFor="password">Enter your password</label> <br />
                    <input type="password" id="password" className="input-form" ref={passRef} /> <br /> <br />

                    <button type="submit" className="form-btn">Login</button>

                    <br /> <br />

                    <Link href={"../../signup"} className="link-form">  Dont have an account? Signup</Link>
                </div>
            </form>
        </>
    );
}
