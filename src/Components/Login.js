import React, { useState } from 'react';

const Login = () => {
    const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('username'));
    const [name, setName] = useState(localStorage.getItem('username') || '');
    const [input, setInput] = useState('');

    const handleLogin = () => {
        if (!input.trim()) return;
        const trimmed = input.trim();
        localStorage.setItem('username', trimmed);
        setName(trimmed);
        setLoggedIn(true);
        setInput('');
    };

    const handleLogout = () => {
        localStorage.removeItem('username');
        setLoggedIn(false);
        setName('');
    };

    return (
        <div style={{display: 'inline-block'}}>
            {loggedIn ? (
                <div>
                    <p className='login_status'>Welcome {name}!</p>
                    <button className='login_button' onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <p className='login_status'>Enter your name to play</p>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                        placeholder="Your name"
                    />
                    <button className='login_button' onClick={handleLogin}>Play</button>
                </div>
            )}
        </div>
    );
};

export default Login;
