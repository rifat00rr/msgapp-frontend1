
// ForgotPassword.js - Password Reset
import React, { useState } from "react";
import axios from "axios";

function ForgotPassword() {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/api/auth/forgot-password", { email });
            alert("Check your email for reset instructions.");
        } catch (error) {
            console.error("Forgot Password Error:", error);
        }
    };

    return (
        <div>
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
}

export default ForgotPassword;
