
// Profile.js - User Profile Page
import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            try {
                const res = await axios.get("/api/auth/profile");
                setUser(res.data);
            } catch (error) {
                console.error("Profile Fetch Error:", error);
            }
        }
        fetchUser();
    }, []);

    return (
        <div>
            <h2>Profile</h2>
            {user ? (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Profile;
