import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Login = () => {
    const [token, setToken] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            // Check if authentication token exists when component mounts
            const token = localStorage.getItem('accessToken');
            setToken(token);
            if (token) {
                setLoggedIn(true);
                try {
                    const username = await fetchGitHubUsername(token);
                    setUsername(username);
                } catch (error) {
                    console.error('Error fetching GitHub username:', error);
                    setUsername('');
                }
            } else {
                setLoggedIn(false);
                setUsername('');
            }
        };

        fetchUserData();
    }, []);

    const handleLogin = () => {
        window.location.href = process.env.REACT_APP_API_URL + '/api/auth?redirectUrl=' + window.location.origin + '/auth';
    };

    async function fetchGitHubUsername(accessToken) {
        // Set up the request headers with the access token
        const headers = {
            Authorization: `Bearer ${accessToken}`
        };

        try {
            const response = await axios.get(process.env.GITHUB_API_URL + '/user', { headers });
            return response.data.login;
        } catch (error) {
            // Handle errors
            console.error('Error fetching GitHub username:', error);
            throw error;
        }
    }

    const handleLogout = () => {
        // Clear authentication token from browser storage
        localStorage.removeItem('accessToken');
        // Update authentication state
        setLoggedIn(false);
    };

    return (
        <div style={{display: 'inline-block'}}>
            {loggedIn ? (
                <div>
                    <p className='login_status'>Welcome {username}!</p>
                    <button className='login_button' onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <p className='login_status'>You are not logged in</p>
                    <button className='login_button' onClick={handleLogin}>Login with GitHub</button>
                </div>
            )}
        </div>
    );
};

export default Login;