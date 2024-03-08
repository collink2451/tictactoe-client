import React, { useEffect } from 'react';

const Callback = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('accessToken');
    console.log(accessToken);
    localStorage.setItem('accessToken', accessToken);
    window.location.href = '/';
  }, []);

  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

export default Callback;