import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Login = () => {
    const [token, setToken] = useState('');
    const [scoreboard, setScoreboard] = useState([]);

    useEffect(() => {
        const fetchScoreBoard = async () => {
            const token = localStorage.getItem('accessToken');
            setToken(token);

            // Set authorization headers
            axios({
                method: 'get',
                url: process.env.REACT_APP_API_URL + '/scoreboard',
            }).then((response) => {
                console.log('API response:', response);
                response.data.sort((a, b) => b.score - a.score);
                setScoreboard(response.data);
            }).catch((error) => {
                console.error('Error accessing API:', error);
            });
        }

        fetchScoreBoard();
    }, []);

    const addScore = async () => {

        if (token) {
            // Set authorization headers
            axios({
                method: 'post',
                url: process.env.REACT_APP_API_URL + '/scoreboard',
                headers: {},
                data: {
                    accessToken: token,
                }
            }).then((response) => {
                console.log('API response:', response);
                response.data.sort((a, b) => b.score - a.score);
                setScoreboard(response.data);
            }).catch((error) => {
                console.error('Error accessing API:', error);
            });
        }
    };

    return (
        <div style={{display: 'inline-block'}}>
            <div>
                <button className='login_button' onClick={addScore}>I Won!</button>
                <br /><br /><br />
            </div>
            <div>
                <h2>Scoreboard</h2>
                <ol>
                    {scoreboard.map((user, index) => (
                        <li key={index}>
                            {user.username} - {user.score}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default Login;